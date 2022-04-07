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

async function findPage(pageName) {
  const page = await Page.findOne({ name: pageName });

  return page._id;
}

async function createUser() {
  const pageIDs = {
    home: await findPage("Home"),
    page1: await findPage("Page 1"),
    page2: await findPage("Page 2"),
  };

  const user = await User.create({
    name: "User 4",
    business: "Business 2",
    theme: "B2",
    password: "password",
    permissions: [
      {
        pageID: pageIDs.home,
        permissions: true,
      },
      {
        pageID: pageIDs.page2,
        permissions: true,
      },
    ],
  });

  console.log(`%c[user]`, "font-weight: bold; color: red", user);
}

// createUser();
