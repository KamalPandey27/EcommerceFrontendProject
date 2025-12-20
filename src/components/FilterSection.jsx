import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

function FilterSection() {
  const [priceRange, setPriceRange] = useState(0);
  const { data, fetchAllProducts } = useContext(DataContext);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);
  const category = [...new Set(data.map((e) => e.category))];
  const brand = [...new Set(data.map((e) => e.brand))];
  const [filter, setFilter] = useState(false);
  const DataSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="md:hidden flex justify-around p-2 ">
        <button
          className="bg-linear-to-r from-red-500 to-purple-500 text-white   rounded cursor-pointer  h-9  text-[18px]  p-2 flex justify-center items-center w-30"
          onClick={() => setFilter((prev) => !prev)}
        >
          Filter
        </button>
        <button className="bg-linear-to-r from-red-500 to-purple-500 text-white   rounded cursor-pointer  h-9 text-[18px] p-2 flex justify-center items-center w-30">
          Sort
        </button>
      </div>
      <div
        className={`flex justify-center w-[20vw] cursor-pointer bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] md:h-screen h-[97vh] rounded text-white md:py-3 px-2 py-1 md:sticky md:top-0 absolute left-3 md:translate-x-0 md:opacity-100 transition-all duration-500 ease-in-out ${
          filter ? "translate-x-0 opacity-100" : "-translate-x-[200%] opacity-0"
        }`}
      >
        <form
          onSubmit={DataSubmit}
          action=""
          className="flex lg:w-[90%] w-full flex-col md:justify-evenly justify-around h-full"
        >
          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-linear-to-r from-[#13103a] via-[#35306f] to-[#29294a] md:p-2 p-1 outline-0 w-full rounded"
            />
          </div>
          <div className="flex flex-col lg:gap-2 gap-1">
            <span className="lg:text-xl md:text-lg text-[16px]">Category</span>
            {category.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-1">
                  <input type="checkbox" id={item} />
                  <label
                    htmlFor={item}
                    className="select-none lg:text-[16px] md:text-[15px] text-[14px]"
                  >
                    {item.toUpperCase()}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col lg:gap-2 gap-1  w-full justify-center">
            <span className="lg:text-xl md:text-lg text-[16px]">Brand</span>
            <select
              name=""
              id=""
              className="  bg-linear-to-r from-[#13103a] via-[#35306f] to-[#29294a] rounded p-1 outline-0 w-full "
            >
              <option
                value=""
                className="text-black lg:text-[16px] md:text-[15px] text-[14px]"
              >
                Select Brand
              </option>
              {brand.map((e) => {
                return (
                  <option
                    value={e}
                    className="text-black lg:text-[16px] md:text-[15px] text-[14px] "
                    key={e}
                  >
                    {e}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="lg:text-xl md:text-lg text-[16px]">
              Price Range
            </span>
            <p className="text-[14px]">Price Range: $5 - $5000</p>
            <input
              type="range"
              name=""
              id=""
              min={5}
              max={5000}
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </div>
          <div className="md:pb-2 flex gap-2 ">
            <button
              value="reset"
              type="reset"
              className="bg-linear-to-r from-red-500 to-purple-500 text-white rounded cursor-pointer  md:text-lg md:text-[16px] text-[15px] py-1 flex justify-center items-center w-full "
              onClick={() => setPriceRange(0)}
            >
              Reset
            </button>
            <button
              value="submit"
              type="submit"
              className="bg-linear-to-r from-red-500 to-purple-500 text-white rounded cursor-pointer  md:text-lg md:text-[16px] text-[15px] py-1 flex justify-center items-center w-full "
              onClick={() => setFilter((prev) => !prev)}
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FilterSection;
