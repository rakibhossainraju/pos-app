import { createSelector } from "reselect";

export const selectProducts = ({ products }) => products.products;

export const selectProductsArr = createSelector(
  [selectProducts],
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
