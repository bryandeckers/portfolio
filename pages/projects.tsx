import ProjectCard from "@/components/ProjectCard";
import { Icon } from "@iconify/react";
import { NextPage } from "next";

import waaiburg from "../public/images/waaiburgdashboard.png";
import dfk from "../public/images/dfkteams.png";
import PageHeader from "@/components/PageHeader";

// TODO: Open projects in detail when clicking them with more information such as screenshots of final result, my role in the project, etc

const ProjectsPage: NextPage = () => {
  return (
    <main className="container px-30 lg:px-60 mt-20">
      <PageHeader title="Projects" />
      <div className="flex flex-col items-center md:items-start gap-20 mb-20">
        <ProjectCard
          title="Waaiburg"
          description="The Waaiburg Webapp/App is a custom-made web application developed for The Waaiburg, an organization that supports young people in difficult home situations. This web app provides complete control over the associated mobile app, allowing The Waaiburg staff to manage functionality, user accounts, and gather valuable data to evaluate the app's effectiveness."
          image={waaiburg}
          href="https://dewaaiburgapp.eu/"
        >
          <Icon icon="devicon:laravel" className="text-4xl" />
          <Icon icon="devicon:flutter" className="text-3xl" />
          <Icon icon="devicon:tailwindcss" className="text-5xl" />
        </ProjectCard>
        <ProjectCard
          title="Dartsfederatie Kempen"
          description="The Dartsfedartie Kempen Web Application project is a comprehensive solution created for Dartsfedartie Kempen, one of the largest, if not the largest, darts federations in the Kempen region. The goal was to develop a robust web application that enables them to efficiently manage and update their players, teams, and clubs, as well as schedule matches and input scores. This web application greatly streamlines their workflow, providing a user-friendly platform to enhance their administrative tasks."
          image={dfk}
          href="https://dartsfederatiekempen.be"
        >
          <Icon icon="devicon:nextjs-wordmark" className="text-5xl" />
          <Icon icon="devicon:typescript" className="text-4xl" />
          <Icon icon="devicon:cloudflare" className="text-5xl" />
          <Icon icon="devicon:tailwindcss" className="text-5xl" />
          <Icon icon="devicon:figma" className="text-4xl" />
        </ProjectCard>
      </div>
    </main>
  );
};

export default ProjectsPage;
