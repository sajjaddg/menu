import SearchIcon from "../../assets/search.svg";

const SearchBar = () => {
    return (
        <div className="flex bg-white  items-center space-x-2 p-4 rounded-xl ">
            <input
                className="outline-none text-right placeholder:text-[#D8D9D9]"
                placeholder="چی میل دارید؟"
            />
            <SearchIcon className="h-5 w-auto " />
        </div>
    )
}

export default SearchBar