"use client";
import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="container mt-40 mb-5">
      <PageHeader title="About" />

      <section className="">
        <div className="mb-10">
          <p>
            I am Bryan Deckers, a full stack developer with a passion for the web.
            I am currently self-employed alongside my studies in Applied Computer
            Science.
          </p>
          <p>
            I love to learn new things both professionally and in my free time
          </p>
        </div>
        <Link
          href="/CVBryanDeckers.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-customblack text-white px-4 py-2 rounded-md"
        >
          Download Resume
        </Link>
      </section>

      <section className="flex items-center gap-40 mb-10">
        <div>
          <h2 className="text-2xl font-semibold mt-20 mb-3">Education</h2>
          <p>I have been studying Computer science for 5 years now.</p>
          <div className="flex flex-col gap-10 mt-5">
            <div className="border px-4 py-6 rounded-lg">
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

            <div className="border px-4 py-6 rounded-lg mb-5">
              <p className="text-xl font-semibold">
                Secondary in IT Management (Informaticabeheer)
              </p>
              <p className="text-gray-500 mt-3 mb-5">
                Provinciale Handelsschool Hasselt 2019 - 2021
              </p>
              <p>Here I learned the basics of HTML, CSS, Javascript, C++ and C#</p>
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
        </div>

        <div>
          <h2 className="text-2xl font-semibold mt-20 mb-3">Work</h2>
          <p>I have been studying Computer science for 5 years now.</p>
          <div className="flex flex-col gap-10 mt-5">
            <div className="border px-4 py-6 rounded-lg">
              <p className="text-xl font-semibold">
                Student self-employed web design
              </p>
              <p className="text-gray-500 mt-3 mb-5">
                Bryan Deckers March 2023 - Present
              </p>
              <p>Finding customers, understanding and solving their goals and needs</p>
              <p className="mt-3">Collaborate with other student independents to complete larger projects</p>
              <p className="mt-3">Projects for non-profit organizations, small and large companies, examples can be <Link href="/projects" className="text-blue-500">here</Link></p>
            </div>

            <div className="border px-4 py-6 rounded-lg mb-5">
              <p className="text-xl font-semibold">
                Logistics employee (job student)
              </p>
              <p className="text-gray-500 mt-3 mb-5">
                PK Express (UPS) March 2021 - Present
              </p>
              <p>Loading and unloading trucks</p>
              <p>
                Learning how to work within a company
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="mt-10">
        <div className="flex flex-col lg:flex-row gap-14 md:mb-5">
          <div className="flex gap-5 items-center justify-center md:justify-normal">
            <p className="text-lg font-bold">Tech</p>
            <p className="text-2xl hidden md:block">|</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
            <Icon icon="devicon:nextjs-wordmark" className="text-7xl" />
            <Icon icon="devicon:tailwindcss" className="text-5xl" />
            <Icon icon="devicon:react" className="text-4xl" />
            <Icon icon="devicon:javascript" className="text-4xl" />
            <Icon icon="devicon:typescript" className="text-4xl" />
            <Icon icon="devicon:laravel" className="text-4xl" />
            <Icon icon="devicon:python" className="text-4xl" />
            <Icon icon="devicon:html5" className="text-4xl" />
            <Icon icon="devicon:css3" className="text-4xl" />
            <Icon icon="devicon:prisma" className="text-4xl" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-14 md:mb-5">
          <div className="flex gap-5 items-center justify-center md:justify-normal">
            <p className="text-lg font-bold">Tools</p>
            <p className="text-2xl hidden md:block">|</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
            <Icon icon="devicon:figma" className="text-4xl" />
            <Icon icon="devicon:vscode" className="text-4xl" />
            <Icon icon="devicon:git" className="text-4xl" />
            <Icon icon="devicon:github" className="text-4xl" />
            <Icon icon="devicon:postman" className="text-4xl" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-14 md:mb-5">
          <div className="flex gap-5 items-center justify-center md:justify-normal">
            <p className="text-lg font-bold">Database</p>
            <p className="text-2xl hidden md:block">|</p>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap gap-14 justify-center md:justify-start items-center">
            <Icon icon="devicon:mysql" className="text-4xl" />
            <Icon icon="devicon:sqlite" className="text-4xl" />
            <Icon icon="devicon:postgresql" className="text-4xl" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
