import PageHeader from "@/components/PageHeader";
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectDetailedPage: NextPage = () => {
  const { query } = useRouter();

  const projectData = {
    waaiburg: {
      title: "Waaiburg",
      description:
        "The Waaiburg Webapp/App is a custom-made web application developed for The Waaiburg, an organization that supports young people in difficult home situations. This web app provides complete control over the associated mobile app, allowing The Waaiburg staff to manage functionality, user accounts, and gather valuable data to evaluate the app's effectiveness.",
      image: "/images/waaiburgdashboard.png",
      technologies: ["Laravel", "Flutter", "TailwindCSS"],
    },
    dartsfederatiekempen: {
      title: "Dartsfederatie Kempen",
      description:
        "The Dartsfedartie Kempen Web Application project is a comprehensive solution created for Dartsfedartie Kempen, one of the largest, if not the largest, darts federations in the Kempen region. The goal was to develop a robust web application that enables them to efficiently manage and update their players, teams, and clubs, as well as schedule matches and input scores. This web application greatly streamlines their workflow, providing a user-friendly platform to enhance their administrative tasks.",
      image: "/images/dfkteams.png",
      technologies: [
        "NextJS",
        "TypeScript",
        "Cloudflare",
        "TailwindCSS",
        "Figma",
      ],
    },
  };

  const project = projectData[query.project as keyof typeof projectData];

  if (!project?.title) {
    return <div>Project not found</div>;
  }

  return (
    <main className="container px-30 lg:px-60 mt-20">
      <PageHeader title={project.title} />
      <Link href="/projects" className="hover:underline">
        Back to projects
      </Link>
      <div className="flex flex-col items-center md:items-start gap-20 mb-20 mt-5">
        <div className="flex flex-col items-center md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start gap-5">
            <h1 className="text-4xl font-bold">{project.title}</h1>
            <p className="text-xl">{project.description}</p>
            <div className="flex flex-wrap gap-5">
              {project.technologies.map((technology) => (
                <div key={technology} className="flex items-center gap-2">
                  <Icon icon={"devicon:" + technology.toLowerCase()} />
                  <p>{technology}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetailedPage;
