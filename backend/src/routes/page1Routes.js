const express = require("express");
const page1Routes = express.Router();

page1Routes.get("/", (_, res) => {
  res.json({
    status: true,
    data: {
      message: "This is the data for page 1",
    },
  });
});

module.exports = page1Routes;
