"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {  RxCrop , RxDesktop , RxPencil2 , RxReader , RxRocket , RxArrowTopRight, } from "react-icons/rx";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";
import { MotionDiv } from "./Motion";

function SwiperComponent() {
  return (
    <MotionDiv initial={{ opacity: 0, y: -70 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 0.6, ease: "backInOut" }} className="w-1/2 max-[720px]:w-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 10 }, // Ensure 1 slide for very small screens
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 1, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="space-y-3 group py-5 w-full flex flex-col max-[720px]:flex-row max-[720px]:space-y-0 max-[720px]:space-x-5  p-6 bg-[rgba(65,47,123,0.15)] cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all rounded-lg ">
            <div className="text-4xl text-red-600">
              <RxCrop />
            </div>
            <div className="max-[720px]:flex max-[720px]:flex-col">
            <p className="font-bold mb-1 text-white">Branding</p>
            <p className="text-sm mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="text-white text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 transition-all group-hover:text-red-600" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-3 max-[720px]:flex-row max-[720px]:space-y-0 max-[720px]:space-x-5 group py-5 w-full flex flex-col p-6 bg-[rgba(65,47,123,0.15)] cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all rounded-lg ">
            <div className="text-4xl text-red-600">
              <RxPencil2 />
            </div>
            <div className="max-[720px]:flex max-[720px]:flex-col">
            <p className="font-bold mb-1 text-white">Design</p>
            <p className="text-sm mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="text-white text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 transition-all group-hover:text-red-600" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-3 max-[720px]:flex-row max-[720px]:space-y-0 max-[720px]:space-x-5 group py-5 w-full flex flex-col p-6 bg-[rgba(65,47,123,0.15)] cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all rounded-lg ">
            <div className="text-4xl text-red-600">
              <RxDesktop />
            </div>
            <div className="max-[720px]:flex max-[720px]:flex-col">
            <p className="font-bold mb-1 text-white">Development</p>
            <p className="text-sm mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="text-white text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 transition-all group-hover:text-red-600" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-3 max-[720px]:flex-row max-[720px]:space-y-0 max-[720px]:space-x-5 group py-5 w-full flex flex-col p-6 bg-[rgba(65,47,123,0.15)] cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all rounded-lg ">
            <div className="text-4xl text-red-600">
              <RxReader />
            </div>
            <div className="max-[720px]:flex max-[720px]:flex-col">
            <p className="font-bold mb-1 text-white">Copywritting</p>
            <p className="text-sm mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="text-white text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 transition-all group-hover:text-red-600" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="space-y-3 max-[720px]:flex-row max-[720px]:space-y-0 max-[720px]:space-x-5 group py-5 w-full flex flex-col p-6 bg-[rgba(65,47,123,0.15)] cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all rounded-lg ">
            <div className="text-4xl text-red-600">
              <RxRocket />
            </div>
            <div className="max-[720px]:flex max-[720px]:flex-col">
            <p className="font-bold mb-1 text-white">SEO</p>
            <p className="text-sm mb-4 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            </div>
            <div className="text-white text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 transition-all group-hover:text-red-600" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom pagination element */}
      <div className="swiper-pagination"></div>

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: relative !important;
          margin-top: 20px; /* Space between slides and dots */
        }
        .swiper-pagination-bullet {
          background-color: rgb(
            220,
            38,
            38
          ) !important; /* Tailwind's red-600 */
          opacity: 0.5;
          width: 10px;
          height: 10px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: rgb(220, 38, 38) !important;
        }
      `}</style>
    </MotionDiv>
  );
}

export default SwiperComponent;
