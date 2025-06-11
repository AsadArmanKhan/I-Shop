const { generateToken } = require("../helper");
const adminModel = require("../model/adminModel");
const express = require("express");
// const colorModel = require("../model/colorModel");


const adminController = {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            console.log(password)
            if (!email || !password) {
                return res.send({ msg: "All field are required", flag: 0 });
            }
            const admin = await adminModel.findOne({ email: email });
            if (admin) {
                if (admin.password === password) {
                    res.send({
                        msg: "Login Succesfully",
                        flag: 1,
                        admin: { ...admin.toJSON(), password: null },
                        token: generateToken({ ...admin.toJSON() })

                    })
                } else {
                    res.send({ msg: "password do'es not match", flag: 0 })
                }
            }

        } catch (err) {
            console.log(err)
            res.send({ msg: "Internal server error", flag: 0 })
        }


    },
    // async login(req, res) {
    //     try {
    //         const { password, email, } = req.body;
    //         // console.log(req.body);

    //         if (!password || !email) {
    //             return res.send({ msg: "All field is required", flag: 0 });
    //         };
    //         const admin = await adminModel.findOne({ email: email });
    //         if (admin) {
    //             if (admin.password == password) {
    //                 res.send({
    //                     msg: "Login succesfully",
    //                     flag: 1,
    //                     admin: { ...admin.toJSON, password: null },
    //                     token: generateToken({ ...admin.toJSON() })
    //                 });
    //             } else {
    //                 res.send({ msg: "Incorrect password", flag: 0 });
    //             }
    //         }

    //     } catch (error) {
    //          res.send({ msg: "Error from Admin Controller ", flag: 0, error })
    //         console.log(error);

    //     }
    // },
}

module.exports = adminController;
