import React, { useEffect } from "react";
import FilterSection from "../components/FilterSection.jsx";
import { useContext } from "react";
import { DataContext } from "../context/DataContext.jsx";

function Products() {
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  return (
    <>
      <div className="flex justify-around md:flex-row flex-col lg:p-5 p-3 h-screen overflow-hidden">
        <FilterSection />
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-4 lg:gap-7 md:gap-4 gap-3 overflow-y-scroll lg:p-5 p-3">
          {data?.map((e, index) => {
            return (
              <div
                className="flex flex-col lg:gap-2 gap-1 justify-around lg:w-55 w-40 lg:h-80 h-70 k text-white py-2 px-4 shadow-2xl rounded cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] "
                key={index}
              >
                <img
                  src={e.thumbnail}
                  alt=""
                  className="w-45 shadow-lg shadow-red-400 rounded-full"
                />
                <span className="text-[14px] line-clamp-2">{e.title}</span>
                <span>$ {e.price}</span>
                <button className="bg-linear-to-r from-red-500 to-purple-500 text-white   rounded cursor-pointer  lg:h-9 h-6 lg:text-[17px] text-[15px] p-2 flex justify-center items-center">
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
