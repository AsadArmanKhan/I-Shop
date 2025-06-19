

const CartModel = require("../model/cartModel");

const cartController = {
    async moveToDb(req, res) {
        try {
            const { cart, user_id } = req.body;

            if (Array.isArray(cart) && cart.length > 0) {
                const allPromises = cart.map(async (item) => {
                    const { productId, qty } = item;
                    if (!productId || !qty) return;

                    const existing = await CartModel.findOne({ user_id, product_id: productId });

                    if (existing) {
                        existing.qty += Number(qty);
                        await existing.save();
                    } else {
                        await CartModel.create({
                            user_id,
                            product_id: productId,
                            qty: Number(qty),
                        });
                    }
                });

                await Promise.all(allPromises);
            }

            const updatedCart = await CartModel.find({ user_id })
                .populate({
                    path: 'product_id',
                    match: { status: true },
                    select: '_id name thumbnail finalPrice orignalPrice'
                })
                .sort({ updatedAt: -1 });

            res.status(200).json({
                msg: "Cart processed successfully",
                flag: 1,
                cart: updatedCart,
            });
        } catch (error) {
            console.error("Cart error:", error);
            res.status(500).json({ msg: "Error in cartController", flag: 0, error: error.message });
        }
    },



    async addToCart(req, res) {
        try {
            console.log(req.body, "CART-REQ.BODY-55")

            const { userId, productId, qty } = req.body;

            if (!userId || !productId || !qty) {
                res.send({ msg: "all feilds are required ", flag: 0 });

            }

            const existingItem = await CartModel.findOne({ user_id: userId, product_id: productId });
            console.log(existingItem);
            res.send(existingItem)
            if (existingItem) {
                await CartModel.updateOne(
                    { _id: existingItem._id },
                    { $inc: { qty: Number(qty) } }
                );
            } else {
                const newItem = new CartModel({
                    user_id: userId,
                    product_id: productId,
                    qty: Number(qty)
                });
                await newItem.save();
            }

            return res.send({ msg: "cart updated successfully ", flag: 1 })

        } catch (error) {
            console.log(error)
            res.send({ msg: "internel server error", flag: 0 })
        }


    },


    async getUserCart(req, res) {
        try {
            const { user_id } = req.params;

            const cart = await CartModel.find({ user_id })
                .populate({
                    path: 'product_id',
                    match: { status: true },
                    select: '_id name thumbnail finalPrice orignalPrice',
                })
                .sort({ updatedAt: -1 });

            res.status(200).json({
                msg: "Cart fetched successfully",
                flag: 1,
                cart
            });
        } catch (error) {
            console.error("Fetch cart error:", error);
            res.status(500).json({
                msg: "Error fetching user cart",
                flag: 0,
                error: error.message,
            });
        }
    }
};

module.exports = cartController;