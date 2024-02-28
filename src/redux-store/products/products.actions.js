import createAction from "../../utils/create-action.utils.js";
import { PRODUCTS_TYPES } from "./products.types.js";

export const setProducts = (productsArr) =>
  createAction(PRODUCTS_TYPES.SET_PRODUCTS, productsArr);

export const searchProducts = (productsArr, searchStr) => {
  searchStr = searchStr.trim().toLowerCase();
  const newProductsArr = productsArr.filter(({ name, price, category }) => {
    name = name.toLowerCase();
    price = price.toString().toLowerCase();
    category = category.toLowerCase();
    return (
      name.includes(searchStr) ||
      price.includes(searchStr) ||
      category.includes(searchStr)
    );
  });
  console.log(newProductsArr, searchStr);
  return createAction(PRODUCTS_TYPES.SET_PRODUCTS, newProductsArr);
};
