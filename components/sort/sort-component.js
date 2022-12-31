"use client"

const SortComponent = () => {
    return (

        <div className="fixed min-h-screen bg-[#17191A] bg-opacity-30  w-full  z-30">
            <div className="bg-[#FBFBFB] fixed -bottom-2 flex flex-col space-y-5 w-full p-6 rounded-t-3xl">
                <h2 className="font-ShabnamMedium text-right">... مرتب سازی بر اساس</h2>
                <ul className="flex flex-col space-y-4 font-ShabnamLight text-right">
                    <li>پرفروش ترین</li>
                    <li>ارزان ترین</li>
                    <li>گران ترین</li>
                    <li>محبوب ترین</li>
                </ul>
            </div>
        </div>
        
    )
}

export default SortComponent