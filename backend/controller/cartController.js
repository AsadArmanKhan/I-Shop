
const express = require("express");
const CartModel = require("../model/cartModel")


const cartController = {
    async moveToDb(req, res) {
        try {
            console.log(req.body);


        } catch (error) {
            res.send({ msg: "Error in cartController ", flag: 0, error })
            console.log(error);

        }
    },

}


module.exports = cartController;
