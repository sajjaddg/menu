import SortComponent from "../components/sort/sort-component";
import FilterBar from "../components/filterBar/filterBar";
import FoodSlider from "../components/foodSlider/foodSlider";
import Navbar from "../components/navbar/navbar";

const Home = () => {
  return (
    <div className="flex relative flex-col min-h-screen pb-5 bg-[#EDEEEE] ">
      <div className="relative">
        <section className="p-6 flex h-40 justify-end bg-[#343839]">
          <div className="border-2 border-white rounded-full h-12 w-12"></div>
        </section>
        <Navbar />
      </div>
      <FilterBar />

      <FoodSlider />
      <FoodSlider />
      <FoodSlider />

      <SortComponent />
    </div>
  );
};
export default Home;
