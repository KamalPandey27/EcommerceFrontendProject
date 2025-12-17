import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Carousel() {
  const { fetchAllProducts, data } = useContext(DataContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute md:left-4 left-1 top-1/2 -translate-y-1/2 z-10 
                 bg-black/50 hover:bg-black text-white 
                 md:p-3 p-2 rounded-full transition"
        aria-label="Previous slide"
      >
        ‹
      </button>
    );
  }

  function NextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute md:right-4  right-1 top-1/2 -translate-y-1/2 z-10 
                 bg-black/50 hover:bg-black text-white 
                 md:p-3  p-2 rounded-full transition"
        aria-label="Next slide"
      >
        ›
      </button>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    pauseOnHover: false,
  };
  return (
    <>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item) => {
          return (
            <div
              key={item.id}
              className=" md:h-[calc(100vh-78px)] h-125 w-screen md:p-0 py-3"
            >
              <div className="flex md:justify-evenly md:gap-0  h-full items-center lg:p-0 md:p-10 md:flex-row flex-col ">
                <div className="xl:w-[50%] md:w-[60%] w-full flex justify-center  items-center xl:pl-0 md:pl-17 px-7">
                  <div className="md:space-y-7 space-y-3">
                    <h3 className="text-red-500 font-semibold font-sans text-sm">
                      Powering your world with the best Products
                    </h3>
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold uppercase line-clamp-3 md:w-125 text-white">
                      {item.title}
                    </h1>
                    <p className="lg:w-125 md:w-100 w-full  text-gray-400 md:pr-7 md:text-[16px] text-[13px]">
                      {item.description}
                    </p>
                    <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-2 py-1 md:px-3 md:py-2 rounded-md cursor-pointer mt-2 md:text-[16px] text-[14px]">
                      Shop now
                    </button>
                  </div>
                </div>
                <div className="md:w-[50%] w-full flex justify-center items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-full lg:w-[65%]  md:w-[80%] w-[40%]  hover:scale-105 transition-all md:shadow-2xl shadow-lg shadow-red-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Carousel;
