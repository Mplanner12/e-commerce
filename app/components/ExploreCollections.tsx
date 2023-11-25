"use client";

import React from "react";
import { Carousel, Typography, Button } from "./Providers";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const ExploreCollections = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-center w-full px-[2rem] md:mb-[16rem] h-[20rem] gap-x-2">
        <div className="h-[33rem] p-0 px-[2rem] rounded-3xl bg-blue-gray-900">
          <Image
            className="relative -top-8"
            src="/cloth7.png"
            alt=""
            width={300}
            height={80}
          />
          <button className="backdrop-blur py-3 px-4 w-[15rem] md:w-[24rem] left-[0.65rem] flex justify-between text-gray-400 text-2xl rounded-2xl bg-[gray]/20 relative -top-24">
            MENS CLOTHING
            <div className="rounded-full border-white border-2 p-[0.25rem]">
              <GoArrowUpRight />
            </div>
          </button>
        </div>
        <div className="h-[33rem] px-[2rem] rounded-3xl bg-blue-gray-900">
          <Image
            className="relative -top-10"
            src="/cloth7.png"
            alt=""
            width={300}
            height={80}
          />
          <button className="backdrop-blur py-3 px-4 w-[15rem] md:w-[24rem] left-[0.65rem] flex justify-between text-gray-400 text-2xl rounded-2xl bg-[gray]/20 relative -top-24">
            ACCESSORIES
            <div className="rounded-full border-white border-2 p-[0.25rem]">
              <GoArrowUpRight />
            </div>
          </button>
        </div>
        <div className="h-[33rem] px-[2rem] rounded-3xl bg-blue-gray-900">
          <Image
            className="relative -top-10"
            src="/cloth7.png"
            alt=""
            width={300}
            height={80}
          />
          <button className="backdrop-blur py-3 px-4 w-[15rem] md:w-[24rem] left-[0.65rem] flex justify-between text-gray-400 text-2xl rounded-2xl bg-[gray]/20 relative -top-24">
            WOMEN CLOTHING
            <div className="rounded-full border-white border-2 p-[0.25rem]">
              <GoArrowUpRight />
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-end gap-x-[0.35rem]">
        <h1 className="flex justify-end text-white text-lg md:text-2xl mb-3">
          EXPLORE COLLECTIONS
        </h1>
        <span className="rounded-full h-fit text-[0.65rem] px-[0.15rem] text-red-400 border-red-500 border-2">
          {3}
        </span>
      </div>
      <Carousel
        transition={{ duration: 2 }}
        className="rounded-[2rem] h-[35rem] overflow-hidden"
      >
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
              <p className="md:w-[55rem]">
                Explore the boundaries of style with our Pro-FoF 2023 <br />{" "}
                it's a world where fashion meets technology
              </p>
              <div className="flex justify-center md:justify-end w-full md:pr-8 md:relative">
                <Button
                  size="lg"
                  color="white"
                  className="w-[20rem] h-[3.5rem] rounded-[1.85rem] mt-4 text-white bg-inherit border-gray-100 border-4"
                >
                  VIEW COLLECTION
                </Button>
              </div>
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
              <p className="md:w-[55rem]">
                Explore the boundaries of style with our Pro-FoF 2023 <br />{" "}
                it's a world where fashion meets technology
              </p>
              <div className="flex justify-center md:justify-end w-full md:pr-8 md:relative">
                <Button
                  size="lg"
                  color="white"
                  className="w-[20rem] h-[3.5rem] rounded-[1.85rem] mt-4 text-white bg-inherit border-gray-100 border-4"
                >
                  VIEW COLLECTION
                </Button>
              </div>
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
              <p className="md:w-[55rem]">
                Explore the boundaries of style with our Pro-FoF 2023 <br />{" "}
                it's a world where fashion meets technology
              </p>
              <div className="flex justify-center md:justify-end w-full md:pr-8 md:relative">
                <Button
                  size="lg"
                  color="white"
                  className="w-[20rem] h-[3.5rem] rounded-[1.85rem] mt-4 text-white bg-inherit border-gray-100 border-4"
                >
                  VIEW COLLECTION
                </Button>
              </div>
            </Typography>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default ExploreCollections;
