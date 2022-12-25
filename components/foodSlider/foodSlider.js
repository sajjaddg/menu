import Image from "next/image";
import mypic from "../../assets/images/food.jpg";
import StarIcon from "../../assets/Star.svg";
const FoodSlider = () => {
  return (
    <div className="p-6 flex flex-col space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{"<"}</span>
          <span className="font-Shabnam text-base">مشاهده</span>
        </div>
        <span className="font-ShabnamBold text-xl">تخفیف های ويژه</span>
      </div>
      <div dir="rtl" className="flex h-40">
        <div className="p-8 bg-white rounded-2xl h-full w-32 relative overflow-hidden">
          <div
            className="top-0  bottom-0 left-0 right-0 w-full h-full absolute z-10 "
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(52, 57, 52, 0) 0%, #28272C 85%)",
            }}
          ></div>
          <Image fill className="w-full h-auto " alt="" src={mypic} />
          <div
            style={{ borderRadius: "20px 0px 0px 20px" }}
            className="bg-[#F96B57] absolute z-20 top-5 -right-3 py-1 pr-4 pl-3 flex items-center"
          >
            <span className="text-white text-sm">%25</span>
          </div>
          <div
            dir="ltr"
            className="bg-[#FBFBFB] opacity-80 rounded-xl py-1 px-2  flex items-center justify-center space-x-1 absolute z-20 top-5 left-2"
          >
            <StarIcon className="w-4 h-4" />
            <span className="text-[#696D6F] text-sm">4.9</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodSlider;
