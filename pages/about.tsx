import PageHeader from "@/components/PageHeader";
import { NextPage } from "next";
import Image from "next/image";

import car from "../public/images/car.jpg";
import { Icon } from "@iconify/react";
import Link from "next/link";

// TODO: cv toevoegen

const AboutPage: NextPage = () => {
  return (
    <main className="container px-30 lg:px-60 mt-20 mb-5">
      <PageHeader title="About" />

      <p className="mb-5">
        Welcome! I&apos;m Bryan Deckers, and I&apos;m delighted to have you here
        on my portfolio page. Let me share a bit about myself. I&apos;m
        currently studying Digital Innovation, and I must say, it&apos;s a
        program that truly resonates with me. One of the aspects I appreciate
        the most is its project-based learning approach, which enables me to
        work with real clients. It&apos;s a refreshing departure from the
        traditional classroom setup, as it allows me to apply my skills and
        knowledge in practical, real-world scenarios.
      </p>
      <p className="mb-5">
        Outside of my studies, I find great satisfaction in working on my car.
        It&apos;s a hands-on hobby that allows me to explore my creative side
        and put my DIY skills to the test. From painting to various
        modifications, I&apos;ve invested time and effort in personalizing my
        car, making it a unique reflection of my taste and personality.
      </p>
      <div className="flex gap-3">
        <h2 className="text-xl font-semibold">Here you can see my car</h2>
        <Icon icon="mdi:arrow-down-right" className="text-4xl mt-1" />
      </div>
      <div className="h-1/2 mb-5">
        <Image src={car} alt="picture of my car" />
      </div>
      <p className="mb-5">
        In terms of coding, I&apos;ve developed proficiency in several languages
        and frameworks. I&apos;m well-versed in HTML, JavaScript, and
        TypeScript, which I frequently use alongside React/Next.js to build
        dynamic and responsive web applications. Python is another language I
        enjoy working with, and I&apos;ve also gained familiarity with Java. To
        streamline collaboration and ensure smooth development processes, I rely
        on tools like GitHub and Figma. Additionally, I&apos;m skilled in using
        Postman for API testing. When it comes to styling, I rely on the
        versatility of Tailwind CSS to create visually appealing and
        user-friendly interfaces.
      </p>
      <p className="mb-5">
        In essence, I&apos;m a dedicated individual who thrives on challenges
        and opportunities for growth. I&apos;m always eager to expand my
        knowledge and skills, both professionally and personally. If you have
        any questions or are interested in potential collaborations, please
        don&apos;t hesitate to reach out.
      </p>
      <p className="mb-5">If you want to checkout my resume you can do so right here:</p>
      <Link
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-customblack text-white px-4 py-2 rounded-md"
      >
        Resume
      </Link>
    </main>
  );
};

export default AboutPage;
