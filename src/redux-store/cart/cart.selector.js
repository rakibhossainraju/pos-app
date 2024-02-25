import { createSelector } from "reselect";

const selectCart = ({ cart }) => cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems,
);

export const selectProductCount = createSelector(
  [selectCartItems],
  (cartItems = []) =>
    cartItems.reduce((total, curtCartItem) => total + curtCartItem.quantity, 0),
);

export const selectProductSubTotalPrice = createSelector(
  [selectCartItems],
  (cartItems = []) =>
    cartItems.reduce(
      (total, curtCartItem) =>
        total + curtCartItem.quantity * curtCartItem.price,
      0,
    ),
);

export const extraCosts = {
  tax: 25.5,
  shipping: 5.5,
  discount: 10.0,
};
export const selectProductsTotalPrice = createSelector(
  [selectCartItems],
  (cartItems = []) =>
    cartItems.reduce((total, curtCartItem, currentIndex) => {
      const newTotal =
        total +
        curtCartItem.quantity * curtCartItem.price +
        extraCosts.tax +
        extraCosts.shipping;
      if (currentIndex === cartItems.length - 1)
        return newTotal - extraCosts.discount;
      return newTotal;
    }, 0),
);
