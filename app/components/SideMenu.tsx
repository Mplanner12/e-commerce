"use client";
import React from "react";
import { signOutUser } from "../lib/firebaseAuth";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

interface SideMenuProps {
  navOpen: boolean;
}

const SideMenu: React.FC<SideMenuProps> = ({ navOpen }) => {
  // console.log("nav open", navOpen);

  const sidebarItems = [
    { label: "Home", icon: "🏠", link: "/" },
    { label: "Dashboard", icon: "📊", link: "/dashboard" },
    { label: "History", icon: "🕰️", link: "/dashboard/history" },
    { label: "Favorites", icon: "⭐", link: "/Dashboard/favorites" },
    { label: "Support", icon: "🤝", link: "/dashboard/support" },
    { label: "Settings", icon: "⚙️", link: "/dashboard/settings" },
  ];

  const router = useRouter();

  const handleSignOut = () => {
    signOutUser();
    router.push("/");
  };

  const closeNav = () => {};

  return (
    <aside
      className={`${
        navOpen ? "left-0" : "left-[-140%]"
      } w-full lg:w-1/4 bg-gray-800 text-white p-4 absolute lg:left-0 transition-all top-0 bottom-0 lg:relative z-10`}
    >
      <div className="mb-8 lg:hidden z-50">
        <FaTimes onClick={closeNav} />
      </div>
      <div className="text-2xl font-bold mb-6">Dashboard</div>
      <nav className="h-[80vh] flex flex-col justify-between">
        <div>
          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center p-2 hover:bg-gray-700"
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={handleSignOut}
          className="bg-red-700 border border-white px-6 py-1 rounded-full hover:bg-red-600"
        >
          Log out
        </button>
      </nav>
    </aside>
  );
};

export default SideMenu;
