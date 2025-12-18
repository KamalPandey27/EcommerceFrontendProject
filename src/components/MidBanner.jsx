import React from "react";
import banner from "../assets/banner1.jpg";
function MidBanner() {
  return (
    <>
      <div
        className=" relative w-screen h-[80vh] bg-cover bg-center  "
        style={{
          backgroundImage: `url(${banner})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className=" absolute inset-0 bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-70 z-10" />
        <div className=" relative z-20 h-full w-full flex flex-col justify-center items-center text-white  gap-10">
          {" "}
          <div className="lg:text-6xl md:text-5xl text-4xl font-bold text-center">
            Next-Gen Electronics at Your Fingertips
          </div>
          <div className="lg:text-xl text-lg text-center">
            Discover the latest tech innovations with unbeatable prices and free
            shipping on all orders.
          </div>
          <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-2 py-1 md:px-3 md:py-2 rounded-md cursor-pointer mt-2 md:text-[16px] text-[14px] text-center">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default MidBanner;
