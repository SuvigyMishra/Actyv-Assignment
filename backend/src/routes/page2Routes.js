const express = require("express");
const page2Routes = express.Router();

page2Routes.get("/", (_, res) => {
  res.json({
    status: true,
    data: {
      message: "This is the data for page 2",
    },
  });
});

module.exports = page2Routes;
