const mongoose = require("mongoose");
const User = require("./schemas/userSchema");

mongoose
  .connect(
    "mongodb+srv://suvigymishra:passwordnotweak@cluster0.1lgtt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log(`%c[connected to DB]`, "font-weight: bold; color: red");
  })
  .catch((error) => {
    console.log(`%c[error]`, "font-weight: bold; color: red", error);
  });

async function createUser() {
  const user = await User.create({
    name: "User 2",
    business: "Business 2",
    theme: "B2",
    password: "password",
  });

  console.log(`%c[user]`, "font-weight: bold; color: red", user);
}

// createUser();
