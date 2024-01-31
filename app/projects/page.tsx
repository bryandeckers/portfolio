"use client"
import ProjectCard from "@/components/ProjectCard";
import { Icon } from "@iconify/react";
import { NextPage } from "next";

import waaiburg from "@/public/images/waaiburgdashboard.png";
import dfk from "@/public/images/dfkteams.png";
import PageHeader from "@/components/PageHeader";

// TODO: Open projects in detail when clicking them with more information such as screenshots of final result, my role in the project, etc

const ProjectsPage: NextPage = () => {
  return (
    <main className="container mt-40">
      <PageHeader title="Projects" />
      <div className="flex flex-col lg:flex-row flex-wrap gap-10 mb-20">
        <ProjectCard
          title="Waaiburg"
          image={waaiburg}
          href="https://dewaaiburgapp.eu/"
        >
        </ProjectCard>
        <ProjectCard
          title="Dartsfederatie Kempen"
          image={dfk}
          href="https://dartsfederatiekempen.be"
        >
        </ProjectCard>
      </div>
    </main>
  );
};

export default ProjectsPage;
