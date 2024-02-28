import { useDispatch, useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartItemsIds,
} from "../redux-store/cart/cart.selector.js";
import {
  addCartItemsId,
  addItemToCart,
  clearItemFromCart,
  removeCartItemsId,
} from "../redux-store/cart/cart.action.js";

export const ProductCartModal = ({ isModalOpen, setIsModalOpen, product }) => {
  const { imageUrl, name, price } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartItemsIds = useSelector(selectCartItemsIds);
  const isProductExistsInTheCart = cartItemsIds.has(product.id);
  const handelCartActon = () => {
    if (!isProductExistsInTheCart) {
      dispatch(addItemToCart(cartItems, product));
      dispatch(addCartItemsId(cartItemsIds, product.id));
    } else {
      dispatch(clearItemFromCart(cartItems, product));
      dispatch(removeCartItemsId(cartItemsIds, product.id));
    }
  };
  return (
    <section
      className={`flex-center absolute inset-0 z-20 min-h-screen w-full transition-opacity duration-500 ${
        isModalOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <button
        onClick={() => setIsModalOpen(false)}
        className={`absolute inset-0 -z-10 h-[115%] bg-[#757C81B2]`}
      />
      <div
        className={`relative z-20 flex w-full max-w-[40rem] gap-7 rounded-lg bg-white p-10 shadow-2xl`}
      >
        <button
          onClick={() => setIsModalOpen(false)}
          className="absolute right-3.5 top-3.5 z-30 rounded-sm bg-indigo-500 p-2 text-white"
        >
          {productCartModalIcons.cross()}
        </button>
        <div className="flex flex-col justify-between">
          <div className="group relative aspect-square w-48 overflow-hidden object-fill">
            <img
              className="absolute duration-700 ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-125 group-hover:duration-[2s]"
              src={imageUrl}
              alt={name}
            />
          </div>
          <p className="text-[0.9rem] text-gray-600">{name}</p>
          <p className="text-[1.3rem] font-semibold text-gray-800">${price}</p>
          <p className="flex justify-between text-sm font-semibold">
            <span className="text-emerald-500">In Stock</span>
            <span className="text-slate-500">38 left</span>
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="mb-3 ml-1 text-lg font-semibold">
              Product Description
            </h4>
            <p className="ml-2 px-2 text-sm text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
              assumenda dolor doloremque harum laborum possimus quam quidem
              quis. Minima, voluptatum.
            </p>
            <div className="mb-8 mt-4">
              <h4 className="mb-4 ml-1 text-lg font-semibold text-gray-900">
                Select Variation
              </h4>
              <div className="ml-4 flex gap-4">
                <button className="rounded-[3px] border border-indigo-500 px-4 py-2 text-sm text-indigo-500 duration-200 hover:bg-indigo-500 hover:text-white">
                  Black
                </button>
                <button className="rounded-[3px] border border-indigo-500 px-4 py-2 text-sm text-indigo-500 duration-200 hover:bg-indigo-500 hover:text-white">
                  Grey
                </button>
                <button className="rounded-[3px] border border-indigo-500 px-4 py-2 text-sm text-indigo-500 duration-200 hover:bg-indigo-500 hover:text-white">
                  Blue
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={handelCartActon}
            className={`rounded-[5px] border px-2 py-3 text-center text-[1rem] font-semibold duration-300 ${isProductExistsInTheCart ? "border-indigo-600 bg-white text-indigo-600 hover:bg-indigo-50" : "bg-indigo-600 text-white hover:bg-indigo-500"}`}
          >
            {isProductExistsInTheCart ? "Remove from cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </section>
  );
};

const productCartModalIcons = {
  cross: (styles) => (
    <svg
      className={`aspect-square w-2.5 ${styles}`}
      fill="currentColor"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
    >
      <g>
        <g>
          <polygon
            points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512
			512,452.922 315.076,256 		"
          />
        </g>
      </g>
    </svg>
  ),
};
