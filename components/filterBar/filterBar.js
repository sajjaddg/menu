"use client"
import FilterButton from "../flterButton/filterButton"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import './styles.css'
const FilterBar = () => {
    return (
        <div className="h-8 mt-9 pr-6">
            <Swiper
                dir="rtl"
                freeMode={true}
                slidesPerView={3.5}
                spaceBetween={7}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <FilterButton text={'برگر'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton text={'هات داگ'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton text={'ساندیوچ'} />
                </SwiperSlide>
                <SwiperSlide>
                    <FilterButton text={'پیتزا'} />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default FilterBar