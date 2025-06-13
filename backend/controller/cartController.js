
const express = require("express");
const CartModel = require("../model/cartModel")


const cartController = {
    async moveToDb(req, res) {
        console.log(req.body);
        try {
            const { cart, user_id } = req.body
            if (Array.isArray(cart) && cart.length > 0) {
                const allPromises = cart.map(async (item) => {
                    const { productId, qty } = item
                    const existingICart = await CartModel.findOne({ user_id, product_id: productId })

                    if (existingICart) {
                        existingICart.qty += Number(qty)
                    } else {
                        await CartModel.create({
                            user_id: user_id,
                            productId: productId,
                            qty: 1
                        })
                    }
                })
                await Promise.all(allPromises)
            }
            const updatedCart = await CartModel.find({ user_id }).populate(
                'product_id',
                '_id finalPrice orignalPrice '
            )
            res.send({ msg: 'Cart Proccessed successfully', flag: 1, cart: updatedCart })
        } catch (error) {
            res.send({ msg: "Error in cartController ", flag: 0, error })
            console.log(error);                                     

        }
    },

}


module.exports = cartController;
