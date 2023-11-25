import React from "react";
import Link from "next/link";

const FollowUs = () => {
  return (
    <section className="mt-[2rem]">
      <h1 className="text-center text-white text-2xl">
        Follow us on{" "}
        <Link className="underline text-red-300" href="#">
          Instagram
        </Link>
      </h1>
    </section>
  );
};

export default FollowUs;
