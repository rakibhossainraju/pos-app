import { ProductCartModal } from "./ProductCartModal.jsx";
import { useState } from "react";

export const ProductCartComponent = ({ product }) => {
  const { imageUrl, name, price } = product;
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <ProductCartModal
        product={product}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <div
        onClick={() => setIsModalOpen(true)}
        className="group flex w-40 cursor-pointer flex-col rounded-lg p-2 duration-500 hover:shadow-[0_2px_15px_5px_#3D33F524]"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-[5px] object-fill">
          <img
            className="absolute duration-1000 ease-[cubic-bezier(0.25,0.45,0.45,0.95)] group-hover:scale-110 group-hover:blur-[1px] group-hover:brightness-95 group-hover:duration-[3s]"
            src={imageUrl}
            alt={name}
          />
        </div>
        <div className="mt-2 flex justify-between text-[0.9rem]">
          <p>{name}</p>
          <p className="font-medium">${price}</p>
        </div>
      </div>
    </>
  );
};

// transform: scale(1.1);
// transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
