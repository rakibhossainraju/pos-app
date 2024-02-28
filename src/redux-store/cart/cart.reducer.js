import { CART_ACTION_TYPES } from "./cart.types.js";

const CART_INITIAL_STATE = {
  cartItems: [],
  cartItemsIds: new Set(),
};

export const cartReducer = (
  state = CART_INITIAL_STATE,
  { type, payload } = {},
) => {
  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, cartItems: payload };
    case CART_ACTION_TYPES.SET_CART_ITEMS_IDS:
      return { ...state, cartItemsIds: new Set(payload) };
    default:
      return state;
  }
};
