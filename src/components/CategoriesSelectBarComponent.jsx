import { useDispatch, useSelector } from "react-redux";
import {
  selectProductsArr,
  selectProductsData,
} from "../redux-store/products/products.selector.js";
import { setProducts } from "../redux-store/products/products.actions.js";
import { useState } from "react";

const categorys = {
  hats: "Hats",
  jackets: "Jackets",
  mens: "Mens",
  sneakers: "Sneakers",
  womens: "Womens",
};
export const CategoriesSelectBarComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("all-category");
  const dispatch = useDispatch();
  const productsData = useSelector(selectProductsData);
  const productsArr = useSelector(selectProductsArr);

  const handelClick = ({ currentTarget: { value } }) => {
    const newProductsArr = productsData.find(
      (product) => product.title === categorys[value],
    )?.items;
    if (newProductsArr) {
      setSelectedCategory(value);
      dispatch(setProducts(newProductsArr));
    } else {
      setSelectedCategory("all-category");
      dispatch(setProducts(productsArr));
    }
  };
  return (
    <div className="flex justify-around gap-2 px-4 pb-2">
      <button
        className={`rounded-[5px] border-2 px-3 py-2 font-medium duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white ${selectedCategory === "all-category" ? "border-indigo-600 text-indigo-600" : "border-gray-600 text-slate-700"}`}
        onClick={handelClick}
      >
        All Categories
      </button>
      {Object.entries(categorys).map(([key, value]) => (
        <button
          className={`rounded-[5px] border-2 px-3 py-2 font-medium duration-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white ${selectedCategory === key ? "border-indigo-600 text-indigo-600" : "border-gray-600 text-slate-700"}`}
          onClick={handelClick}
          key={"category " + key}
          value={key}
        >
          {value}
        </button>
      ))}
    </div>
  );
};
// console.log(
//   productsData.reduce((a, b) => {
//     a[b.title.toLowerCase()] = b.title;
//     return a;
//   }, {}),
// );
