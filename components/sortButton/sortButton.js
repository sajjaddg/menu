import SortIcon from "../../assets/sort.svg";

const SortButton = () => {
    return (
        <div onClick={()=>{setVisible(true)}} className="flex justify-center cursor-pointer items-center p-4   bg-white rounded-xl">
            <SortIcon className="h-5 w-auto" />
        </div>
    )
}

export default SortButton