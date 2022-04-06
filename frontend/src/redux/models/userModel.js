import { action } from "easy-peasy";

const userModel = {
  userDetails: {
    ID: "",
    name: "",
    business: "",
    theme: "",
    accessToken: "",
    permissions: [],

    setUserDetails: action((_, payload) => ({
      ...payload,
    })),

    resetUserDetails: action(() => {}),
  },
};

export { userModel };
