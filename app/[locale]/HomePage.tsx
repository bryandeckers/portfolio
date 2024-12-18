"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import myself2 from "@/public/images/myself2.jpeg";
import { Link } from '@/i18n/routing';
import ProjectCard from "@/components/ProjectCard";
import waaiburg from "@/public/images/waaiburgdashboard.png";
import dfk from "@/public/images/dfkteams.png";
import internship from "@/public/images/internship.png";
import { useLocale, useTranslations } from "next-intl";

const HomePage = () => {
  const t = useTranslations('HomePage');

  const locale = useLocale();

  const projects = [
    {
      title: "Internship project - Make it fly branded Doodle",
      image: internship,
      tags: ["DESIGN", "DEVELOPMENT"],
      description: "A webapplication to simplify finding a timeslot that fits everyone",
      readMoreLink: "/projects/internship",
    },
    {
      title: "Waaiburg",
      image: waaiburg,
      tags: ["DESIGN", "DEVELOPMENT"],
      description: "A dashboard for a care home, with a lot of features to make the work of the employees easier.",
      readMoreLink: "/projects/waaiburg",
      href: "https://dewaaiburgapp.eu/",
    },
    {
      title: "Dartsfederatie Kempen",
      image: dfk,
      tags: ["DESIGN", "DEVELOPMENT"],
      description:
        "A webapplication for a darts federation, digitalizing the competition and making it easier to manage.",
      readMoreLink: "/projects/dartsfederatiekempen",
      href: "https://dartsfederatiekempen.be",
    },
  ];

  const projectsNL = [
    {
      title: "Stageproject - Make it fly Doodle",
      image: internship,
      tags: ["DESIGN", "ONTWIKKELING"],
      description: "Een webapplicatie om het vinden van een geschikte tijdslot eenvoudiger te maken.",
      readMoreLink: "/projects/internship",
    },
    {
      title: "Waaiburg",
      image: waaiburg,
      tags: ["DESIGN", "ONTWIKKELING"],
      description:
        "Een dashboard voor een zorgcentrum, met veel functies om het werk van de medewerkers eenvoudiger te maken.",
      readMoreLink: "/projects/waaiburg",
      href: "https://dewaaiburgapp.eu/",
    },
    {
      title: "Dartsfederatie Kempen",
      image: dfk,
      tags: ["DESIGN", "ONTWIKKELING"],
      description:
        "Een webapplicatie voor een dartsfederatie, die de competitie digitaliseert en het beheer eenvoudiger maakt.",
      readMoreLink: "/projects/dartsfederatiekempen",
      href: "https://dartsfederatiekempen.be",
    },
  ];

  const toBeMappedProjects = locale === "nl" ? projectsNL : projects;

  return (
    <main className="container px-10 lg:px-5 mt-32 mb-20 min-h-[calc(100vh-500px)]">
      <section className="flex flex-col gap-10 lg:gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:w-1/3">
          <h1 className="text-5xl md:text-6xl font-bold mb-10 lg:mb-5">
            {t('landingheader')}
          </h1>
          <h2 className="">
            {t('landingtext')}
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

      <section className="mt-40" id="projects">
        <h2 className="text-3xl font-semibold mb-5">{t('featured')}</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-10">
          {
            toBeMappedProjects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  image={project.image}
                  tags={project.tags}
                  description={project.description}
                  readMoreLink={project.readMoreLink}
                ></ProjectCard>
              )
            })
          }
        </div>
      </section>

      <section className="mt-20 lg:mt-40" id="aboutme">
        <h2 className="text-3xl font-semibold mb-5">{t('about')}</h2>
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex flex-col justify-between mb-5 w-full lg:w-1/2">
            <div>
              <p>
                {t('abouttext1')}
              </p>
              <p className="mt-5">
                {t('abouttext2')}
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 mt-10 lg:mt-0 items-center">
              <Link href="/about" className="bg-customblack text-white px-4 py-2 rounded-md">
                {t('readmore')}
              </Link>
              <Link
                href="/contact"
                className="bg-blue-700 text-white px-4 py-2 rounded-md"
              >
                {t('contact')}
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
      </section>
    </main>
  );
};

export default HomePage;
