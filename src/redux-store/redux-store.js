import { compose, legacy_createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { thunk } from "redux-thunk";

const middleware = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middleware));

export const reduxStore = legacy_createStore(
  rootReducer,
  undefined,
  composedEnhancers,
);
