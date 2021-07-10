import { clone } from "ramda";
import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  FETCH_USER_DETAILS,
} from "../constants";

const initialState = {
  isLoggedIn: false,
  user: {},
  tokens: {},
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      const registerState = clone({
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        tokens: action.payload.tokens,
      });
      return registerState;
    case LOGIN_USER:
      const loginState = clone({
        ...state,
        isLoggedIn: true,
        user: action.payload.user,
        tokens: action.payload.tokens,
      });
      return loginState;
    case LOGOUT_USER:
      const logoutState = clone({
        ...initialState,
      });
      return logoutState;
    case FETCH_USER_DETAILS:
      const userState = clone({
        ...state,
        user: action.payload,
      });
      return userState;
    default:
      return state;
  }
}
