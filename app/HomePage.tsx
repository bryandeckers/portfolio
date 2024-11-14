"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
// import myself from "@/public/images/myself.png";
import myself2 from "@/public/images/myself2.jpeg";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import waaiburg from "@/public/images/waaiburgdashboard.png";
import dfk from "@/public/images/dfkteams.png";
import internship from "@/public/images/internship.png";

const HomePage = () => {
  return (
    <main className="container mt-32 mb-20 min-h-[calc(100vh-500px)]">
      <section className="flex flex-col gap-10 lg:gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:w-1/3">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 lg:mb-5">
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

        <div className="w-full lg:w-1/2 relative">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-10">
          <ProjectCard
            title="Internship project - Make it fly branded Doodle"
            image={internship}
            tags={["DESIGN", "DEVELOPMENT"]}
            description="A webapplication to simplify finding a timeslot that fits everyone"
            readMoreLink="/projects/internship"
          ></ProjectCard>
          <ProjectCard
            title="Waaiburg"
            image={waaiburg}
            href="https://dewaaiburgapp.eu/"
            readMoreLink="/projects/waaiburg"
            tags={["DESIGN", "DEVELOPMENT"]}
            description="A dashboard for a care home, with a lot of features to make the work of the employees easier."
          ></ProjectCard>
          <ProjectCard
            title="Dartsfederatie Kempen"
            image={dfk}
            href="https://dartsfederatiekempen.be"
            readMoreLink="/projects/dartsfederatiekempen"
            tags={["DESIGN", "DEVELOPMENT"]}
            description="A webapplication for a darts federation, digitalizing the competition and making it easier to manage."
          ></ProjectCard>
        </div>
      </section>

      <section className="mt-40" id="aboutme">
        <h2 className="text-3xl font-semibold mb-5">About me</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col justify-between mb-5 w-full lg:w-1/2">
            <div>
              <p>
                I am Bryan Deckers, a full stack developer with a passion for the web.
                I specialize in both front-end and back-end development. Currently,
                I am self-employed, which allows me to pursue my professional projects alongside
                my studies in Applied Computer Science at university.
              </p>
              <p className="mt-5">
                My journey into the world of development began several years ago, and over time,
                I've honed my skills in technologies such as JavaScript, TypeScript, React, Node.js,
                and databases. I thrive on building dynamic, efficient, and scalable applications that
                solve real-world problems. I love to stay updated with the latest trends in tech and
                continuously work on improving my craft.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-center">
              <Link href="/about" className="bg-customblack text-white px-4 py-2 rounded-md">
                Read more
              </Link>
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                Contact me
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/3 relative">
            <Image
              src={myself2}
              alt="Image of myself on the landing page"
              priority={true}
              className="rounded-2xl"
            />
          </div>
        </div>

        {/* <div className="flex flex-col lg:flex-row lg:justify-center gap-14 mt-24 mb-20 md:mb-5">
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
        </div> */}
      </section>
    </main>
  );
};

export default HomePage;
