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
        <div className="h-8 mt-9 w-full ">
            <Swiper
                dir="rtl"
                freeMode={true}
                slidesPerView={3.5}
                breakpoints={{
                    440: {
                        slidesPerView: 5,
                        spaceBetween: 7,
                        slidesOffsetAfter:0,
                    },
                    768: {
                        slidesPerView: 8,
                        spaceBetween: 7,
                    },
                    1024: {
                        slidesPerView: 10,
                        spaceBetween: 7,
                    },
                }}
                spaceBetween={7}
                slidesOffsetAfter={-20}
                slidesOffsetBefore={22}
                modules={[FreeMode]}
                className="mySwiper"
            >
                <SwiperSlide className="mySlide">
                    <FilterButton text={'برگر'} />
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <FilterButton text={'هات داگ'} />
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <FilterButton text={'ساندیوچ'} />
                </SwiperSlide>
                <SwiperSlide className='mySlide'>
                    <FilterButton text={'پیتزا'} />
                </SwiperSlide>
            </Swiper>
        </div>

    )
}

export default FilterBar