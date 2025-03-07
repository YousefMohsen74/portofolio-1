"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Thumb1 from "@/public/assets/thumb1.jpg";
import Thumb2 from "@/public/assets/thumb2.jpg";
import Thumb3 from "@/public/assets/thumb3.jpg";
import Thumb4 from "@/public/assets/thumb4.jpg";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import { MotionDiv } from "./Motion";

function Swiper1() {
  return (
    <MotionDiv initial={{ opacity: 0, y: -70 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2, delay: 0.6, ease: "backInOut" }} className="w-1/2  max-[720px]:w-full mx-auto pb-16 relative flex justify-center max-[720px]:h-3/4 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" grid grid-cols-2 grid-rows-2 gap-4">
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb1} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb2} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb3} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb4} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" grid grid-cols-2 grid-rows-2 gap-4">
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb1} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb2} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb3} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
            <div className="cursor-pointer group relative rounded-lg overflow-hidden">
              <div>
                <Image width={500} height={300} src={Thumb4} alt="" />
              </div>
              {/*overlay*/}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
              <div className="absolute left-20 text-white bottom-0 translate-y-full group-hover:-translate-y-20 transition-all duration-300">
                <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                  <div className="delay-100">LIVE</div>
                  <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                    PROJECT
                  </div>
                  <div className="text-xl  group-hover:transate-y-0 transition-all duration-300 delay-200">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom styles */}
      <style jsx global>{`
        .mySwiper{
          height:550px; 
          padding-top:150px;
        }
          @media (max-width: 720px) {
          .mySwiper{
          height:300px;
          padding-top:50px;
          }
          }
        .swiper-pagination {
          position: absolute !important;
          bottom: 0px !important;
          left: 50% !important;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          width: 100%;
            z-index: 10 !important; /* Ensure it appears above */
  opacity: 1 !important; /* Make sure it's fully visible */
  pointer-events: auto !important;
        }
        .swiper-pagination-bullet {
          background-color: rgb(
            220,
            38,
            38
          ) !important; /* Tailwind's red-600 */
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
        
      `}</style>
    </MotionDiv>
  );
}

export default Swiper1;
