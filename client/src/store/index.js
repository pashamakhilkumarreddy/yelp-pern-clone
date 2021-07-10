import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import rootReducer from "./reducers";
import config from "../config";

const ENV = config.ENV;

const middleware = [];

middleware.push(thunk);

if (ENV !== "production") {
  middleware.push(logger);
}

const composedEnchaner =
  ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const store = createStore(rootReducer, composedEnchaner);

export default store;
