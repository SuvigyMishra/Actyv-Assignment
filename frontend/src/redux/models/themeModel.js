import { action } from "easy-peasy";

const themeModel = {
  theme: {
    name: "DEFAULT",
    background: "#C4E7F7",

    setTheme: action((state, payload) => {
      switch (payload) {
        case "b1":
          return {
            name: "Business 1",
            background: "#FF99BB",
          };

        case "b2":
          return {
            name: "Business 2",
            background: "#C7F7D4",
          };

        default:
          return state;
      }
    }),
  },
};

export { themeModel };
