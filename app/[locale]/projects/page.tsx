import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

import waaiburg from "@/public/images/waaiburgdashboard.png";
import dfk from "@/public/images/dfkteams.png";
import simpelke from "@/public/images/simpelke.png";
import bcdetailing from "@/public/images/bcdetailing.png";
import rttf from "@/public/images/rttf.jpg";
import busma from "@/public/images/newbusma.png";
import netropolix from "@/public/images/netropolix.png";
import togaether from "@/public/images/togaether.png";
import internship from "@/public/images/internship.png";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: 'Projects - Bryan Deckers',
}

const ProjectsPage = () => {
  const t = useTranslations('ProjectPage');

  return (
    <main className="container px-10 lg:px-5  mt-40">
      <PageHeader title={t('projects')} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        <ProjectCard
          title="Internship project - Make it fly branded Doodle"
          image={internship}
          tags={["DESIGN", "DEVELOPMENT"]}
          description="A webapplication to simplify finding a timeslot that fits everyone"
          readMoreLink="/projects/internship"
        ></ProjectCard>
        <ProjectCard
          title="Demo Fabric - Togaether"
          image={togaether}
          tags={["DEVELOPMENT"]}
          description=""
          readMoreLink="/projects/togaether"
        ></ProjectCard>
        <ProjectCard
          title="BPMN - Netropolix"
          image={netropolix}
          tags={["DEVELOPMENT"]}
          description=""
          readMoreLink="/projects/bpmn"
        ></ProjectCard>
        <ProjectCard
          title="Busma"
          image={busma}
          tags={["DESIGN", "DEVELOPMENT"]}
          description="A platform that combines all the needs in order to manage events smoothly."
          readMoreLink="/projects/busma"
          href="https://busma.be/"
        ></ProjectCard>
        <ProjectCard
          title="Race to the future"
          image={rttf}
          tags={["AI", "DEVELOPMENT", "IOT"]}
          description="A fully autonomous car that can drive around a track and avoid obstacles. It uses a camera in combination with a trained AI model."
          readMoreLink="/projects/racetothefuture"
        ></ProjectCard>
        <ProjectCard
          title="'t Simpelke"
          image={simpelke}
          href="https://simpelke.be/"
          readMoreLink="/projects/simpelke"
          tags={["DESIGN", "DEVELOPMENT"]}
          description="A website for a local restaurant, making a nice menu and a way to order sandwiches online."
        ></ProjectCard>
        <ProjectCard
          title="BC Detailing"
          image={bcdetailing}
          href="https://bcdetailing.be"
          readMoreLink="/projects/bcdetailing"
          tags={["DESIGN", "DEVELOPMENT"]}
          description="A website for a mobile car detailing company, with an interactive booking system with a calendar."
        ></ProjectCard>
        <ProjectCard
          title="Waaiburg"
          image={waaiburg}
          href="https://dewaaiburgapp.eu/"
          readMoreLink="/projects/waaiburg"
          tags={["DESIGN", "DEVELOPMENT"]}
          description="A dashboard for a care home, with a lot of features to make the work of the employees easier."
        ></ProjectCard>
        <ProjectCard
          title="Dartsfederatie Kempen"
          image={dfk}
          href="https://dartsfederatiekempen.be"
          readMoreLink="/projects/dartsfederatiekempen"
          tags={["DESIGN", "DEVELOPMENT"]}
          description="A webapplication for a darts federation, digitalizing the competition and making it easier to manage."
        ></ProjectCard>
      </div>
    </main>
  );
};

export default ProjectsPage;
