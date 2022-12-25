import SearchIcon from "../../assets/search.svg";

const SearchBar = () => {
    return (
        <div className="flex bg-white  items-center space-x-4 p-4 py-3 w-full rounded-xl ">
            <input
                className="outline-none w-full text-lg font-Shabnam text-right placeholder:text-[#D8D9D9]"
                placeholder="چی میل دارید؟"
            />
            <SearchIcon className="h-6 w-auto " />

        </div>
    )
}

export default SearchBar