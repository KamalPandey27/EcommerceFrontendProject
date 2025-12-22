import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

function Cart() {
  const { addToCartData, setAddToCart } = useContext(DataContext);

  const increaseQty = (id) => {
    setAddToCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setAddToCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  if (addToCartData.length === 0) {
    return <h2 className="text-center text-white">Cart is empty</h2>;
  }

  return (
    <div className="flex flex-col gap-5 p-5">
      {addToCartData.map((item) => (
        <div
          key={item.id}
          className="flex gap-5 p-4 rounded shadow-xl text-white bg-linear-to-r from-[#13103a] via-[#35306f] to-[#29294a]"
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-32 object-contain"
          />

          <div className="flex flex-col gap-2">
            <h3 className="font-bold">{item.title}</h3>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 bg-red-500 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 bg-green-500 rounded"
              >
                +
              </button>
            </div>

            <div className="font-bold">$ {item.price * item.quantity}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
