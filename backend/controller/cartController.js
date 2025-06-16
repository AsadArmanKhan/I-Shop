const CartModel = require("../model/cartModel");

const cartController = {
    // Move local cart to MongoDB for a user
    async moveToDb(req, res) {
        console.log("moveToDb request body:", req.body);
        try {
            const { cart, user_id } = req.body;

            if (!user_id) {
                return res.send({ msg: "Missing user_id", flag: 0 });
            }

            if (!Array.isArray(cart) || cart.length === 0) {
                return res.send({ msg: "Empty or invalid cart", flag: 0 });
            }

            const allPromises = cart.map(async (item) => {
                const { productId, qty } = item;

                const existingCart = await CartModel.findOne({ user_id, product_id: productId });

                if (existingCart) {
                    existingCart.qty += Number(qty);
                    await existingCart.save();
                } else {
                    await CartModel.create({
                        user_id,
                        product_id: productId,
                        qty: Number(qty)
                    });
                }
            });

            await Promise.all(allPromises);

            const updatedCart = await CartModel.find({ user_id }).populate(
                'product_id',
                '_id finalPrice originalPrice'
            );

            return res.send({
                msg: 'Cart processed successfully',
                flag: 1,
                cart: updatedCart
            });

        } catch (error) {
            console.error("Error in moveToDb:", error);
            return res.send({ msg: "Error in cartController", flag: 0, error });
        }
    },

    // Get cart by user ID
    async getCartByUser(req, res) {
        const { user_id } = req.params;

        try {
            const cart = await CartModel.find({ user_id }).populate(
                'product_id',
                '_id finalPrice originalPrice'
            );

            return res.send({
                msg: "Fetched user's cart",
                flag: 1,
                cart
            });
        } catch (error) {
            console.error("Error in getCartByUser:", error);
            return res.send({ msg: "Failed to fetch cart", flag: 0, error });
        }
    }
};

module.exports = cartController;
