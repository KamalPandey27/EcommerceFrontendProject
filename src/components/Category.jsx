import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../context/DataContext.jsx";

function Category() {
  let { data, fetchAllProducts, setProductCategoryData } =
    useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const category = [...new Set(data.map((e) => e.category))];
  return (
    <>
      <div className=" flex justify-around items-center h-15 pb-10">
        {category.slice(0, 5).map((e, index) => {
          return (
            <Link
              to="/category"
              onClick={() => setProductCategoryData(e)}
              key={index}
              className=" hover:bg-linear-to-r hover:from-red-700 hover:to-purple-700 bg-linear-to-r from-red-500 to-purple-500 text-white md:px-3 md:py-2 py-1 px-1 rounded-md cursor-pointer md:text-[16px] text-[13px] "
            >
              {e.toUpperCase()}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Category;
