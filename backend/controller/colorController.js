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
            res.send({ msg: "colors fetched successfully", flag: 1, colors  })



        } catch (error) {
            res.send({ msg: "Kuch na Kuch gad bad h", flag: 0, error })
            // console.log(error);
        }
    },


    // async status(req, res) {
    //     try {
    //         const id = req.params.id
    //         const category = await categoryModel.findById(id);
    //         if (!category) {
    //             return res.send({ msg: "No catigories found", flag: 0 })
    //         }
    //         await categoryModel.updateOne(
    //             { _id: id },
    //             { status: !category.status }
    //         ).then(
    //             (result) => {
    //                 return res.send({ msg: "Category update", flag: 1 });
    //             }).catch(
    //                 (error) => {
    //                     console.log(error)
    //                     return res.send({ msg: "Unable to update Category", flag: 0, }
    //                     );
    //                 }
    //             )
    //     } catch (error) {
    //         res.send({ msg: "Kuch na Kuch gad bad h", flag: 0, error })
    //         console.log(error);
    //     }
    // },
    // async delete(req, res) {
    //     try {
    //         const id = req.params.id;
    //         const category = await categoryModel.findById(id);
    //         await categoryModel.deleteOne(
    //             {
    //                 _id: id
    //             }
    //         ).then(
    //             () => {

    //                 const oldImagePath = `./public/images/categories/${category.Image}`;
    //                 if (fs.existsSync(oldImagePath)) {
    //                     unlinkSync(oldImagePath);
    //                 }

    //                 res.send({ msg: "Category Deleted", flag: 1 })
    //             }
    //         ).catch(
    //             (error) => {
    //                 res.send({ msg: " Unable to delete category", flag: 0, error })
    //                 console.log(error);


    //             }
    //         )

    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send({ msg: "Internal Server Error", flag: 0, error });
    //     }

    // },
    // async update(req, res) {
    //     try {
    //         const id = req.params.id;
    //         const image = req.files && req.files.Image ? req.files.Image : null;
    //         const category = await categoryModel.findById(id);
    //         if (!category) {
    //             return res.send({ msg: "No catigories found", flag: 0 })
    //         }

    //         if (image) {
    //             //All field update
    //             const categoryImage = createUniqueImageName(image.name);
    //             const destination = `./public/images/categories/${categoryImage}`;
    //             image.mv(
    //                 destination,
    //                 async (err) => {
    //                     if (err) {
    //                         return res.send({ msg: "Unable to update Category Image ", flag: 0 })

    //                     } else {
    //                         try {


    //                             await categoryModel.updateOne(
    //                                 {
    //                                     _id: id
    //                                 },
    //                                 {
    //                                     name: req.body.name,
    //                                     slug: req.body.slug,
    //                                     image: categoryImage
    //                                 },
    //                             );
    //                             const oldImagePath = `./public/images/categories/${category.Image}`;
    //                             if (fs.existsSync(oldImagePath)) {
    //                                 fs.unlinkSync(oldImagePath);
    //                             }
    //                         } catch (error) {

    //                             res.send({ msg: "Unable to update Category", flag: 0, error })
    //                             console.log(error);

    //                         }
    //                     }
    //                 }
    //             )

    //         } else {
    //             await categoryModel.updateOne(
    //                 {
    //                     _id: id
    //                 },
    //                 {
    //                     name: req.body.name,
    //                     slug: req.body.slug,
    //                     // image: categoryImage
    //                 },

    //             ).then(
    //                 () => {
    //                     res.send({ msg: "Category updated succsefully", flag: 1 })
    //                 }
    //             ).catch(
    //                 (error) => {
    //                     res.send({ msg: "Unable to update Category", flag: 0, error })
    //                     console.log(error);
    //                 }
    //             )
    //         }
    //         await categoryModel.updateOne(
    //             { _id: id },
    //             { status: !category.status }
    //         )
    //     } catch (error) {
    //         res.send({ msg: "Kuch na Kuch gad bad h", flag: 0, error })
    //         console.log(error);
    //     }
    // },

}

module.exports = colorController;
