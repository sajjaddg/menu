import SearchIcon from "../assets/search.svg";
import FilterIcon from "../assets/filter.svg";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-[#E5E5E5]">
      <div className="relative">
        <section className="p-6 flex h-40 justify-end bg-[#343839]">
          <div className="border-2 border-white rounded-full h-12 w-12"></div>
        </section>
        <section className="flex justify-center w-full  -bottom-6 absolute space-x-2">
          <div className="flex justify-center items-center p-4   bg-white rounded-xl">
            <FilterIcon className="h-5 w-auto" />
          </div>
          <div className="flex bg-white  items-center space-x-2 p-4 rounded-xl ">
            <input
              className="outline-none text-right placeholder:text-[#D8D9D9]"
              placeholder="چی میل دارید؟"
            />
            <SearchIcon className="h-5 w-auto "  />
          </div>
        </section>
      </div>
    </div>
  );
};
export default Home;
