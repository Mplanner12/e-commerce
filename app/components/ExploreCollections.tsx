"use client";

import React from "react";
import { Carousel, Typography, Button } from "./Providers";
import Image from "next/image";
// import dynamic from "next/dynamic";
import ClothingCollection from "./ClothingCollection";

const ExploreCollections = () => {
  return (
    <section className="w-full">
      <ClothingCollection />
      <div className="flex justify-end gap-x-[0.35rem] w-full px-[1.25rem]">
        <h1 className="flex justify-end text-white text-lg md:text-2xl mb-3">
          EXPLORE COLLECTIONS
        </h1>
        <span className="rounded-full h-fit text-[0.65rem] px-[0.15rem] text-red-400 border-red-500 border-2">
          {3}
        </span>
      </div>
      <div className="w-full px-[1rem]">
        <Carousel
          transition={{ duration: 2 }}
          className="rounded-[2rem] h-[35rem] overflow-hidden w-full mx-auto"
        >
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="text-center w-full">
                <h1 className="mb-4 text-4xl md:text-[4.85rem] lg:text-[6.5rem] text-white md:leading-[6rem] md:relative md:top-[2.8rem] z-40">
                  LUNACORE <br /> PF23 COLLECTION
                </h1>
                <div className="rounded-2xl z-30 absolute -top-10 w-full">
                  <Image
                    className="mx-auto"
                    src="/cloth7.png"
                    alt=""
                    width={250}
                    height={50}
                  />
                </div>
              </div>
              <Typography
                variant="lead"
                color="white"
                className="w-full border-black border-t-[0.85rem] mb-12 opacity-80 md:relative md:top-[7.35rem] rounded-[2rem] px-4 md:flex md:justify-end z-20 bg-gray-900 py-[3.2rem]"
              >
                <span className="w-full md:w-[55rem]">
                  Explore the boundaries of style with our Pro-FoF 2023 <br />
                  it's a world where fashion meets technology
                </span>
                <span className="flex justify-center md:justify-end w-full md:pr-8 md:relative">
                  <Button
                    size="lg"
                    color="white"
                    className="w-[20rem] h-[3.5rem] rounded-[1.85rem] mt-4 text-white bg-inherit border-gray-100 border-4"
                  >
                    VIEW COLLECTION
                  </Button>
                </span>
              </Typography>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-3/4">
                <h1 className="mb-4 text-4xl md:text-[4.85rem] lg:text-[6.5rem] text-white md:leading-[6rem] md:relative md:top-[2.8rem] z-40">
                  LUNACORE <br /> PF23 COLLECTION
                </h1>
                <Image
                  className="rounded-2xl z-30 absolute -top-10 md:left-[35.5rem]"
                  src="/cloth7.png"
                  alt=""
                  width={250}
                  height={50}
                />
              </div>
              <Typography
                variant="lead"
                color="white"
                className="w-full border-black border-t-[0.85rem] mb-12 opacity-80 md:relative md:top-[7.35rem] rounded-[2rem] px-4 md:flex md:justify-end z-20 bg-gray-900 py-[3.2rem]"
              >
                <span className="md:w-[55rem]">
                  Explore the boundaries of style with our Pro-FoF 2023 <br />
                  it's a world where fashion meets technology
                </span>
                <span className="flex justify-center md:justify-end w-full md:pr-8 md:relative">
                  <Button
                    size="lg"
                    color="white"
                    className="w-[20rem] h-[3.5rem] rounded-[1.85rem] mt-4 text-white bg-inherit border-gray-100 border-4"
                  >
                    VIEW COLLECTION
                  </Button>
                </span>
              </Typography>
            </div>
          </div>
          <div className="relative h-full w-full">
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
              <div className="w-3/4 text-center md:w-3/4">
                <span className="mb-4 text-4xl md:text-[4.85rem] lg:text-[6.5rem] text-white md:leading-[6rem] md:relative md:top-[2.8rem] z-40">
                  LUNACORE <br /> PF23 COLLECTION
                </span>
                <Image
                  className="rounded-2xl z-30 absolute -top-10 md:left-[35.5rem]"
                  src="/cloth7.png"
                  alt=""
                  width={250}
                  height={50}
                />
              </div>
              <Typography
                variant="lead"
                color="white"
                className="w-full border-black border-t-[0.85rem] mb-12 opacity-80 md:relative md:top-[7.35rem] rounded-[2rem] px-4 md:flex md:justify-end z-20 bg-gray-900 py-[3.2rem]"
              >
                <span className="md:w-[55rem]">
                  Explore the boundaries of style with our Pro-FoF 2023 <br />
                  it's a world where fashion meets technology
                </span>
                <span className="flex justify-center md:justify-end w-full md:pr-8 md:relative">
                  <Button
                    size="lg"
                    color="white"
                    className="w-[20rem] h-[3.5rem] rounded-[1.85rem] mt-4 text-white bg-inherit border-gray-100 border-4"
                  >
                    VIEW COLLECTION
                  </Button>
                </span>
              </Typography>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default ExploreCollections;

// export default dynamic(() => Promise.resolve(ExploreCollections), {
//   ssr: false,
// });
