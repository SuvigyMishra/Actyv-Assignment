const mongoose = require("mongoose");
const User = require("./schemas/userSchema");
const Page = require("./schemas/pageSchema");

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
    name: "User 3",
    business: "Business 2",
    theme: "B2",
    password: "password",
    permissions: [
      {
        pageID: "624eacf775da364172c1c992",
        permissions: true,
      },
      {
        pageID: "624ead007571832ee1eac0f6",
        permissions: true,
      },
    ],
  });

  console.log(`%c[user]`, "font-weight: bold; color: red", user);
}
