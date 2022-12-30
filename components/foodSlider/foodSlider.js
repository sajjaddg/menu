import FoodItem from "../foodSlidetItem/foodSliderItem";

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
      <div dir="rtl" className="flex h-44  space-x-3 ">
        <FoodItem />
      </div>
    </div>
  );
};

export default FoodSlider;
