import React from "react";
import inventory from "../config/Inventory";
import Image from "next/image";

const ImageMarque = () => {
  return (
    <div className="mt-[2rem]">
      <ul className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 p-2 gap-x-4 gap-y-4 md:gap-y-0">
        {inventory.map((cloth, index) => (
          <li key={cloth.id} className="rounded-xl bg-cyan-800 w-full">
            <Image
              className="mx-auto"
              src={cloth.image}
              alt=""
              width={150}
              height={150}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageMarque;
