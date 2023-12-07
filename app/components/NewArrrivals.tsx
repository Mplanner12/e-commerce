import Image from "next/image"
import Hoodie from "@/public/hoodie.jpg"
import AddToBagButton from "./AddToBagButton"




const NewArrrivals = () => {
  return (
    <div className='w-full flex flex-col gap-5 bg-transparent p-10'>
        <div className="flex items-center justify-between">
            <div className="flex items-start gap-2">
                <h1 className="text-[2rem] text-white">NEW ARRIVALS</h1>
                <p className="text-xs text-orange-900 pt-2">(13)</p>
            </div>
            <div className="text-center text-white">
                <button className="rounded-3xl border border-gray-500 p-2 text-sm">SHOP ALL</button>
            </div>
        </div>
        <div className="overflow-x-auto  gap-5 items-center w-full flex">
            {Array(13).fill("").map((item, index) => (
                <div className="relative" key={index}>
                    <Image src={Hoodie} alt="hoodie_image" width={270} height={100} className="rounded-xl" />
                    <AddToBagButton />

                </div>
            ))}
        </div>
    </div>
  )
}

export default NewArrrivals