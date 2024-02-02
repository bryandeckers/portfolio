"use client";
import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import myself from "@/public/images/myself.png";

const HomePage: NextPage = () => {
  return (
    <main className="container px-30 lg:px-48 mt-32 mb-20 min-h-[calc(100vh-500px)]">
      <PageHeader />

      <div className="flex items-center justify-between">
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            Business owner & Full stack developer
          </h1>
          <h2>
            Hey, I&apos;m Bryan Deckers, a passionate developer based in the
            beautiful Limburg, Belgium
            <Icon
              icon="twemoji:flag-belgium"
              className="mb-1 ml-2 text-2xl inline"
            />
          </h2>
        </div>

        <div className="hidden md:block w-1/4 h-80 rounded-full relative">
          <Image
            src={myself}
            alt="Image of myself on the landing page"
            priority={true}
            fill={true}
            className="object-top object-cover"
          />
        </div>
      </div>

      {/* <h2 className="text-3xl font-semibold mt-20 mb-10 md:mb-5">Let me help you!</h2>
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <Link href="/business" className="text-white bg-blue-600 px-6 py-2 rounded-lg hover:opacity-80">Business</Link>
        <Link href="/about" className="">Personal</Link>
      </div> */}

      {/*
      <div className="flex flex-col lg:flex-row gap-14 mt-24 mb-20 md:mb-5">
        <div className="flex gap-5 items-center justify-center md:justify-normal">
          <p className="text-lg font-bold">Tech&nbsp;Stack</p>
          <p className="text-2xl hidden md:block">|</p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
          <Icon icon="devicon:nextjs-wordmark" className="text-7xl" />
          <Icon icon="devicon:tailwindcss" className="text-5xl" />
          <Icon icon="devicon:react" className="text-4xl" />
          <Icon icon="devicon:typescript" className="text-4xl" />
          <Icon icon="devicon:laravel" className="text-4xl" />
          <Icon icon="devicon:python" className="text-4xl" />
          <Icon icon="devicon:figma" className="text-4xl" />
        </div>
      </div> 
      */}
    </main>
  );
};

export default HomePage;
