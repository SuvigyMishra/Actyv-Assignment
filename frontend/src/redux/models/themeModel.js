import { action } from "easy-peasy";

const themeModel = {
  theme: {
    name: "DEFAULT",
    background: "",

    setTheme: action((state, payload) => ({
      ...state,
    })),
  },
};

export { themeModel };
