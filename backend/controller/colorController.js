const express = require("express");
// const categoryModel = require("../model/categoryModel");
const colorModel = require("../model/colorModel");
// const { createUniqueImageName } = require("../helper");
// const { unlinkSync } = require("fs")
// const fs = require('fs');


const colorController = {
    async create(req, res) {
        try {
            const { name, slug, hexcode } = req.body;
            console.log(req.body);

            if (!name || !slug || !hexcode) {
                return res.send({ msg: "All field is required", flag: 0 });
            };

            const color = new colorModel({
                name,
                slug,
                hexcode
            });

            color.save().then(
                (success) => {
                    console.log(success);

                    return res.send({
                        msg: "Color Added", flag: 1
                    })
                }
            ).catch(
                (err) => {
                    return res.send({
                        msg: "Unable to Add color", flag: 0
                    })
                    console.log(err);

                }
            )

        } catch (error) {
            res.send({ msg: "Internal server error", flag: 0, error })
            console.log(error);

        }
    },

    async getdata(req, res) {

        try {
            const id = req.params.id;
            let colors = null;
            if (id) {
                colors = await colorModel.findById(id);
            } else {
                colors = await colorModel.find();
            }

            if (!colors) {
                return res.send({ msg: "No color found", flag: 0 })
            }
            res.send({ msg: "colors fetched successfully", flag: 1, colors })



        } catch (error) {
            res.send({ msg: "Color controller me dikkat h ", flag: 0, error })
            // console.log(error);
        }
    },


    async status(req, res) {
        try {
            const id = req.params.id
            const color = await colorModel.findById(id);
            if (!color) {
                return res.send({ msg: "No color found", flag: 0 })
            }
            color.status = !color.status
            await color.save().then(
                () => {
                    return res.send({ msg: "color updated succesfully", flag: 1 })
                }
            ).catch(() => {
                return res.send({ msg: "unable to update color", flag: 0 });
            })
        } catch (error) {
            res.send({ msg: "Kuch na Kuch gad bad h", flag: 0, error })
            console.log(error);
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            const color = await colorModel.findById(id);
            await colorModel.deleteOne(
                {
                    _id: id
                }
            ).then(
                () => {
                    return res.send({ msg: "Color Deleted Succesfully", flag: 1 })
                }
            ).catch(
                (error) => {
                    res.send({ msg: " Unable to delete color", flag: 0, error })
                    console.log(error);


                }
            )

        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Internal Server Error", flag: 0, error });
        }

    },

    async update(req, res) {
        try {
            if (!color) {
                return res.send({ msg: "No color found", flag: 0 })
            } else {
                await colorModel.updateOne(
                    {
                        _id: id
                    },
                    {
                        name: req.body.name,
                        slug: req.body.slug,
                        hexcode: req.body.hexcode,
                    }
                ).then(
                    () => {
                        res.send({ msg: "color updated succesfully", flag: 1 })
                    }
                ).catch(
                    (error) => {
                        res.send({ msg: "Unable to Update color", flag: 0 })
                    }
                )
            }
        } catch (error) {
            res.send({ msg: "Color controller me dikkat h", flag: 0, error })
            console.log(error);

        }
    }
}


module.exports = colorController;
