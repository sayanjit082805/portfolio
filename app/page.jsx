"use client";
import "./globals.css";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { motion } from "framer-motion";
import Tech from "@/components/tech";
import dynamic from "next/dynamic";
import items from "@/lib/data";

const PinContainer = dynamic(
  () => import("@/components/ui/3d-pin").then((mod) => mod.PinContainer),
  {
    ssr: false,
  }
);


export default function Home() {
  return (
    <>
      <div className="h-[40rem] w-full flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=" p-4 max-w-7xl  mx-auto relative z-10  w-full md:pt-0"
        >
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Learning the ways of the world, <br /> one step at a time.
          </h1>
          <p className="mt-6 font-normal text-xl text-neutral-300 max-w-lg text-center mx-auto">
            Hello there, dear traveller! My name is Sayanjit and I consider
            myself to be a somewhat proficient frontend developer.
          </p>
        </motion.div>
      </div>
      <div className="md:h-[40rem] w-full flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-hidden h-full">
        <div className="md:w-[40rem] md:h-40 relative w-full max-w-7xl h-[1550px]">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 lg:leading-tight">
            Tech Stack
          </h1>
          <div className="absolute inset-x-16 md:inset-x-20 top-16 md:top-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 md:inset-x-20 top-16 md:top-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-36 md:inset-x-60 top-16 md:top-20 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-36 md:inset-x-60 top-16 md:top-20 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <motion.div
          initial={{ opacity: 0.0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="grid gap-3 grid-cols-1 md:grid-cols-[repeat(auto-fill, _minmax(250px, _1fr))] mt-20 absolute md:left-32 w-full px-4"
        >
          <Tech />
        </motion.div>
      </div>
      <div className="w-full flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <div className="md:w-[40rem] relative w-full max-w-7xl md:h-[70rem] h-[3350px] mt-5">
          <h1 className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 lg:leading-tight">
            Projects
          </h1>
          <div className="absolute inset-x-16 md:inset-x-20 top-16 md:top-20 bg-gradient-to-r from-transparent via-red-600 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-16 md:inset-x-20 top-16 md:top-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-36 md:inset-x-60 top-16 md:top-20 bg-gradient-to-r from-transparent via-rose-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-36 md:inset-x-60 top-16 md:top-20 bg-gradient-to-r from-transparent via-rose-800 to-transparent h-px w-1/4" />
        </div>
        <motion.div
          initial={{ opacity: 0.0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute w-full px-4 mt-10 items-center flex flex-wrap justify-center p-4 gap-16"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center sm:w-96 w-[80vw] md:mt-20 mt-[54px] p-4"
            >
              <PinContainer title={item.title} href={item.link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="z-10 absolute bottom-0 rounded-xl"
                  />
                </div>
                <h1 className="font-bold lg:text-xl md:text-lg text-base line-clamp-1 text-zinc-500 mt-10 antialiased">
                  {item.title}
                </h1>
                <p className="text-md lg:font-normal font-light text-sm line-clamp-2 antialiased text-zinc-200">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
