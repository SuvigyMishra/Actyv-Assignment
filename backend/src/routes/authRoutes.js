const express = require("express");
const authRoutes = express.Router();

const User = require("../mongoose/schemas/userSchema");
const Page = require("../mongoose/schemas/pageSchema");

authRoutes.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ name: username });

    // const user = await User.findOne({ name: username }).populate(
    //   "permissions",
    //   "pageID",
    //   Page
    // );

    if (!user) {
      return res.status(404).json({
        status: false,
        data: {
          message: "User not found! Please enter a valid user name.",
        },
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        status: false,
        data: {
          message:
            "Your password does not match. Please enter the correct password",
        },
      });
    }

    return res.json({
      status: true,
      ID: user._id,
      name: user.name,
      business: user.business,
      accessToken: "Some access token",
      permissions: user.permissions,
    });
  } catch (error) {
    console.log(`%c[error]`, "font-weight: bold; color: red", error);

    return res.status(500).json({
      status: false,
      data: {
        message: "Something went wrong!",
      },
    });
  }
});

module.exports = authRoutes;
