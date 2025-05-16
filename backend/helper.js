function createUniqueImageName(Image) {
    const timestamp = Date.now()
    const random = Math.floor(Math.random() * 10000)
    return `${random}_${timestamp}_${Image}`;
}


module.exports = { createUniqueImageName };