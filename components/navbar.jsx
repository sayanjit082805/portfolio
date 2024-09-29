"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > lastScrollTop) {
        setNavbarVisible(false);
      } else {
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
                  Blogs
                </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex flex-1 justify-end items-center m-4">
        <Image
          src={toggle ? "/close.svg" : "/menu.svg"}
          height={24}
          width={24}
          alt="menu"
          onClick={() => setToggle(!toggle)}
        />
        <AnimatePresence>
          {toggle && <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: toggle ? 1 : 0, y: toggle ? 0 : -20 }}
            exit={{ opacity: 0, y : -20 }}
            transition={{ duration: 0.3 }}
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-br from-neutral-900 to-neutral-800 absolute top-10 right-0 mx-2 my-3 min-w-[140px] z-50 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              <li>
                <Link href="/" className="text-slate-100">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-100">
                  About
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-100">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="text-slate-100">
                  Blogs
                </Link>
              </li>
            </ul>
          </motion.div>}
        </AnimatePresence>
      </div>
    </nav>
  );
}
