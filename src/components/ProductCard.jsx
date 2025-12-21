import React from "react";

function ProductCard({ products }) {
  return (
    <>
      <div className="flex flex-col lg:gap-2 gap-1 justify-between items-center lg:w-55 sm:w-full w-[80%] lg:h-80 sm:h-75 h-60  text-white sm:py-2 sm:px-4 py-1 px-2 shadow-2xl rounded cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] ">
        <img
          src={products.thumbnail}
          alt=""
          className="sm:w-45 w-35 shadow-lg shadow-red-400 rounded-full"
        />
        <span className="sm:text-[14px] text-[12px] line-clamp-2 text-center">
          {products.title}
        </span>
        <span>$ {products.price}</span>
        <button className="w-full bg-linear-to-r from-red-500 to-purple-500 text-white   rounded cursor-pointer  lg:h-9 h-6 lg:text-[17px] text-[15px] p-2 flex justify-center items-center">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
