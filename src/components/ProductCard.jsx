import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { NavLink } from "react-router-dom";

function ProductCard({ products }) {
  const { addToCartData, setAddToCart } = useContext(DataContext);

  const handleAddToCart = () => {
    setAddToCart((prev) => [...prev, { ...products, quantity: 1 }]);
  };

  const isInCart = addToCartData.some((item) => item.id === products.id);

  return (
    <div className="flex flex-col justify-between gap-2 items-center w-[80%] p-3 text-white shadow-xl rounded bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <img
        src={products.thumbnail}
        alt={products.title}
        className="w-36 rounded-full"
      />

      <span className="text-center line-clamp-2">{products.title}</span>

      <span>$ {products.price}</span>

      {!isInCart ? (
        <button
          onClick={handleAddToCart}
          className="w-full bg-red-500 text-white rounded py-2"
        >
          Add to Cart
        </button>
      ) : (
        <NavLink
          to="/cart"
          className="w-full bg-purple-500 text-white rounded py-2 text-center"
        >
          Go to Cart
        </NavLink>
      )}
    </div>
  );
}

export default ProductCard;
