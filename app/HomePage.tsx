"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
// import myself from "@/public/images/myself.png";
import myself2 from "@/public/images/myself2.jpeg";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";

const HomePage = () => {
  return (
    <main className="container mt-32 mb-20 min-h-[calc(100vh-500px)]">
      <section className="flex flex-col gap-10 lg:gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-1/2 lg:w-1/3">
          <h1 className="text-5xl md:text-6xl font-bold mb-5">
            Full stack developer
          </h1>
          <h2 className="">
            Hey, I&apos;m Bryan Deckers, a passionate developer based in the
            beautiful Limburg, Belgium
            <Icon
              icon="twemoji:flag-belgium"
              className="mb-1 ml-2 text-2xl inline"
            />
          </h2>
        </div>

        <div className="w-1/2 relative">
          <Image
            src={myself2}
            alt="Image of myself on the landing page"
            priority={true}
            className="rounded-lg"
          />
        </div>
      </section>

      <Link
        href="#projects"
        className="flex items-center gap-3 mt-32 mb-10 md:mb-5"
      >
        <h2 className="text-xl font-semibold">Checkout some of my projects</h2>
        <Icon icon="mdi:chevron-down" className="text-3xl" />
      </Link>

      <section className="mt-40" id="projects">
        <h2 className="text-3xl font-semibold mb-5">Featured Projects</h2>
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui at ante."
            href="https://github.com"
            tags={["React", "Next.js", "TailwindCSS"]}
            image={myself2}
          />
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui at ante."
            href="https://github.com"
            tags={["React", "Next.js", "TailwindCSS"]}
            image={myself2}
          />
          <ProjectCard
            title="Project 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui at ante."
            href="https://github.com"
            tags={["React", "Next.js", "TailwindCSS"]}
            image={myself2}
          />
        </div>
      </section>

      <section className="mt-40" id="aboutme">
        <h2 className="text-3xl font-semibold mb-5">About me</h2>
        <div className="">
          <p>
            I am Bryan Deckers, a full stack developer with a passion for the
            web. I am currently self-employed alongside my studies in Applied
            Computer Science.
          </p>
          <p>
            I love to learn new things both professionally and in my free time
          </p>
          <p>
            If you want to get in touch with me or like the work I do feel free
            to contact me!
          </p>
          <Link href="/about" className="">
            Read more
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-14 mt-24 mb-20 md:mb-5">
          <div className="flex gap-5 items-center justify-center md:justify-normal">
            <p className="text-lg font-bold">Tech&nbsp;Stack</p>
            <p className="text-2xl hidden md:block">|</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
            <p><Icon icon="devicon:nextjs-wordmark" className="text-7xl" />NextJS</p>
            <Icon icon="devicon:tailwindcss" className="text-5xl" />
            <Icon icon="devicon:react" className="text-4xl" />
            <Icon icon="devicon:typescript" className="text-4xl" />
            <Icon icon="devicon:laravel" className="text-4xl" />
            <Icon icon="devicon:python" className="text-4xl" />
            <Icon icon="devicon:figma" className="text-4xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
