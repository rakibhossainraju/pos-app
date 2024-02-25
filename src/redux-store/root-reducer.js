import { combineReducers } from "redux";
import { productsReducer } from "./products/products.reducer.js";

export const rootReducer = combineReducers({
  products: productsReducer,
});
