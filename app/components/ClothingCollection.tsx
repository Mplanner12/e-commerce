import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const ClothingCollection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full px-[2rem] mb-[5.5rem] md:mb-[16rem] h-fit md:h-[20rem] gap-x-2 gap-y-10">
      <div className="h-[31.5rem] p-0 px-[1.5rem] lg:px-[2rem] rounded-3xl bg-blue-gray-900 w-full lg:w-full">
        <Image
          className="relative -top-6 lg:mx-auto"
          src="/cloth7.png"
          alt="cloth Item"
          width={300}
          height={80}
        />
        <button className="backdrop-blur py-3 px-4 w-full mx-auto md:w-[24rem] lg:w-full flex justify-between text-gray-400 text-md md:text-2xl rounded-2xl bg-[gray]/20 relative -top-[3.8rem] md:-top-24">
          MENS CLOTHING
          <div className="rounded-full border-white border-2 p-[0.25rem]">
            <GoArrowUpRight />
          </div>
        </button>
      </div>
      <div className="h-[31.5rem] p-0 px-[1.5rem] lg:px-[2rem] rounded-3xl bg-blue-gray-900 w-full lg:w-full">
        <Image
          className="relative -top-6 lg:mx-auto lg:"
          src="/cloth7.png"
          alt="cloth Item"
          width={300}
          height={80}
        />
        <button className="backdrop-blur py-3 px-4 w-full mx-auto md:w-[24rem] lg:w-full flex justify-between text-gray-400 text-md md:text-2xl rounded-2xl bg-[gray]/20 relative -top-[3.8rem] md:-top-24">
          ACCESSORIES
          <div className="rounded-full border-white border-2 p-[0.25rem]">
            <GoArrowUpRight />
          </div>
        </button>
      </div>
      <div className="h-[31.5rem] p-0 px-[1.5rem] lg:px-[2rem] rounded-3xl bg-blue-gray-900 w-full lg:w-full">
        <Image
          className="relative -top-6 lg:mx-auto"
          src="/cloth7.png"
          alt="cloth Item"
          width={300}
          height={80}
        />
        <button className="backdrop-blur py-3 px-4 w-full mx-auto md:w-[24rem] lg:w-full flex justify-between text-gray-400 text-md md:text-2xl rounded-2xl bg-[gray]/20 relative -top-[3.8rem] md:-top-24">
          WOMEN CLOTHING
          <div className="rounded-full border-white border-2 p-[0.25rem]">
            <GoArrowUpRight />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ClothingCollection;
