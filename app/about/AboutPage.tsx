"use client";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";

import { Icon } from "@iconify/react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="container mt-40 mb-5">
      <PageHeader title="About" />

      <section className="">
        <p>
          I am Bryan Deckers, a full stack developer with a passion for the web.
          I am currently self-employed alongside my studies in Applied Computer
          Science.
        </p>
        <p>
          I love to learn new things both professionally and in my free time
        </p>
        <p>
          If you want to get in touch with me or like the work I do feel free to
          contact me!
        </p>
        <Link href="/about" className="">
          Read more
        </Link>
      </section>

      {/* <h1 className="text-3xl font-semibold mb-5">
        So this is the part where I tell you about myself
      </h1>
      <p>
        I am currently self employed alongside my studies in applied computer
        science.
      </p>
      <p>
        In my freetime I like to work on my personal projects but a couple of
        games can&apos;t miss here.
      </p>
      <p>I also have a passion for cars, so you might see me at a few car meetings or shows.</p>

      <h2 className="text-2xl font-semibold mt-20">Education</h2>
      <p>I have been studying Computer science for 5 years now.</p>
      <div className="flex flex-col gap-10 mt-5">
        <div className="border px-4 py-6 rounded-lg w-1/2">
          <p className="text-xl font-semibold">
            Bachelor&apos;s Degree in Applied Computer Science (Toegepaste
            Informatica)
          </p>
          <p className="text-gray-500 mt-3 mb-5">
            Thomas More Geel 2021 - Present
          </p>
          <p>
            Here I learned React/NextJS, Flutter, Python, Java, Laravel, Javascript and Typescript, designing/prototyping using Figma.
          </p>
          <p className="mt-3">
            These projects were for real clients or companies some of which are featured
            in my{" "}
            <Link href="/projects" className="hover:underline text-blue-500">
              projects
            </Link>{" "}
            page
          </p>
        </div>
        <div className="border px-4 py-6 rounded-lg w-1/2">
          <p className="text-xl font-semibold">
            Secondary in IT Management (informaticabeheer)
          </p>
          <p className="text-gray-500 mt-3 mb-5">
            Provinciale Handelsschool Hasselt 2019 - 2021
          </p>
          <p>Here I learned the basics of HTML, CSS, Javascript, c++ and c#</p>
          <p>
            My thesis is still featured on their{" "}
            <Link
              href="https://www.handelsschoolhasselt.be/nl/studie/6-informaticabeheer"
              target="_blank"
              className="hover:underline text-blue-500"
            >
              website
            </Link>
          </p>
        </div>
      </div>

      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-customblack text-white px-4 py-2 rounded-md mt-10"
      >
        Download Resume
      </Link> */}
    </main>
  );
};

export default AboutPage;
