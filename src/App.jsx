import { CheckoutPage } from "./pages/checkout-page/CheckoutPage.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "./redux-store/products/products.actions.js";
import { selectProductsArr } from "./redux-store/products/products.selector.js";

const App = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductsArr);
  useEffect(() => {
    dispatch(setProducts(products));
  }, []);
  return (
    <>
      <CheckoutPage />
    </>
  );
};

export default App;
