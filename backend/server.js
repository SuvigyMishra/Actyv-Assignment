const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");

const PORT = 3001;

const app = express();

app.use(cors());

app.use("/api/auth/", authRoutes);

app.listen(PORT, () => {
  console.log(`%c[listening to port ]`, "font-weight: bold; color: red", PORT);
});
