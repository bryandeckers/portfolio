"use client"
import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Link } from '@/i18n/routing';
import { FunctionComponent } from "react";
import { useLocale } from "next-intl";

interface ProjectDetailedProps {
  project: {
    title: string;
    shortdescription: string;
    description: string[];
    image: string;
    technologies: string[];
  }
}

const ProjectDetailed: FunctionComponent<ProjectDetailedProps> = ({
  project,
}) => {
  const locale = useLocale();

  return (
    <main className="container px-10 lg:px-5 mt-20">
      <PageHeader title={project.title} noTitleText={true} />
      <Link href="/projects" className="flex items-center hover:underline">
        <Icon icon="mdi:chevron-left" className="text-2xl" />
        {locale === "nl" ? "Terug naar projecten" : "Back to projects"}
      </Link>
      <div className="flex flex-col items-center md:items-start gap-20 mb-20 mt-5">
        <div className="flex flex-col items-center md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <div className="text-xl text-justify">
              {Array.isArray(project.shortdescription)
                ? project.shortdescription.map((text, index) => (
                  <p key={index} dangerouslySetInnerHTML={{ __html: text }} className="mb-4"></p>
                ))
                : <p dangerouslySetInnerHTML={{ __html: project.shortdescription }} />}
            </div>
            <div className="flex flex-wrap gap-5">
              {project.technologies.map((technology) => (
                <div key={technology} className="flex items-center gap-2">
                  <Icon icon={"devicon:" + technology.toLowerCase().replaceAll(" ", "")} />
                  <p>{technology}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col relative w-full aspect-video items-center md:items-start gap-5">
            <div className="relative w-full aspect-video p-5 bg-gray-100 border-2 border-gray-300 rounded-md shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="rounded-md object-cover"
              />
            </div>
          </div>
          <div className="text-lg text-justify">
            {Array.isArray(project.description)
              ? project.description.map((text, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: text }} className="mb-4"></p>
              ))
              : <p dangerouslySetInnerHTML={{ __html: project.description }} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailed;
