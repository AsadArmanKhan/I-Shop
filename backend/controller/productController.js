class productController {
    get() {
        return new Promise(
            (reslove, reject) => {
                try {

                } catch (error) {
                    reject(
                        {
                            msg: "Product Controller me dikkat h", status: 0
                        }
                    )
                }
            }
        )
    }
}


module.exports = productController;