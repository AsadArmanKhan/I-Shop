const CartModel = require("../model/cartModel");
const orderModel = require("../model/orderModel");


const orderController = {
    async placeOrder(req, res) {
        try {
            console.log(req.body, "reqqqqqqq")
            const { user_id, order_total, payment_mode, shipping_details } = req.body;
            const cart = await CartModel.find({ user_id }).populate(
                'product_id',
                '_id finalPrice'
            );
            console.log(cart, "from checkout")
            const product_details = cart.map((cd) => {
                console.log(cd, "cd ...")
                return {
                    product_id: cd.product_id._id,
                    qty: cd.qty,
                    price: cd.product_id.finalPrice,
                    total: (cd.qty * cd.product_id.finalPrice)
                }
            })

            const order = await new orderModel(
                {
                    user_id: user_id,
                    order_total: order_total,
                    payment_mode: payment_mode,
                    shipping_details: shipping_details,
                    product_details: product_details,
                    // order_status: 0
                }
            ).save()
            if (payment_mode === 0) {
                await CartModel.deleteMany({ user_id })
                res.send({ msg: "order place succesfully", flag: 1, order_id: order._id })
            } else {

            }

            console.log(order, "order")

        } catch (error) {
            console.log(error)
            res.send({ msg: "Internal server error", flag: 0 })
        }

    }
}

module.exports = orderController;