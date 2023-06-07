import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import myself from "../public/images/myself.png";

const HomePage: NextPage = () => {
  return (
    <main className="container px-30 lg:px-60 mt-40">
      <PageHeader />

      {/* Hero section */}
      <div className="flex gap-32">
        <div className="flex flex-col">
          <div className="flex-grow">
            <h1 className="text-6xl font-bold mb-5">Full stack developer</h1>
            <div className="">
              <p className="">
                Hey, I&apos;m Bryan Deckers, a passionate developer based in the
                beautiful Limburg, Belgium
                <Icon
                  icon="twemoji:flag-belgium"
                  className="mb-1 ml-2 text-2xl inline"
                />
              </p>
            </div>
          </div>
          {/* Github & LinkedIn & Taskade */}
          <div className="flex gap-5 mt-10">
            <Link
              href="https://www.linkedin.com/in/bryandeckers/"
              target="_blank"
              rel="noopener"
            >
              <Icon icon="fa-brands:linkedin" className="text-2xl" />
            </Link>
            <Link
              href="https://github.com/bryandeckers"
              target="_blank"
              rel="noopener"
            >
              <Icon icon="fa-brands:github" className="text-2xl" />
            </Link>
            <Link
              href="https://www.taskade.com/d/gnCzA8B1QYCckhpW?share=edit&edit=4vKCYuwG7NNkZgzw&as=list"
              target="_blank"
              rel="noopener"
            >
              <Icon icon="logos:taskade" className="text-2xl" />
            </Link>
          </div>
        </div>
        {/* Image of myself */}
        <div className="w-1/2 h-80 rounded-full relative">
          <Image
            src={myself}
            alt="Image of myself on the landing page"
            priority={true}
            fill={true}
            className="object-top object-cover"
          />
        </div>
      </div>
      {/* Tech stack */}
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
    </main>
  );
};

export default HomePage;
