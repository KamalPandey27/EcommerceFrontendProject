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
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 
                 bg-black/50 hover:bg-black text-white 
                 p-3 rounded-full transition"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 
                 bg-black/50 hover:bg-black text-white 
                 p-3 rounded-full transition"
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
              className="bg-linear-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10"
            >
              <div className="flex gap-10 justify-center h-150 items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering your world with the best Products
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-125 text-white">
                    {item.title}
                  </h1>
                  <p className="md:w-125 line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-linear-to-r from-red-500 to-purple-500 text-white px-3 py-2 rounded-md cursor-pointer mt-2">
                    Shop now
                  </button>
                </div>
                <div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="rounded-full w-137.5 hover:scale-105 transition-all shadow-2xl shadow-red-400"
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
