import React, { useEffect } from "react";
import FilterSection from "../components/FilterSection.jsx";
import { useContext } from "react";
import { DataContext } from "../context/DataContext.jsx";

function Products() {
  const { data, fetchAllProducts } = useContext(DataContext);
  const mapdata = data.map((e) => e.title);
  console.log(mapdata);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  return (
    <>
      <div className="flex justify-around p-5 ">
        <FilterSection />
        <div className="grid grid-cols-4 gap-7">
          {data?.map((e, index) => {
            return (
              <div
                className="flex flex-col gap-2 justify-between w-55 h-80 k text-white py-2 px-4 shadow-2xl rounded cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] "
                key={index}
              >
                <img
                  src={e.thumbnail}
                  alt=""
                  className="w-45 shadow-lg shadow-red-400 rounded-full"
                />
                <span className="text-[14px] line-clamp-2">{e.title}</span>
                <span>$ {e.price}</span>
                <button className="bg-linear-to-r from-red-500 to-purple-500 text-white   rounded cursor-pointer  h-9 text-[17px] p-2 flex justify-center items-center">
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
