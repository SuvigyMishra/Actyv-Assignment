import { action } from "easy-peasy";

const userModel = {
  userDetails: {
    name: "",
    business: "",
    theme: "",
    accessToken: "",

    setUserDetails: action((_, payload) => ({
      ...payload,
    })),

    resetUserDetails: action(() => {}),
  },
};

export { userModel };
