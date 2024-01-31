"use client";
import ProjectCard from "@/components/ProjectCard";
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import PageHeader from "@/components/PageHeader";

import waaiburg from "@/public/images/waaiburgdashboard.png";
import dfk from "@/public/images/dfkteams.png";
import simpelke from "@/public/images/simpelke.png";
import bcdetailing from "@/public/images/bcdetailing.png";

// TODO: Open projects in detail when clicking them with more information such as screenshots of final result, my role in the project, etc

const ProjectsPage: NextPage = () => {
  return (
    <main className="container mt-40">
      <PageHeader title="Projects" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        <ProjectCard
          title="'t Simpelke"
          image={simpelke}
          href="https://simpelke.be/"
        ></ProjectCard>
        <ProjectCard
          title="BC Detailing"
          image={bcdetailing}
          href="https://bcdetailing.be"
        ></ProjectCard>
        <ProjectCard
          title="Waaiburg"
          image={waaiburg}
          href="https://dewaaiburgapp.eu/"
        ></ProjectCard>
        <ProjectCard
          title="Dartsfederatie Kempen"
          image={dfk}
          href="https://dartsfederatiekempen.be"
        ></ProjectCard>
      </div>
    </main>
  );
};

export default ProjectsPage;
