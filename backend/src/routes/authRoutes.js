const express = require("express");
const authRoutes = express.Router();

const User = require("../mongoose/schemas/userSchema");

authRoutes.post("/sign-in", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ name: username.toLowerCase() });

    if (!user || user.password !== password) {
      return res.status(404).json({
        status: false,
        data: {
          message:
            "Could not validate user details. Please enter valid details",
        },
      });
    }

    return res.json({
      status: true,
      data: {
        theme: user.theme,
        name: user.name,
        business: user.business,
        accessToken: "Some access token",
      },
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
