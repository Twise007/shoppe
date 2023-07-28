import React, { useContext, useState } from "react";
import { heroBanner } from "../constants";
import { productArray } from "../constants/index";
import { CartContext } from "../CartContext";
import { IoFlash } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../index.css";
import CountDown from "./CountDown";

const Sidebar = () => {
  const cart = useContext(CartContext);


  return (
    <div className="min-h-[78vh]  ">
      <Swiper
        modules={[EffectFade, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect={"fade"}
        speed={800}
        slidesPerView={1}
        loop
      >
        <div>
          {heroBanner.map((banner, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-[38vh] hero relative rounded-2xl mb-4 object-contain -mt-3"
                style={{
                  backgroundImage: `url(${banner.image})`,
                  objectFit: "cover",
                }}
              >
                <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
                <div className="absolute text-xl text-white capitalize left-10">
                  <h5 className="py-1">{banner.title}</h5>
                  <p className="py-1">
                    {"$"} {banner.price}
                  </p>
                  <button className="p-1 px-4 mt-8 border rounded-l hover:bg-cl-acn">
                    View Product
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div>
        <div className="flex items-center gap-2 p-2 mb-2 text-white capitalize bg-red-500 rounded-lg md:justify-between">
          <div className="flex items-center md:gap-1">
            <p>flash sales</p>
            <IoFlash className="text-xl md:text-3xl text-[#FF9900] mr-2 hidden md:flex" />
          </div>
          <div className="flex items-center justify-center md:gap-2">
            <span className="hidden md:flex">time left</span>
            <CountDown />
          </div>
          <p>see all...</p>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:gap-8 xl:grid-cols-3 place-items-center">
          {productArray.map((product, index) => (
            <div key={index}>
              <div className="relative rounded-md hover:shadow w-36 md:w-72 lg:w-96 md:pt-0 group">
                <img src={product.image} alt="section gallery" />

                <button
                  onClick={() => cart.addOneToCart(product.id)}
                  className="md:py-4 py-2 text-center bg-[#cdcdcd]  w-full  hover:bg-cl-acn cursor-pointer z-50"
                >
                  ADD TO CART
                </button>

                <div className="p-2 pt-4">
                  <h2 className="pb-2 font-medium capitalize">
                    {product.title}
                  </h2>
                  <p className="font-medium text-cl-acn">
                    {"$"} {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
