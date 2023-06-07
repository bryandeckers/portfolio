import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

// TODO: Fix favicon with logo

const HomePage: NextPage = () => {
  return (
    <div className="container px-60 mt-44">
      {/* Hero section */}
      <div className="flex gap-20">
        <div className="flex flex-col">
          <div className="flex-grow">
            <h1 className="text-6xl font-bold mb-5">Full stack developer</h1>
            <div className="">
              <p className="">
                Hey, I&apos;m Bryan Deckers, a passionate developer based in the
                beautiful Limburg, Belgium
                <Icon icon="twemoji:flag-belgium" className="mb-1 ml-2 text-2xl inline" />
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
        <Image
          src=""
          alt="Image of myself on the landing page"
          className="w-1/2"
        />
      </div>
      {/* Tech stack */}
      <div className="flex gap-14 items-center w-full mt-24">
        <div className="flex gap-5 items-center">
          <p className="text-lg font-bold">Tech Stack</p>
          <p className="text-2xl">|</p>
        </div>
        <Icon icon="devicon:nextjs-wordmark" className="text-7xl" />
        <Icon icon="devicon:tailwindcss" className="text-5xl" />
        <Icon icon="devicon:react" className="text-4xl" />
        <Icon icon="devicon:typescript" className="text-4xl" />
        <Icon icon="devicon:python" className="text-4xl" />
      </div>
    </div>
  );
};

export default HomePage;
