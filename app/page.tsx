import Image from "next/image";
import { siteConfig } from "./config/site";

export default function Home() {
  return (
    <main className="mx-auto min-h-screen p-24">
      <h1 className="text-3xl text-center font-extrabold p-[1.75rem]">
        {siteConfig.name}
      </h1>
      <h2 className="text-lg font-medium text-center">
        {siteConfig.description}
      </h2>
    </main>
  );
}
