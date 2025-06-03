const ProductModel = require("../model/productModel");
const { createUniqueImageName } = require("../helper");
const { unlinkSync } = require("fs");
const { update } = require("./categoryController");
const productModel = require("../model/productModel");
const categoryModel = require("../model/categoryModel");
const colorModel = require("../model/colorModel");

const productController = {

    async create(req, res) {
        // console.log(req.body.orignalPrice);
        // return
        try {
            const image = req.files.thumbnail
            if (!req.body.name || !req.body.slug) {
                return res.send({ msg: "All field are required", flag: 0 });

            }
            const ProductImage = createUniqueImageName(image.name)
            const destination = "./public/images/product/" + ProductImage

            image.mv(
                destination,
                async (error) => {
                    if (error) {
                        return res.send({ msg: "Unbale to upload product image", flag: 0 })
                    } else {
                        const category = new ProductModel({
                            ...req.body,
                            thumbnail: ProductImage,
                            colors: JSON.parse(req.body.colors)
                        })

                        await category.save().then(() => {
                            res.send({ msg: "Product created successfully", flag: 1 })
                        }).catch((err) => {
                            return res.send({ msg: "Unable to create product", flag: 0 })
                        })

                    }

                }
            )





        } catch (err) {
            console.log(err)
            res.send({ msg: "Internal server error", flag: 0 })
        }


    },
    async getdata(req, res) {
        try {
            const id = req.params.id;
            // let products = null;
            const filterQuery = {};
            if (req.query.categorySlug) {
                // console.log(req.query.categorySlug);
                const category = await categoryModel.findOne({ slug: req.query.categorySlug })
                console.log(category._id);
                filterQuery.categoryId = category._id
                // console.log(categoryId);
                if (req.query.colorSlug) {
                    const color = await colorModel.findOne({ slug: req.query.colorSlug })
                    filterQuery.colors = { $in: [color._id] };

                }

            }
            console.log(filterQuery);
            // console.log(req.query), "asad"

            if (id) {
                products = await ProductModel.findById(id)

            } else {
                products = await ProductModel.find(filterQuery).limit(req.query.limit || 0).populate(["colors"]);
            }

            if (!products) {
                return res.send({ msg: "No product found", flag: 0 });
            }
            res.send({ msg: "Product fetched successfully", flag: 1, products })


        } catch (err) {
            res.send({ msg: "Internal server error", flag: 0 })
        }


    },
    async status(req, res) {
        try {

            const id = req.params.id;
            const flag = req.body.flag;
            const product = await ProductModel.findById(id);
            const productStatus = {};  //status:
            let msg = ""
            if (flag === 1) {
                productStatus.status = !product.status;
                msg = "status"

            } else if (flag === 2) {
                productStatus.stock = !product.stock
                msg = "stock"


            } else if (flag === 3) {
                productStatus.topSelling = !product.topSelling
                msg = "topSelling"

            }
            console.log(productStatus)


            if (product) {
                await ProductModel.updateOne(
                    { _id: id },
                    {
                        $set: productStatus

                    }
                ).then(
                    () => {
                        res.send(
                            {
                                msg: `Product ${msg}  update`,
                                flag: 1
                            }
                        )

                    }
                ).catch(
                    () => {
                        res.send(
                            {
                                msg: "Unable to update status",
                                flag: 0
                            }
                        )

                    }
                )

            }

        } catch (error) {
            res.send({ msg: "Internal server error", flag: 0 })
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id)

            if (product) {
                const result = await ProductModel.deleteOne({ _id: id })
                if (result.deletedCount === 1) {
                    unlinkSync("./public/images/product/" + product.thumbnail);
                    res.send({ msg: `Product delete`, flag: 1 })
                }


            }

        } catch (error) {
            res.send({ msg: "Internal server error", flag: 0 })
        }
    },
    async update(req, res) {
        try {
            const id = req.params.id;
            const image = req.files && req.files.Image ? req.files.Image : null;
            const product = await productModel.findById(id);
            if (!product) {
                return res.send({ msg: "No catigories found", flag: 0 })
            }

            if (image) {
                //All field update
                const productImage = createUniqueImageName(image.name);
                const destination = `./public/images/categories/${productImage}`;
                image.mv(
                    destination,
                    async (err) => {
                        if (err) {
                            return res.send({ msg: "Unable to update Product Image ", flag: 0 })

                        } else {
                            try {
                                await ProductModel.updateOne(
                                    {
                                        _id: id
                                    },
                                    {
                                        ...req.body,
                                        thumbnail: productImage,
                                        colors: JSON.parse(req.body.colors)
                                    },
                                );
                                const oldImagePath = `./public/images/categories/${product.thumbnail}`;
                                if (fs.existsSync(oldImagePath)) {
                                    fs.unlinkSync(oldImagePath);
                                }
                            } catch (error) {

                                res.send({ msg: "Unable to update Product", flag: 0, error })
                                console.log(error);

                            }
                        }
                    }
                )

            } else {
                await productModel.updateOne(
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
                        res.send({ msg: "Product updated succsefully", flag: 1 })
                    }
                ).catch(
                    (error) => {
                        res.send({ msg: "Unable to update Product", flag: 0, error })
                        console.log(error);
                    }
                )
            }
        } catch (error) {
            res.send({ msg: "Error From ProductController", flag: 0, error })
            console.log(error);
        }
    },
    async multiple(req, res) {
        try {
            const id = req.params.id;
            const product = await ProductModel.findById(id);
            const allimages = product.images ?? [];
            const allPromise = [];
            if (product) {
                const images = req.files.images;
                for (img of images) {
                    const ProductImage = createUniqueImageName(img.name)
                    const destination = "./public/images/product/" + ProductImage;
                    allimages.push(ProductImage)
                    allPromise.push(img.mv(destination))
                }

                await Promise.all(allPromise)
                await ProductModel.updateOne(
                    {
                        _id: id
                    },
                    {
                        images: allimages
                    }
                ).then(
                    () => {
                        res.send(
                            {
                                msg: "Product images upload",
                                flag: 1
                            }
                        )
                    }
                ).catch(
                    () => {
                        res.send(
                            {
                                msg: "Unable to upload product images ",
                                status: 0
                            }
                        )
                    }
                )


            }


        } catch (error) {
            console.log(error)
            res.send({ msg: "Internal server error", flag: 0 })
        }
    }
}

module.exports = productController;






