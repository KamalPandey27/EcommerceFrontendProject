import React, { useState } from "react";

function FilterSection() {
  const [priceRange, setPriceRange] = useState(0);
  const category = [
    "ALL",
    "AUDIO",
    "GAMING",
    "MOBILE",
    "TV",
    "LAPTOP",
    "APPLIANCES",
  ];
  return (
    <>
      <div className=" flex justify-center w-[20vw] cursor-pointer bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] h-[85vh] rounded text-white p-2">
        <form
          action=""
          className="flex w-[90%] flex-col justify-between h-full"
        >
          <div>
            <input
              type="text"
              placeholder="Search"
              className="bg-linear-to-r from-[#13103a] via-[#35306f] to-[#29294a] p-2 outline-0 w-full rounded"
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xl">Category</span>
            {category.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <input type="checkbox" id={item} />
                  <label htmlFor={item} className="select-none">
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-2 w-[50%] justify-center">
            <span className="text-xl">Brand</span>
            <select
              name=""
              id=""
              className="bg-linear-to-r from-[#13103a] via-[#35306f] to-[#29294a] rounded p-1 outline-0"
            >
              <option value="ALL" className="text-black ">
                All
              </option>
              <option value="ALL" className="text-black">
                ALL
              </option>
              <option value="ALL" className="text-black">
                ALL
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl ">Price Range</span>
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
          <button
            value="reset"
            type="reset"
            className="bg-linear-to-r from-red-500 to-purple-500 text-white   rounded cursor-pointer   text-[17px] py-1 flex justify-center items-center w-[70%] "
            onClick={() => setPriceRange(0)}
          >
            Reset filters
          </button>
        </form>
      </div>
    </>
  );
}

export default FilterSection;
