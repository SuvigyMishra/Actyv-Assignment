import { createStore } from "easy-peasy";

import { themeModel, userModel } from "./models";

const store = createStore(
  {
    ...themeModel,
    ...userModel,
  },
  { name: "globalStore" }
);

export { store };
