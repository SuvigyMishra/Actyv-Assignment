const express = require("express");
const cors = require("cors");

require("./src/mongoose/mongoose");

const authRoutes = require("./src/routes/authRoutes");
const page1Routes = require("./src/routes/page1Routes");
const page2Routes = require("./src/routes/page2Routes");

const PORT = 3001;

const app = express();

app.use(cors());

app.use("/api/auth/", authRoutes);
app.use("/api/pages/page1", page1Routes);
app.use("/api/pages/page2", page2Routes);

app.listen(PORT, () => {
  console.log(`%c[listening to port ]`, "font-weight: bold; color: red", PORT);
});
