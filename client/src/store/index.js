import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist/es";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import rootReducer from "./reducers";
import config from "../config";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  // whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const ENV = config.ENV;

const middleware = [thunk];

if (ENV !== "production") {
  middleware.push(logger);
}

const composedEnhancer =
  ENV !== "production"
    ? composeWithDevTools(applyMiddleware(...middleware))
    : compose(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composedEnhancer);
const persistor = persistStore(store);

export { store, persistor };
