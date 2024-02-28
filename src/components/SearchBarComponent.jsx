import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux-store/products/products.actions.js";
import { selectProductsArr } from "../redux-store/products/products.selector.js";

export const SearchBarComponent = () => {
  const dispatch = useDispatch();
  const productsArr = useSelector(selectProductsArr);
  const handelSearch = ({ currentTarget: { value } }) => {
    dispatch(searchProducts(productsArr, value));
  };
  return (
    <div className="group m-4 flex items-center gap-4 rounded-[4px] bg-white px-4 py-2 text-center shadow-[0_2px_8px_#63636333]">
      <span>
        {searchBarIcons.search(
          "fill-indigo-400 group-focus-within:fill-indigo-600",
        )}
      </span>
      <input
        onChange={handelSearch}
        className="w-full bg-transparent text-[1rem] outline-none placeholder:text-gray-400 group-focus-within:placeholder:text-indigo-400"
        type="text"
        placeholder="Search Products..."
        autoComplete="off"
      />
      <img
        className="w-8"
        src="/assets/barcode-scanner.png"
        alt="barcode png"
      />
    </div>
  );
};

const searchBarIcons = {
  search: (styles) => (
    <svg
      className={`w-5 ${styles}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,512,512"
    >
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
    </svg>
  ),
};
