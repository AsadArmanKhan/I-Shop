const { generateToken } = require("../helper");
const adminModel = require("../model/adminModel");
const express = require("express");
// const colorModel = require("../model/colorModel");


const adminController = {
    async login(req, res) {
        try {
            const { password, email, } = req.body;
            console.log(req.body);

            if (!password || !email) {
                return res.send({ msg: "All field is required", flag: 0 });
            };
            const admin = await adminModel.findOne({ email: email });
            if (admin) {
                if (admin.password == password) {
                    res.send({
                        msg: "Login succesfully",
                        flag: 1,
                        admin: { ...admin.toJSON, password: null },
                        token: generateToken({ ...admin.toJSON() })
                    }); 
                } else {
                    res.send({ msg: "Incorrect password", flag: 0 });
                }
            }

        } catch (error) {
            res.send({ msg: "Admin Controller me dikkat h", flag: 0, error })
            console.log(error);

        }
    },

    // async getdata(req, res) {

    //     try {
    //         const id = req.params.id;
    //         let colors = null;
    //         if (id) {
    //             colors = await colorModel.findById(id);
    //         } else {
    //             colors = await colorModel.find();
    //         }

    //         if (!colors) {
    //             return res.send({ msg: "No color found", flag: 0 })
    //         }
    //         res.send({ msg: "colors fetched successfully", flag: 1, colors })



    //     } catch (error) {
    //         res.send({ msg: "Color controller me dikkat h ", flag: 0, error })
    //         // console.log(error);
    //     }
    // },



}

module.exports = adminController;
