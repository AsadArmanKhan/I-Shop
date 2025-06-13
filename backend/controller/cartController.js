
const express = require("express");
const CartModel = require("../model/cartModel")


const cartController = {
    async moveToDb(req, res) {
        console.log(req.body);
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
                        user_id: user_id,
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
    }
};



// const cartController = {
//     async moveToDb(req, res) {
//         console.log(req.body);
//         try {
//             const { cart, user_id } = req.body
//             if (Array.isArray(cart) && cart.length > 0) {
//                 const allPromises = cart.map(async (item) => {
//                     const { productId, qty } = item
//                     const existingICart = await CartModel.findOne({ user_id, product_id: productId })

//                     if (existingICart) {
//                         existingICart.qty += Number(qty)
//                     } else {
//                         await CartModel.create({
//                             user_id: user_id,
//                             productId: productId,
//                             qty: 1
//                         })
//                     }
//                 })
//                 await Promise.all(allPromises)
//             }
//             const updatedCart = await CartModel.find({ user_id }).populate(
//                 'product_id',
//                 '_id finalPrice orignalPrice '
//             )
//             res.send({ msg: 'Cart Proccessed successfully', flag: 1, cart: updatedCart })
//         } catch (error) {
//             res.send({ msg: "Error in cartController ", flag: 0, error })
//             console.log(error);                                     

//         }
//     },

// }


module.exports = cartController;
