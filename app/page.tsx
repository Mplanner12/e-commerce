"use client";

import Image from "next/image";
import { siteConfig } from "./config/site";
import ExploreCollections from "./components/ExploreCollections";
import FollowUs from "./components/FollowUs";
import ImageMarque from "./components/ImageMarque";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen p-5">
      <h1 className="text-3xl text-center font-extrabold p-[1.75rem]">
        {siteConfig.name}
      </h1>
      <h2 className="text-lg font-medium text-center">
        {siteConfig.description}
      </h2>
      <ExploreCollections />
      <FollowUs />
      <ImageMarque />
    </main>
  );
}
