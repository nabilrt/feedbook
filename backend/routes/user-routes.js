const express = require("express");
const bcrypt = require("bcrypt");
const upload = require("../middlewares/single-file-upload");
const auth = require("../middlewares/auth");
const User = require("../models/user");
const cloudinaryConfig = require("../config/cloudinary");
const fs = require("fs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter = express.Router();

userRouter.post("/register", upload, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const file = req.file;
    if (file) {
      if (!name && !email && !password) {
        return res.status(400).json({
          message: "Fill up all the fields",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const image = await cloudinaryConfig.uploader.upload(
        file.path,
        {
          folder: "feedbook/profile-pictures",
        },
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "Internal Server Error",
            });
          }
        }
      );
      const avatar = image.secure_url;

      const user = new User({
        name,
        email,
        password: hashedPassword,
        avatar,
      });
      await user.save();
      fs.unlinkSync(file.path);

      return res.status(201).json({
        message: "User Created",
        user,
      });
    } else {
      if (!name && !email && !password) {
        return res.status(400).json({
          message: "Fill up all the fields",
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = new User({
        name,
        email,
        password: hashedPassword,
        avatar: process.env.DEFAULT_AVATAR_URL,
      });
      await user.save();

      return res.status(201).json({
        message: "User Created",
        user,
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res.status(400).json({
        message: "Fill up all the fields",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
      });
    }
    const token = jwt.sign({ id: user._id }, "secret", {
      expiresIn: "1h",
    });
    return res.status(200).json({
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

userRouter.get("/details", auth, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.userData.id });
    res.status(200).json({
      message: "User Details",
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

userRouter.put("/update-cover", auth, upload, async (req, res) => {
  try {
    const file = req.file;
    if (file) {
      const image = await cloudinaryConfig.uploader.upload(
        file.path,
        {
          folder: "feedbook/cover-photos",
        },
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "Internal Server Error",
            });
          }
        }
      );
      const cover_image = image.secure_url;
      await User.findOneAndUpdate(
        { _id: req.userData.userId },
        { $set: { cover_image } }
      );
      fs.unlinkSync(file.path);
      return res.status(200).json({
        message: "Cover Image Updated",
      });
    } else {
      return res.status(400).json({
        message: "Select an image",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = userRouter;
