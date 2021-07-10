import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER_DETAILS,
} from "../constants";
import AuthService from "../../services/AuthenticationService";

export function registerUser({ email, password }) {
  return async (dispatch) => {
    try {
      const result = await AuthService.register({ email, password });
      if (result) {
        dispatch({ type: REGISTER_USER, payload: result });
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export function loginUser({ email, password }) {
  return async (dispatch) => {
    try {
      const result = await AuthService.login({ email, password });
      if (result) {
        dispatch({ type: LOGIN_USER, payload: result });
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export function logoutUser() {
  return async (dispatch) => {
    try {
      const result = await AuthService.logout();
      if (result) {
        dispatch({ type: LOGOUT_USER, payload: result });
      }
    } catch (err) {
      console.error(err);
    }
  };
}

export function getUserDetails({ email }) {
  return async (dispatch) => {
    try {
      const result = await AuthService.register();
      if (result) {
        dispatch({ type: FETCH_USER_DETAILS, payload: result });
      }
    } catch (err) {
      console.error(err);
    }
  };
}
