const express = require("express");
const page1Routes = express.Router();

page1Routes.get("/", (req, res) => {});

module.exports = page1Routes;
