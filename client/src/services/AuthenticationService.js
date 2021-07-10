import Api from "./Api";
import constants from "../config/constants";

const { register, login, logout } = constants;

const AuthenticationService = {
  register({ email, password }) {
    return Api().post(register, {
      email,
      password,
    });
  },
  login({ email, password }) {
    return Api().post(login, {
      email,
      password,
    });
  },

  logout() {
    return Api().post(logout);
  },
};

export default AuthenticationService;
