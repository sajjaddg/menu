import FilterButton from "../components/filterButton/filterButton";
import SearchBar from "../components/searchBar/search-bar";

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-[#EDEEEE]">
      <div className="relative">
        <section className="p-6 flex h-40 justify-end bg-[#343839]">
          <div className="border-2 border-white rounded-full h-12 w-12"></div>
        </section>
        <section className="flex justify-center w-full  -bottom-6 absolute space-x-2">
          <FilterButton/>
          <SearchBar/>
        </section>
      </div>
    </div>
  );
};
export default Home;
