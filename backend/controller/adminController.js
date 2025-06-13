const { generateToken } = require("../helper");
const adminModel = require("../model/adminModel");
const express = require("express");
// const colorModel = require("../model/colorModel");


const adminController = {
    async login(req, res) {
        try {
            const email = req.body.email?.trim();
            const password = req.body.password?.trim();

            if (!email || !password) {
                return res.send({ msg: "All field are required", flag: 0 });
            }

            const admin = await adminModel.findOne({ email: email });
            if (admin) {
                console.log("Typed password:", password);
                console.log("Stored password:", admin.password);
                console.log("Are they equal?", admin.password === password);
                if (admin.password === password) {
                    return res.send({
                        msg: "Login Successfully",
                        flag: 1,
                        admin: { ...admin.toJSON(), password: null },
                        token: generateToken({ ...admin.toJSON() })
                    });
                } else {
                    return res.send({ msg: "Password doesn't match", flag: 0 });
                }
            } else {
                return res.send({ msg: "Admin not found", flag: 0 });
            }
        } catch (err) {
            console.log(err);
            return res.send({ msg: "Internal server error", flag: 0 });
        }
    }

}

module.exports = adminController;
