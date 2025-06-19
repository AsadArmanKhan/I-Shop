// --- UPDATED userController.js ---
const userModel = require("../model/userModel");
const { generateToken } = require("../helper");
const Cryptr = require("cryptr");
const cryptr = new Cryptr(process.env.SECRET_KEY);

const userController = {
  async register(req, res) {
    try {
      const { name, password, email, shipping_address } = req.body;

      if (!password || !name || !email) {
        return res.send({ msg: "All fields are required", flag: 0 });
      }

      const userExisting = await userModel.findOne({ email });
      if (userExisting) {
        return res.send({ msg: "Try with a different email ID", flag: 0 });
      }

      const user = new userModel({
        name,
        email,
        password: cryptr.encrypt(password),
        shipping_address
      });

      await user.save();

      res.send({
        msg: "Account created successfully",
        flag: 1,
        user: { ...user.toJSON(), password: null },
        token: generateToken({ ...user.toJSON() })
      });
    } catch (error) {
      console.log(error);
      res.send({ msg: "Error in userController", flag: 0, error });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.send({ msg: "All fields are required", flag: 0 });
      }

      const user = await userModel.findOne({ email });

      if (user) {
        const decryptedPassword = cryptr.decrypt(user.password);
        if (decryptedPassword === password) {
          return res.send({
            msg: "Login successfully",
            flag: 1,
            user: { ...user.toJSON(), password: null },
            token: generateToken({ ...user.toJSON() })
          });
        } else {
          return res.send({ msg: "Incorrect password", flag: 0 });
        }
      } else {
        return res.send({ msg: "Email not found", flag: 0 });
      }
    } catch (error) {
      console.log(error);
      res.send({ msg: "Error in userController", flag: 0, error });
    }
  },

  async addAddress(req, res) {
    try {
      const { user_id, shipping_address } = req.body;

      if (!user_id || !shipping_address) {
        return res.send({ msg: "All fields are required", flag: 0 });
      }

      const user = await userModel.findById(user_id);
      if (!user) return res.send({ msg: "User not found", flag: 0 });

      user.shipping_address.push(shipping_address);
      await user.save();

      res.send({
        msg: "Address added successfully",
        flag: 1,
        user: { ...user.toObject(), password: null }
      });
    } catch (error) {
      console.log("Add address error:", error);
      res.status(500).send({ msg: "Server error", flag: 0 });
    }
  }
};

module.exports = userController;