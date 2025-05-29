const { verifyToken } = require("../helper");

const adminAuth = (req, res, next) => {
    try {
        const token = req.headers?.authorization;
        if (token) {
            if (verifyToken(token)) {
                next();
            } else {
                return res.send({ msg: "invalid token", flag: 0 });
            }
        } else {
            return res.status(401).send({ msg: "Token Required", flag: 0 });
        }
    } catch (error) {
        console.log(error.message)
        res.status(200).send({ msg: "error from Admin Auth", flag: 0 });
    }
};


module.exports = adminAuth;
