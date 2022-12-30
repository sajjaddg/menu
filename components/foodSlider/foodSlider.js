"use client";

import FoodItem from "../foodSlidetItem/foodSliderItem";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "./styles.css";
const FoodSlider = () => {
  return (
    <>
      <div className="p-6 flex flex-col space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{"<"}</span>
            <span className="font-Shabnam text-base">مشاهده</span>
          </div>
          <span className="font-ShabnamBold text-xl">تخفیف های ويژه</span>
        </div>
       
      </div>
      <div className="flex">
        <Swiper
          dir="rtl"
          freeMode={true}
          slidesPerView={2.5}
          spaceBetween={12}
          slidesOffsetAfter={20}
          slidesOffsetBefore={20}
          modules={[FreeMode]}
          className="mylist"
        >


          <SwiperSlide className="Slide" >
            <FoodItem />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <FoodItem />
          </SwiperSlide >
          <SwiperSlide className="Slide">
            <FoodItem />
          </SwiperSlide >

          <SwiperSlide className="Slide">
            <FoodItem />
          </SwiperSlide>


        </Swiper>
      </div>

    </>
  );
};

export default FoodSlider;
