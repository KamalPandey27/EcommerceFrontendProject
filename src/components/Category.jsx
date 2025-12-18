import React, { useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../context/DataContext.jsx";
function Category() {
  let { data, fetchAllProducts } = useContext(DataContext);
  // const categories = [...new Set(data.map((e) => e.category))];
  // console.log(categories);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  return (
    <>
      <div className=" flex justify-around items-center h-15 pb-10">
        {" "}
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white md:px-3 md:py-2 py-1 px-1 rounded-md cursor-pointer md:text-[16px] text-[13px] ">
          Laptop
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white md:px-3 md:py-2 py-1 px-1 rounded-md cursor-pointer md:text-[16px] text-[13px] ">
          Kitchen
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white md:px-3 md:py-2 py-1 px-1 rounded-md cursor-pointer md:text-[16px] text-[13px] ">
          Groceries
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white md:px-3 md:py-2 py-1 px-1 rounded-md cursor-pointer md:text-[16px] text-[13px] ">
          Beauty
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white md:px-3 md:py-2 py-1 px-1 rounded-md cursor-pointer md:text-[16px] text-[13px] ">
          Fragrances
        </div>
      </div>
    </>
  );
}

export default Category;
