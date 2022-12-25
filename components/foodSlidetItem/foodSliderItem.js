import React from 'react'
import Image from "next/image";
import mypic from "../../assets/images/food.jpg";
import StarIcon from "../../assets/Star.svg";
const FoodItem = () => {
  return (
    <div className="p-8 bg-white rounded-2xl h-full w-32 relative overflow-hidden">
          <div
            className="top-0  bottom-0 left-0 right-0 w-full h-full absolute z-10 "
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(52, 57, 52, 0) 0%, #28272C 85%)",
            }}
          ></div>
          <Image fill  alt="" src={mypic} />
          <div
            style={{ borderRadius: "20px 0px 0px 20px" }}
            className="bg-[#F96B57] absolute z-20 top-5 -right-5 py-[2px] pr-4 pl-3 flex items-center"
          >
            <span className="text-white text-[12px] font-Shabnam mr-[9px] mt-[2px]">%۲۵</span>
          </div>
          <div
            dir="ltr"
            className="bg-[#FBFBFB] opacity-80 rounded-xl py-[2px] px-2  flex items-center justify-center space-x-1 absolute z-20 top-5 left-2"
          >
            <StarIcon className="w-4 h-4" />
            <span className="text-[#696D6F] text-[12px] font-Shabnam mt-[2px]">4.9</span>
          </div>
        </div>
  )
}

export default FoodItem