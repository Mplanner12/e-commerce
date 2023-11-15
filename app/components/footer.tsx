import React from "react";
import { siteConfig } from "../config/site";
import Link from "next/link";
import { Props } from "next/script";

const Footer = () => {
  return (
    <div>
      <ul className="p-[2rem] w-full grid grid-cols-2 md:flex md:justify-around">
        {siteConfig.footer.map((link) => (
          <Link
            key={link.href}
            className="p-[0.35rem] md:p-[0.75rem] shadow-md text-[0.65rem] md:text-[1rem]"
            href={link.href}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
