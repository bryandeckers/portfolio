"use client"
import PageHeader from "@/components/PageHeader";
import { NextPage } from "next";
import Image from "next/image";

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
        currently studying{" "}
        <Link
          href="https://digitalinnovation.be/"
          target="_blank"
          rel="noopener"
          className="inline underline hover:text-blue-700"
        >
          Digital Innovation
        </Link>
        <Icon icon="octicon:link-16" className="inline ml-1" />, and I must say,
        it&apos;s a program that truly resonates with me. One of the aspects I
        appreciate the most is its project-based learning approach, which
        enables me to work with real clients. It&apos;s a refreshing departure
        from the traditional classroom setup, as it allows me to apply my skills
        and knowledge in practical, real-world scenarios.
      </p>
      <p className="mb-5">
        Besides my studies, I find great satisfaction in working on my car.
        It&apos;s a hands-on hobby that allows me to explore my creative side
        and put my DIY skills to the test. From painting to various
        modifications, I&apos;ve invested time and effort in personalizing my
        car, making it a unique reflection of my taste and personality.
      </p>
      <div className="flex gap-3">
        <h2 className="text-xl font-semibold">Here you can see my car</h2>
        <Icon icon="mdi:arrow-down-right" className="text-4xl mt-1" />
      </div>
      <div className="w-full relative aspect-video mb-5">
        <Image src="https://imagedelivery.net/Va3UupLTRw0IIfUBpZD4iw/106bf32f-d462-4c75-c8cd-b4ee51244300/public" alt="picture of my car" fill />
      </div>
      <p className="mb-5">
        In terms of coding, I&apos;ve developed proficiency in several languages
        and frameworks. I&apos;m well-versed in HTML{" "}
        <Icon icon="devicon:html5" className="inline mb-1" />, JavaScript{" "}
        <Icon icon="devicon:javascript" className="inline mb-1" />, and
        TypeScript{" "}<Icon icon="devicon:typescript" className="inline mb-1" />,
        which I frequently use alongside React/Next.js {" "}<Icon icon="devicon:nextjs" className="inline mb-1 text-xl" /> to build dynamic and
        responsive web applications. Python{" "}<Icon icon="devicon:python" className="inline mb-1 text-xl" />is another language I enjoy working
        with, and I&apos;ve also gained familiarity with Java<Icon icon="devicon:java" className="inline mb-1 text-xl" />. To streamline
        collaboration and ensure smooth development processes, I rely on tools
        like GitHub{" "}<Icon icon="devicon:github" className="inline mb-1 text-xl" /> and Figma{" "}<Icon icon="devicon:figma" className="inline mb-1 text-xl" />. Additionally, I&apos;m skilled in using Postman{" "}<Icon icon="devicon:postman" className="inline mb-1 text-xl" />
        {" "}for API testing. When it comes to styling, I rely on the versatility of
        Tailwind CSS{" "}<Icon icon="devicon:tailwindcss" className="inline mb-1 text-xl" /> to create visually appealing and user-friendly interfaces.
      </p>
      <p className="mb-5">
        In essence, I&apos;m a dedicated individual who thrives on challenges
        and opportunities for growth. I&apos;m always eager to expand my
        knowledge and skills, both professionally and personally. If you have
        any questions or are interested in potential collaborations, please
        don&apos;t hesitate to reach out.
      </p>
      <p className="mb-5">
        If you want to checkout my resume you can do so right here:
      </p>
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
