import { CART_ACTION_TYPES } from "./cart.types.js";

const CART_INITIAL_STATE = {
  cartItems: [],
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  { type, payload } = {},
) => {
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    default:
      return state;
  }
};
