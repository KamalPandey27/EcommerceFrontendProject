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
      <div className=" flex justify-around items-center h-15">
        {" "}
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer ">
          Laptop
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer ">
          Kitchen-accessories
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer ">
          Groceries
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer ">
          Beauty
        </div>
        <div className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer ">
          Fragrances
        </div>
      </div>
    </>
  );
}

export default Category;
