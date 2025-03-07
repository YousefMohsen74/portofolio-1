"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Avt1 from '@/public/assets/t-avt-1.png'
import Avt2 from '@/public/assets/t-avt-2.png'
import Avt3 from '@/public/assets/t-avt-3.png'
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import { MotionDiv } from "./Motion";

function Swiper2() {
  return (
    <MotionDiv initial={{ opacity: 0, y: 72 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2.7, delay: 0.6, ease: "backInOut" }} className="w-1/2 h-80 max-[720px]:w-full mx-auto pb-8 relative flex justify-center max-[720px]:h-3/4 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="cursor-pointer">
          <div className="w-full min-h-[250px] flex space-x-16 items-center max-[720px]:flex-col max-[720px]:px-10 max-[720px]:justify-center max-[720px]:space-x-0 max-[720px]:space-y-5">
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden">
                <Image src={Avt1} alt="User Avatar" />
              </div>
              <p className="text-white text-xl font-bold m-0 leading-9 w-32 text-center">Anne Smith</p>
              <p className="text-white text-lg leading-none">Customer</p>
            </div>
            <div className="w-1 h-32 bg-gray-600 max-[720px]:hidden"></div>
            <div className="flex flex-col space-y-3 max-[720px]:items-center">
              <div className="text-5xl text-gray-500">
                <FaQuoteLeft />
              </div>
              <p className="text-base text-white max-[720px]:text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Cum expedita osit beatea, cupiditate saepe quam officia aut placet quas neque!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div className="w-full min-h-[250px] flex space-x-16 items-center max-[720px]:flex-col max-[720px]:px-10 max-[720px]:justify-center max-[720px]:space-x-0 max-[720px]:space-y-5">
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden">
                <Image src={Avt2} alt="User Avatar" />
              </div>
              <p className="text-white text-xl font-bold m-0 leading-9 w-32 text-center">Anne Smith</p>
              <p className="text-white text-lg leading-none">Customer</p>
            </div>
            <div className="w-1 h-32 bg-gray-600 max-[720px]:hidden"></div>
            <div className="flex flex-col space-y-3 max-[720px]:items-center">
              <div className="text-5xl text-gray-500">
                <FaQuoteLeft />
              </div>
              <p className="text-base text-white max-[720px]:text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Cum expedita osit beatea, cupiditate saepe quam officia aut placet quas neque!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="cursor-pointer">
          <div className="w-full min-h-[250px] flex space-x-16 items-center max-[720px]:flex-col max-[720px]:px-10 max-[720px]:justify-center max-[720px]:space-x-0 max-[720px]:space-y-5">
            <div className="flex flex-col items-center">
              <div className="rounded-full overflow-hidden">
                <Image src={Avt3} alt="User Avatar" />
              </div>
              <p className="text-white text-xl font-bold m-0 leading-9 w-32 text-center">Anne Smith</p>
              <p className="text-white text-lg leading-none">Customer</p>
            </div>
            <div className="w-1 h-32 bg-gray-600 max-[720px]:hidden"></div>
            <div className="flex flex-col space-y-3 max-[720px]:items-center">
              <div className="text-5xl text-gray-500">
                <FaQuoteLeft />
              </div>
              <p className="text-base text-white max-[720px]:text-center">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Cum expedita osit beatea, cupiditate saepe quam officia aut placet quas neque!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Arrows */}
      <div className="swiper-button-prev ">
      </div>
      <div className="swiper-button-next ">
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-pagination {
          position: absolute !important;
          bottom: 10px !important;
          left: 50% !important;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          width: 100%;
        }
        .swiper-pagination-bullet {
          background-color: rgb(220, 38, 38) !important; /* Tailwind's red-600 */
          opacity: 0.5;
          width: 12px;
          height: 12px;
          margin: 0 4px !important; /* Adjust spacing */
          cursor: pointer; /* Makes dots clickable */
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background-color: rgb(220, 38, 38) !important;
        }
          .swiper-button-prev-active,
        .swiper-button-next-active{
        opacity:0.5;
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          color:rgb(220, 38, 38);
          top: 50%;
          transform: translateY(-50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
        }
        .swiper-button-prev {
          left: -100px; /* Increased from 10px to 30px */
        }
        .swiper-button-next {
          right: -100px; /* Increased from 10px to 30px */
        }

        @media (max-width: 720px) {
          .swiper-button-prev {
            left: 0;
          }
          .swiper-button-next {
            right: 0;
          }
        }
      `}</style>
    </MotionDiv>
  );
}

export default Swiper2;