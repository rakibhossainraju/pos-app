import createAction from "../../utils/create-action.utils.js";
import { PRODUCTS_TYPES } from "./products.types.js";

export const updateProducts = (products) =>
  createAction(PRODUCTS_TYPES.UPDATE_PRODUCTS, products);
