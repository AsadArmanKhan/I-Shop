
const CartModel = require("../model/cartModel");

const cartController = {
    async moveTodb(req, res) {
        try {
            const { user_id, cart } = req.body;
            // Only update if cart is a valid array with items
            if (Array.isArray(cart) && cart.length > 0) {
                const allPromises = cart.map(async (item) => {
                    const { productId, qty } = item;
                    const existingCart = await CartModel.findOne({ user_id, product_id: productId });

                    if (existingCart) {
                        existingCart.qty += Number(qty);
                        await existingCart.save();
                    } else {
                        await CartModel.create({ user_id, product_id: productId, qty: Number(qty) });
                    }
                });

                await Promise.all(allPromises); // Wait for DB operations
            }

            // Always return the latest cart from DB
            const updatedCart = await CartModel.find({ user_id }).populate(
                'product_id',
                '_id finalPrice originalPrice'
            );

            res.status(200).send({ msg: 'Cart processed successfully', flag: 1, cart: updatedCart });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: 'Internal Server Error', flag: 0 });
        }
    },
    async addToCart(req, res) {
        try {
            console.log(req.body,"cart Controller");

            const { userId, productId, qty } = req.body;

            if (!userId || !productId || !qty) {
                return res.status(400).json({ msg: "Missing required fields", status: 0 });
            }

            const existingItem = await CartModel.findOne({ user_id: userId, product_id: productId });

            if (existingItem) {
                // Increase quantity atomically
                await CartModel.updateOne(
                    { _id: existingItem._id },
                    { $inc: { qty: Number(qty) } }
                );
            } else {
                // Create new cart item and await saving
                const newItem = new CartModel({
                    user_id: userId,
                    product_id: productId,
                    qty: Number(qty)
                });
                await newItem.save();
            }

            console.log("Hello")

            return res.status(200).json({ msg: "Cart updated successfully", status: 1 });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Internal server error", status: 0 });
        }
    }

}

module.exports = cartController;


// const CartModel = require("../model/cartModel");
// const cartController = {
//     async moveTodb(req, res) {
//         try {
//             const { user_id, cart } = req.body;
//             // Only update if cart is a valid array with items
//             if (Array.isArray(cart) && cart.length > 0) {
//                 const allPromises = cart.map(async (item) => {
//                     const { productId, qty } = item;
//                     const existingCart = await CartModel.findOne({ user_id, product_id: productId });

//                     if (existingCart) {
//                         existingCart.qty += Number(qty);
//                         await existingCart.save();
//                     } else {
//                         await CartModel.create({ user_id, product_id: productId, qty: Number(qty) });
//                     }
//                 });

//                 await Promise.all(allPromises); // Wait for DB operations
//             }

//             // Always return the latest cart from DB
//             const updatedCart = await CartModel.find({ user_id }).populate(
//                 'product_id',
//                 '_id finalPrice originalPrice'
//             );

//             res.status(200).send({ msg: 'Cart processed successfully', flag: 1, cart: updatedCart });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ msg: 'Internal Server Error', flag: 0 });
//         }
//     },
//     async addToCart(req, res) {
//         try {
//             console.log(req.body,"req,body")

//             const { userId, productId, qty } = req.body;

//             if (!userId || !productId || !qty) {
//                 return res.status(400).json({ msg: "Missing required fields", status: 0 });
//             }

//             const existingItem = await CartModel.findOne({ user_id: userId, product_id: productId });

//             if (existingItem) {
//                 // Increase quantity atomically
//                 await CartModel.updateOne(
//                     { _id: existingItem._id },
//                     { $inc: { qty: Number(qty) } }
//                 );
//             } else {
//                 // Create new cart item and await saving
//                 const newItem = new CartModel({
//                     user_id: userId,
//                     product_id: productId,
//                     qty: Number(qty)
//                 });
//                 await newItem.save();
//             }

//             console.log("Hello")

//             return res.status(200).json({ msg: "Cart updated successfully", status: 1 });

//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ msg: "Internal server error", status: 0 });
//         }
//     }




// }

// module.exports = cartController;




// const CartModel = require("../model/cartModel");
// const cartController = {
//     // Move local cart to MongoDB for a user
//     // async moveToDb(req, res) {
//     //     console.log("moveToDb request body:", req.body);
//     //     try {
//     //         const { cart, user_id } = req.body;
//     //         console.log("moveToDb request body:", req.body);
//     //         console.log("📦 Incoming Cart Array:", cart);
//     //         console.log("👤 Incoming User ID:", user_id);

//     //         if (!user_id) {
//     //             return res.send({ msg: "Missing user_id", flag: 0 });
//     //         }

//     //         if (!Array.isArray(cart) || cart.length === 0) {
//     //             return res.send({ msg: "Empty or invalid cart", flag: 0 });
//     //         }

//     //         const allPromises = cart.map(async (item) => {
//     //             const { productId, qty } = item;

//     //             const existingCart = await CartModel.findOne({ user_id, product_id: productId });

//     //             if (existingCart) {
//     //                 existingCart.qty += Number(qty);
//     //                 await existingCart.save();
//     //             } else {
//     //                 await CartModel.create({
//     //                     user_id,
//     //                     product_id: productId,
//     //                     qty: Number(qty)
//     //                 });
//     //             }
//     //         });

//     //         await Promise.all(allPromises);

//     //         const updatedCart = await CartModel.find({ user_id }).populate(
//     //             'product_id',
//     //             '_id finalPrice originalPrice'
//     //         );

//     //         return res.send({
//     //             msg: 'Cart processed successfully',
//     //             flag: 1,
//     //             cart: updatedCart
//     //         });

//     //     } catch (error) {
//     //         console.error("Error in moveToDb:", error);
//     //         return res.send({ msg: "Error in cartController", flag: 0, error });
//     //     }
//     // },
//     async moveToDb(req, res) {
//         try {
//             const { user_id, cart } = req.body;
//             console.log(req.body, 'controller 59');
//             if (Array.isArray(cart) && cart.length > 0) {
//                 const allPromise = cart.map(async (item) => {
//                     const { productId, qty } = item
//                     const existingCart = await CartModel.findOne({ user_id, product_id: productId })
//                     if (existingCart) {
//                         existingCart.qty += Number(qty)
//                         await existingCart.save();
//                     } else {
//                         await CartModel.create({ user_id, product_id: productId, qty: Number(qty) })
//                     }
//                 })
//                 await Promise.all(allPromise);

//             }
//             const updatedCart = await CartModel.find({ user_id }).populate(
//                 'product_id',
//                 '_id finalPrice originalPrice'
//             )
//             return res.send({
//                 msg: 'Cart processed successfully',
//                 flag: 1,
//                 cart: updatedCart
//             });
//         } catch (error) {
//             console.error("Error in moveToDb:", error);
//             return res.send({ msg: "Error in cartController", flag: 0, error });
//         }
//     },

//     // Get cart by user ID
//     async getCartByUser(req, res) {
//         try {
//             const { userId, productId } = req.body
//             if (!userId || !productId) {
//                 return res.send({ msg: "Missing required fields", flag: 0 })
//             }
//             const existingItem = await CartModel.findOne({ user_Id: userId, product_id: productId })
//             if (existingItem) {
//                 await CartModel.updateOne(
//                     { _id: existingItem._id },
//                     { $inc: { qty: Number(qty) } }
//                 );
//             } else {
//                 const newItem = new CartModel({
//                     user_id: userId,
//                     product_id: productId,
//                     qty: Number(qty)

//                 })
//                 await newItem.save();
//             }
//         } catch (error) {

//         }
//     }
//     // async getCartByUser(req, res) {
//     //     const { user_id } = req.params;

//     //     try {
//     //         const cart = await CartModel.find({ user_id }).populate(
//     //             'product_id',
//     //             '_id finalPrice originalPrice'
//     //         );

//     //         return res.send({
//     //             msg: "Fetched user's cart",
//     //             flag: 1,
//     //             cart
//     //         });
//     //     } catch (error) {
//     //         console.error("Error in getCartByUser:", error);
//     //         return res.send({ msg: "Failed to fetch cart", flag: 0, error });
//     //     }
//     // }
    
// };

// module.exports = cartController;


// // const CartModel = require("../model/cartModel");

// // const cartController = {
// //     async moveTodb(req, res) {
// //         try {
// //             const { user_id, cart } = req.body;
// //             // Only update if cart is a valid array with items
// //             if (Array.isArray(cart) && cart.length > 0) {
// //                 const allPromises = cart.map(async (item) => {
// //                     const { productId, qty } = item;
// //                     const existingCart = await CartModel.findOne({ user_id, product_id: productId });

// //                     if (existingCart) {
// //                         existingCart.qty += Number(qty);
// //                         await existingCart.save();
// //                     } else {
// //                         await CartModel.create({ user_id, product_id: productId, qty: Number(qty) });
// //                     }
// //                 });

// //                 await Promise.all(allPromises); // Wait for DB operations
// //             }

// //             // Always return the latest cart from DB
// //             const updatedCart = await CartModel.find({ user_id }).populate(
// //                 'product_id',
// //                 '_id finalPrice originalPrice'
// //             );

// //             res.status(200).send({ msg: 'Cart processed successfully', flag: 1, cart: updatedCart });
// //         } catch (error) {
// //             console.error(error);
// //             res.status(500).json({ msg: 'Internal Server Error', flag: 0 });
// //         }
// //     },
// //     async addToCart(req, res) {
// //         try {
// //             console.log(req.body, "req,body")

// //             const { userId, productId, qty } = req.body;

// //             if (!userId || !productId || !qty) {
// //                 return res.status(400).json({ msg: "Missing required fields", status: 0 });
// //             }

// //             const existingItem = await CartModel.findOne({ user_id: userId, product_id: productId });

// //             if (existingItem) {
// //                 // Increase quantity atomically
// //                 await CartModel.updateOne(
// //                     { _id: existingItem._id },
// //                     { $inc: { qty: Number(qty) } }
// //                 );
// //             } else {
// //                 // Create new cart item and await saving
// //                 const newItem = new CartModel({
// //                     user_id: userId,
// //                     product_id: productId,
// //                     qty: Number(qty)
// //                 });
// //                 await newItem.save();
// //             }

// //             console.log("Hello")

// //             return res.status(200).json({ msg: "Cart updated successfully", status: 1 });

// //         } catch (error) {
// //             console.error(error);
// //             return res.status(500).json({ msg: "Internal server error", status: 0 });
// //         }
// //     }




// // }

// // module.exports = cartController;