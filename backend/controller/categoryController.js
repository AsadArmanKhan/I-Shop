const e = require("express");
const categoryModel = require("../model/categoryModel");
const { createUniqueImageName } = require("../helper");
const { unlinkSync } = require("fs")
const fs = require('fs');
const productModel = require("../model/productModel");


const categoryController = {
    async create(req, res) {
        // console.log(req.body);
        // return
        try {
            // console.log(req.body);
            // console.log(req.files.Image);
            // return
            const image = req.files.Image || null;
            const { name, slug } = req.body;
            if (!name || !slug || !image) {
                return res.json({ msg: "All field is required", flag: 0 });
            };

            const categoryImage = createUniqueImageName(image.name)

            const destination = `./public/images/categories/` + categoryImage

            image.mv(
                destination,
                async (error) => {
                    if (error) {
                        return res.send({ msd: "unable to upload image", flag: 0 })

                    } else {

                        const category = new categoryModel(
                            {
                                name: name,
                                slug: slug,
                                Image: categoryImage

                            }
                        );
                        await category.save().then(
                            () => {
                                res.send({ msg: "Category created succesfully", flag: 1, })
                            }).catch(
                                () => {
                                    res.send({ msg: "Can't create category", flag: 0 })
                                })
                    }
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
            let categorise = null;
            if (id) {
                categorise = await categoryModel.findById(id);
                res.send({ msg: "Category fetched successfully", flag: 1, categorise })
            } else {
                categorise = await categoryModel.find();
                const allCategory = [];
                const allPromise = categorise.map(
                    async (Category) => {
                        const productCount = await productModel.findOne(
                            { categoryId: Category._id }).countDocuments();
                        allCategory.push(
                            {
                                ...Category.toJSON(),
                                productCount: productCount,
                            });
                    }
                )
                await Promise.all(allPromise)
                res.send({ msg: "Category fetched successfully", flag: 1, categorise: allCategory })
            }

            if (!categorise) {
                return res.send({ msg: "No catigories found", flag: 0 })
            }



        } catch (error) {
            res.send({ msg: "Kuch na Kuch gad bad h", flag: 0, error })
            // console.log(error);
        }
    },

    async status(req, res) {
        try {
            const id = req.params.id;
            const category = await categoryModel.findById(id);
            if (!category) {
                return res.send({ msg: "No Categories found", flag: 0 });
            }
            await categoryModel.updateOne(
                { _id: id },
                { status: !category.status }
            ).then(
                () => {
                    return res.send({ msg: 'Category update', flag: 1 })
                }
            ).catch(
                () => {
                    return res.send({ msg: 'Enable to update Category ', flag: 0 })
                }
            )

        } catch (error) {
            res.send({ msg: "Internal Server Error", flag: 0 })
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


    async delete(req, res) {
        try {
            const id = req.params.id;
            const category = await categoryModel.findById(id);
            await categoryModel.deleteOne(
                {
                    _id: id
                }
            ).then(
                () => {

                    const oldImagePath = `./public/images/categories/${category.Image}`;
                    if (fs.existsSync(oldImagePath)) {
                        unlinkSync(oldImagePath);
                    }

                    res.send({ msg: "Category Deleted", flag: 1 })
                }
            ).catch(
                (error) => {
                    res.send({ msg: " Unable to delete category", flag: 0, error })
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
            const id = req.params.id;
            const image = req.files && req.files.Image ? req.files.Image : null;
            const category = await categoryModel.findById(id);
            if (!category) {
                return res.send({ msg: "No catigories found", flag: 0 })
            }

            if (image) {
                //All field update
                const categoryImage = createUniqueImageName(image.name);
                const destination = `./public/images/categories/${categoryImage}`;
                image.mv(
                    destination,
                    async (err) => {
                        if (err) {
                            return res.send({ msg: "Unable to update Category Image ", flag: 0 })

                        } else {
                            try {


                                await categoryModel.updateOne(
                                    {
                                        _id: id
                                    },
                                    {
                                        name: req.body.name,
                                        slug: req.body.slug,
                                        image: categoryImage
                                    },
                                );
                                const oldImagePath = `./public/images/categories/${category.Image}`;
                                if (fs.existsSync(oldImagePath)) {
                                    fs.unlinkSync(oldImagePath);
                                }
                            } catch (error) {

                                res.send({ msg: "Unable to update Category", flag: 0, error })
                                console.log(error);

                            }
                        }
                    }
                )

            } else {
                await categoryModel.updateOne(
                    {
                        _id: id
                    },
                    {
                        name: req.body.name,
                        slug: req.body.slug,
                        // image: categoryImage
                    },

                ).then(
                    () => {
                        res.send({ msg: "Category updated succsefully", flag: 1 })
                    }
                ).catch(
                    (error) => {
                        res.send({ msg: "Unable to update Category", flag: 0, error })
                        console.log(error);
                    }
                )
            }
            await categoryModel.updateOne(
                { _id: id },
                { status: !category.status }
            )
        } catch (error) {
            res.send({ msg: "Kuch na Kuch gad bad h", flag: 0, error })
            console.log(error);
        }
    },

}

module.exports = categoryController;
