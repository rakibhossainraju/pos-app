import { createSelector } from "reselect";

export const selectProductsData = ({ products }) => products.productsData;

export const selectProducts = ({ products }) => products.products;
export const selectProductsArr = createSelector(
  [selectProductsData],
  (products) => {
    return products.reduce((acc, curCategory) => {
      const { title, items } = curCategory;
      const newItems = items.map((item) => ({
        ...item,
        category: title.toLowerCase(),
      }));
      acc.push(...newItems);
      return acc;
    }, []);
  },
);
