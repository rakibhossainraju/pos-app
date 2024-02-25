import { PRODUCTS_TYPES } from "./products.types.js";
import PRODUCTS from "../../db/index-db.json";

const PRODUCTS_INITIAL_STATE = {
  products: PRODUCTS,
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  { type, payload } = {},
) => {
  switch (type) {
    case PRODUCTS_TYPES.UPDATE_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
