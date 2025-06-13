
const express = require("express");
const userModel = require("../model/userModel");
const { generateToken } = require("../helper");
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET_KEY);


const userController = {
    async register(req, res) {
        try {
            const { name, password, email, shipping_address } = req.body;
            console.log(req.body);

            if (!password || !name || !email) {
                return res.send({ msg: "All field is required", flag: 0 });
            };
            const userExisting = await userModel.findOne({ email: email });
            if (userExisting) {
                res.send({
                    msg: "try with different email id",
                    flag: 0,
                });
            } else {
                const user = new userModel({
                    name: name,
                    email: email,
                    password: cryptr.encrypt(password),
                    shipping_address: shipping_address
                })

                await user.save()
                res.send({
                    msg: "Account created succesfully",
                    flag: 1,
                    userExisting: { ...user.toJSON, password: null },
                    token: generateToken({ ...user.toJSON() })
                });
            }

        } catch (error) {
            res.send({ msg: "Error in userController ", flag: 0, error })
            console.log(error);

        }
    },



    async login(req, res) {
        console.log(res);
        try {
            const { password, email, } = req.body;
            console.log(req.body);

            if (!password || !email) {
                return res.send({ msg: "All field is required", flag: 0 });
            };
            const user = await userModel.findOne({ email: email });
            if (user) {
                if (cryptr.decrypt(user.password) == password) {
                    const cleanUser = { ...user.toJSON(), password: null };
                    console.log("Clean user before sending:", cleanUser);
                    res.send({
                        msg: "Login succesfully",
                        flag: 1,
                        user: cleanUser,
                        token: generateToken(cleanUser)
                    });
                } else {
                    res.send({ msg: "Incorrect password", flag: 0 });
                }
            }

        } catch (error) {
            res.send({ msg: "Error in Admin Controller", flag: 0, error })
            console.log(error);

        }
    },

}


module.exports = userController;
