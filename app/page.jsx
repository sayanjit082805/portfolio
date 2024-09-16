"use client";
import "./globals.css";
import React from "react";
import { Spotlight } from "@/components/ui/Spotlight";
import { BentoGrid, BentoGridItem } from "@/components/ui/grid";
import { motion } from "framer-motion";
import Tech from "@/components/tech";
import Icon from "@/components/icons";
import Banner from "@/components/banner";

const items = [
  {
    title: "TheMovieCentral",
    description: "Search and fetch details of thousands of movies.",
    header: <Banner src="movie" alt="TheMovieCentral" />,
    icon: <Icon src={["javascript", "react", "tailwindcss"]} />,
  },
  {
    title: "AtmosAlert",
    description: "Get weather details of any city.",
    header: <Banner src={"weather-1"} alt={"AtmosAlert"} />,
    icon: <Icon src={["javascript", "react", "tailwindcss"]} />,
  },
  {
    title: "FactFlow",
    description: "Fetch random and fun facts.",
    header: <Banner src={"fact"} alt={"FactFlow"} />,
    icon: <Icon src={["javascript", "react", "tailwindcss"]} />,
  },
  {
    title: "QuoteStream",
    description: "Motivate yourself with inspirational speeches.",
    header: <Banner src={"quotes"} alt={"QuoteStream"} />,
    icon: <Icon src={["html", "tailwindcss", "javascript"]} />,
  },
  {
    title: "PMSS Scholarship Portal",
    description: "Collaborative project built for a hackathon.",
    header: <Banner src={"scholarship"} alt={"pmsss"} />,
    icon: <Icon src={["javascript", "next", "tailwindcss"]} />,
  },
  {
    title: "AuraX",
    description:
      "Another weather app and my first project, in collaboration with two friends.",
    header: <Banner src={"weather-2"} alt={"AuraX"} />,
    icon: <Icon src={["python", "gui"]} />,
  },
];

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
      <div className="md:h-[40rem] w-full flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative md:overflow-hidden h-full">
        <div className="md:w-[40rem] md:h-40 relative w-full max-w-7xl h-[1550px]">
          <h1 className="text-6xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 lg:leading-tight">
            Tech Stack
          </h1>
          <div className="absolute inset-x-20 top-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-20 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-20 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-20 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
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
      <div className="md:h-[40rem] w-full flex md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen">
        <div className="md:w-[40rem] md:h-40 relative w-full max-w-7xl h-[1550px]">
          <h1 className="text-6xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 lg:leading-tight">
            Projects
          </h1>
          <div className="absolute inset-x-20 top-20 bg-gradient-to-r from-transparent via-red-600 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-20 bg-gradient-to-r from-transparent via-rose-300 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-20 bg-gradient-to-r from-transparent via-rose-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-20 bg-gradient-to-r from-transparent via-rose-800 to-transparent h-px w-1/4" />
        </div>
        <motion.div
          initial={{ opacity: 0.0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="my-20 absolute  w-full px-4 mt-32 items-center"
        >
          <BentoGrid>
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className="bg-gradient-to-br from-zinc-900 dark:from-neutral-900 dark:to-neutral-800 to-neutral-800"
              />
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </>
  );
}
