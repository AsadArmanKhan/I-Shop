const CartModel = require("../model/cartModel");
const OrderModel = require("../model/orderModel");
const Razorpay = require('razorpay');
const crypto = require('crypto');
const userModel = require("../model/userModel");

// ⚠️ Replace with real env vars or use process.env
var instance = new Razorpay({
    key_id: 'YOUR_KEY_ID',
    key_secret: 'YOUR_SECRET'
});

const orderController = {
    async placeOrder(req, res) {
        try {
            console.log(req.body, "req body in placeOrder");
            const { user_id, order_total, payment_mode, shipping_details } = req.body;

            const cart = await CartModel.find({ user_id }).populate('product_id', '_id finalPrice');
            if (!cart || cart.length === 0) {
                return res.send({ msg: "Cart is empty", flag: 0 });
            }

            const product_details = cart.map((cd) => ({
                product_id: cd.product_id._id,
                qty: cd.qty,
                price: cd.product_id.finalPrice,
                total: cd.qty * cd.product_id.finalPrice
            }));

            const order = new OrderModel({
                user_id,
                order_total,
                payment_mode,
                shipping_details,
                product_details,
            });
            await order.save();

            if (payment_mode === 0) {
                await CartModel.deleteMany({ user_id });
                res.send({ msg: "Order placed successfully", flag: 1, order_id: order._id });
            } else {
                var options = {
                    amount: order_total * 100,
                    currency: "INR",
                    receipt: order._id.toString(),
                };
                instance.orders.create(options, async function (err, razorpayOrder) {
                    if (err) {
                        console.error("Razorpay create error:", err);
                        return res.send({ msg: 'Initial Payment Failed', flag: 0 });
                    } else {
                        order.razorpay_order_id = razorpayOrder.id;
                        await order.save();
                        res.send({
                            msg: 'Order Created Successfully',
                            flag: 1,
                            order_id: order._id,
                            razorpay_order_id: razorpayOrder.id
                        });
                    }
                });
            }

        } catch (error) {
            console.error("Error in placeOrder:", error);
            res.send({ msg: "Internal server error", flag: 0 });
        }
    },

    async orderSuccess(req, res) {
        try {
            const { order_id, user_id, razorpay_response } = req.body;

            const order = await OrderModel.findById(order_id);
            if (!order) return res.send({ msg: 'Order not found', flag: 0 });

            const user = await userModel.findById(user_id);
            if (!user) return res.send({ msg: "User not found", flag: 0 });

            if (order.payment_status === 1) {
                return res.send({ msg: 'Order already paid', flag: 1 });
            }

            // ⚠️ Replace with real secret from env
            const generated_signature = crypto
                .createHmac('sha256', 'YOUR_SECRET')
                .update(razorpay_response.razorpay_order_id + '|' + razorpay_response.razorpay_payment_id)
                .digest('hex');

            console.log("Generated Signature:", generated_signature);
            console.log("Razorpay Signature:", razorpay_response.razorpay_signature);

            if (generated_signature !== razorpay_response.razorpay_signature) {
                return res.send({ msg: 'Payment Verification Failed', flag: 0 });
            }

            // Payment verified: update order
            order.payment_status = 1;
            order.order_status = 1;
            order.razorpay_payment_id = razorpay_response.razorpay_payment_id;
            await order.save();

            // Optionally clear cart after payment
            await CartModel.deleteMany({ user_id });

            res.send({ msg: "Payment Verified & Order Completed", flag: 1 });
        } catch (error) {
            console.error("Error in orderSuccess:", error);
            res.send({ msg: "Internal server error", flag: 0 });
        }
    },
    async getOrders(req, res) {
        try {
            const orders = await OrderModel.find()
            // .populate(
            // 'user_id',
            // '_id name email'
            // )
            res.send({ msg: 'Orders fetched succesfully', flag: 1, orders })
        } catch (error) {
            console.error('Error in Fetching Orders', error.msg);
            res.send({ msg: "Internal Server Error", flag: 0 })
        }
    },
    async getOrderById(req, res) {
        try {
            const { orderId } = req.params;
            console.log(req.params);
            console.log(orderId);
            const order = await OrderModel.find({ razorpay_order_id: orderId }).populate(
                'user_id',
                '_id name email'
            )
            if (!order) {
                return res.send({ msg: "Order not found", flag: 0 })
            }
            res.send({ msg: 'Order fetched succcesfully', flag: 1 })

        } catch (error) {
            console.log('Error in Fetching Order', error);
            res.send({ msg: 'Internal server error', flag: 0 })

        }
    }

};

module.exports = orderController;






// const CartModel = require("../model/cartModel");
// const OrderModel = require("../model/orderModel");
// // const orderModel = require("../model/orderModel");
// const Razorpay = require('razorpay');
// const crypto = require('crypto')
// const userModel = require("../model/userModel");
// var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

// const orderController = {
//     async placeOrder(req, res) {
//         try {
//             console.log(req.body, "reqqqqqqq")
//             const { user_id, order_total, payment_mode, shipping_details } = req.body;
//             const cart = await CartModel.find({ user_id }).populate(
//                 'product_id',
//                 '_id finalPrice'
//             );
//             console.log(cart, "from checkout")
//             const product_details = cart.map((cd) => {
//                 console.log(cd, "cd ...")
//                 return {
//                     product_id: cd.product_id._id,
//                     qty: cd.qty,
//                     price: cd.product_id.finalPrice,
//                     total: (cd.qty * cd.product_id.finalPrice)
//                 }
//             })

//             const order = await new orderModel(
//                 {
//                     user_id: user_id,
//                     order_total: order_total,
//                     payment_mode: payment_mode,
//                     shipping_details: shipping_details,
//                     product_details: product_details,
//                     // order_status: 0
//                 }
//             ).save()
//             if (payment_mode === 0) {
//                 await CartModel.deleteMany({ user_id })
//                 res.send({ msg: "order place succesfully", flag: 1, order_id: order._id })
//             } else {
//                 var options = {
//                     amount: order_total * 100,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//                     currency: "INR",
//                     receipt: order._id,
//                 };
//                 instance.orders.create(options, async function (err, Razorpayorder) {
//                     if (err) {
//                         return res.send({ msg: 'Initial Payment Fail', flag: 0 });
//                     } else {
//                         order.razorpay_order_id = Razorpayorder.id
//                         await order.save()
//                         res.send({
//                             msg: 'Order Created Successfully', flag: 1,
//                             order_id: order_id,
//                             razorpay_order_id: Razorpayorder.id
//                         })
//                     }
//                 });
//             }

//             console.log(order, "order")

//         } catch (error) {
//             console.log(error)
//             res.send({ msg: "Internal server error", flag: 0 })
//         }

//     },
//     async orderSuccess(req, res) {
//         try {
//             const { order_id, user_id, razorpay_response } = req.body;
//             const order = await OrderModel.findById(order_id)
//             if (!order) {
//                 return res.send({ msg: 'Order not found', flag: 0 })
//             }
//             const user = await userModel.findById(user_id);
//             if (!user) {
//                 return res.send({ msg: "User not found", flag: 0 })
//             }
//             if (order.payment_status === 1) {
//                 return res.send({ msg: 'Order already paid', flag: 1 })
//             }
//             const generated_signature =
//                 crypto
//                     .createHmac('sha256', 'process.env.RAZORPA_KEY_SECRET')
//                     .update(razorpay_response.razorpay_order_id + '|' + razorpay_response.razorpay_payment_id).digest('hex')
//             console.log(generated_signature);
//             console.log(razorpay_response);
//             console.log(razorpay_response.razorpay_signature);
//             if (generated_signature !== razorpay_response.razorpay_signature) {
//                 return res.send({ msg: 'Payment Verification Failed', flag: 0 })
//             }



//         } catch (error) {
//             console.log(error);

//         }

//     }
// }

// module.exports = orderController;    