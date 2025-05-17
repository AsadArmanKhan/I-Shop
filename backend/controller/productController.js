const ProductModel = require("../model/productModel");
const { createUniqueImageName } = require("../helper");
const { unlinkSync } = require("fs")

const productController = {
    async create(req, res) {
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
            let products = null;
            if (id) {
                products = await ProductModel.findById(id)

            } else {
                products = await ProductModel.find().populate(["categoryId", "colors"]);
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






