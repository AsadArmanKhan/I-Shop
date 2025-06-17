const { generateToken } = require("../helper");
const UserModel = require("../model/UserModel");
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);

const userController = {
    async register(req, res) {
        try {
            const { name, email, password, shipping_address } = req.body;

            if (!email || !password || !name) {
                return res.send({ msg: "All field are required", flag: 0 });
            }
            const userExisting = await UserModel.findOne({ email: email });
            if (userExisting) {
                res.send({
                    msg: "try with different email id",
                    flag: 0,

                })
            } else {
                const user = new UserModel({
                    name: name,
                    email: email,
                    password: cryptr.encrypt(password),
                    shipping_address: shipping_address
                })

                await user.save()

                res.send({
                    msg: "User accound create",
                    flag: 1,
                    user: { ...user.toJSON(), password: null },
                    token: generateToken({ ...user.toJSON() })

                })
            }


        } catch (err) {

            res.send({ msg: "Internal server error", flag: 0 })
        }


    },
    async login(req, res) {
        try {

            const { email, password } = req.body;

            if (!email || !password) {
                return res.send({ msg: "All fields are required", flag: 0 });
            }

            const user = await UserModel.findOne({ email });
            if (user) {
                if (cryptr.decrypt(user.password) === password) {
                    return res.send({
                        msg: "Login Successfully",
                        flag: 1,
                        user: { ...user.toJSON(), password: null },
                        token: generateToken({ ...user.toJSON() })
                    });
                } else {
                    return res.send({ msg: "Password does not match", flag: 0 });
                }
            } else {
                return res.send({ msg: "User not found", flag: 0 });
            }

        } catch (err) {
            console.error("Login Error:", err);
            return res.send({ msg: "Internal server error", flag: 0 });
        }
    }
    ,

}

module.exports = userController;

                                                // Latest //

// const express = require("express");
// const userModel = require("../model/userModel");
// const { generateToken } = require("../helper");
// const Cryptr = require('cryptr');

// console.log("SECRET_KEY is:", process.env.SECRET_KEY);
// const cryptr = new Cryptr(process.env.SECRET_KEY);

// const userController = {
//     async register(req, res) {
//         try {
//             const { name, password, email, shipping_address } = req.body;
//             console.log(req.body);

//             if (!password || !name || !email) {
//                 return res.send({ msg: "All fields are required", flag: 0 });
//             }

//             const userExisting = await userModel.findOne({ email: email });
//             if (userExisting) {
//                 return res.send({ msg: "Try with a different email ID", flag: 0 });
//             }

//             const user = new userModel({
//                 name,
//                 email,
//                 password: cryptr.encrypt(password),
//                 shipping_address
//             });

//             await user.save();

//             res.send({
//                 msg: "Account created successfully",
//                 flag: 1,
//                 user: { ...user.toJSON(), password: null },
//                 token: generateToken({ ...user.toJSON() })
//             });

//         } catch (error) {
//             console.log(error);
//             res.send({ msg: "Error in userController", flag: 0, error });
//         }
//     },

//     async login(req, res) {
//         try {
//             const { password, email } = req.body;
//             console.log(req.body);

//             if (!password || !email) {
//                 return res.send({ msg: "All fields are required", flag: 0 });
//             }

//             const user = await userModel.findOne({ email: email });
//             console.log(user, "User found");

//             if (user) {
//                 const decryptedPassword = cryptr.decrypt(user.password);
//                 if (decryptedPassword === password) {
//                     res.send({
//                         msg: "Login successfully",
//                         flag: 1,
//                         user: { ...user.toJSON(), password: null },
//                         token: generateToken({ ...user.toJSON() })
//                     });
//                 } else {
//                     res.send({ msg: "Incorrect password", flag: 0 });
//                 }
//             } else {
//                 res.send({ msg: "Email not found", flag: 0 });
//             }

//         } catch (error) {
//             console.log(error, "user error");
//             res.send({ msg: "Error in user Controller", flag: 0, error });
//         }
//     },
// };

// module.exports = userController;

// const express = require("express");
// const userModel = require("../model/userModel");
// const { generateToken } = require("../helper");
// const Cryptr = require('cryptr');
// const cryptr = new Cryptr(process.env.SECRET_KEY);


// const userController = {
//     async register(req, res) {
//         try {
//             const { name, password, email, shipping_address } = req.body;
//             console.log(req.body);

//             if (!password || !name || !email) {
//                 return res.send({ msg: "All field is required", flag: 0 });
//             };
//             const userExisting = await userModel.findOne({ email: email });
//             if (userExisting) {
//                 res.send({
//                     msg: "try with different email id",
//                     flag: 0,
//                 });
//             } else {
//                 const user = new userModel({
//                     name: name,
//                     email: email,
//                     password: cryptr.encrypt(password),
//                     shipping_address: shipping_address
//                 })

//                 await user.save()
//                 res.send({
//                     msg: "Account created succesfully",
//                     flag: 1,
//                     userExisting: { ...user.toJSON, password: null },
//                     token: generateToken({ ...user.toJSON() })
//                 });
//             }

//         } catch (error) {
//             res.send({ msg: "Error in userController ", flag: 0, error })
//             console.log(error);

//         }
//     },



//     async login(req, res) {
//         console.log(res);
//         try {
//             const { password, email, } = req.body;
//             console.log(req.body);

//             if (!password || !email) {
//                 return res.send({ msg: "All field is required", flag: 0 });
//             };
//             const user = await userModel.findOne({ email: email });
//             if (user) {
//                 if (cryptr.decrypt(user.password) == password) {
//                     const cleanUser = { ...user.toJSON(), password: null };
//                     console.log("Clean user before sending:", cleanUser);
//                     res.send({
//                         msg: "Login succesfully",
//                         flag: 1,
//                         user: cleanUser,
//                         token: generateToken(cleanUser)
//                     });
//                 } else {
//                     res.send({ msg: "Incorrect password", flag: 0 });
//                 }
//             }

//         } catch (error) {
//             res.send({ msg: "Error in Admin Controller", flag: 0, error })
//             console.log(error);

//         }
//     },

// }


// module.exports = userController;
