import { PRODUCTS_TYPES } from "./products.types.js";
import PRODUCTS from "../../db/index-db.json";

const PRODUCTS_INITIAL_STATE = {
  productsData: PRODUCTS,
  products: [],
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  { type, payload } = {},
) => {
  switch (type) {
    case PRODUCTS_TYPES.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
