import createAction from "../../utils/create-action.utils.js";
import { CART_ACTION_TYPES } from "./cart.types.js";

export const addItemToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id,
  );
  if (existingCartItem) {
    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    );

    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  }
  const newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }];
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToRemove.id,
  );

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      const newCartItems = cartItems.filter(
        (cartItem) => cartItem.id !== productToRemove.id,
      );
      return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
    }

    const newCartItems = cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem,
    );
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  }

  throw new Error(
    "Trying to remove an Item that doesn't exist on the cart items arr",
  );
};

export const clearItemFromCart = (cartItems, productToClear) => {
  const newCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== productToClear.id,
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearCartItems = () =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, []);
