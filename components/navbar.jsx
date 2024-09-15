"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbarVisible, setNavbarVisible] = useState(true);
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setNavbarVisible(false);
      } else {
        // Scrolling up
        setNavbarVisible(true);
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`max-w-7xl fixed top-4 mx-auto inset-x-0 z-50 w-[95%] lg:w-full transform transition-transform duration-300 ${
        navbarVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="hidden lg:block w-full">
        <div className="w-full flex relative justify-center px-4 py-3 rounded-md duration-200 bg-transparent">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center gap-1.5">
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                href="/"
              >
                <h4 className="text-white font-semibold items-center justify-center leading-[110%] px-4">
                  Home
                </h4>
              </Link>
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                href="/"
              >
                <h4 className="text-white font-semibold items-center justify-center leading-[110%] px-4">
                  About
                </h4>
              </Link>
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                href="/"
              >
                <h4 className="text-white font-semibold items-center justify-center leading-[110%] px-4">
                  Contact
                </h4>
              </Link>
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                href="/"
              >
                <h4 className="text-white font-semibold items-center justify-center leading-[110%] px-4">
                  Contact
                </h4>
              </Link>
              <Link
                className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
                href="/"
              >
                <h4 className="text-white font-semibold items-center justify-center leading-[110%] px-4">
                  Blogs
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full items-center lg:hidden">
        <div className="flex justify-between bg-transparent items-center w-full rounded-md px-2.5 py-1.5">
          <Link
            className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
            href="/"
          >
            <h4 className="text-white font-bold">Portfolio</h4>
          </Link>
        </div>
      </div>
    </nav>
  );
}
