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
import { useLocale, useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: 'Projects - Bryan Deckers',
}

const ProjectsPage = () => {
  const t = useTranslations('ProjectPage');
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
      title: "Demo Fabric - Togaether",
      image: togaether,
      tags: ["DEVELOPMENT"],
      description: "Test the latest Microsoft Fabric tool and demonstrate how data can be processed and visualized through an advanced pipeline that can be pitched to their clients.",
      readMoreLink: "/projects/togaether",
    },
    {
      title: "BPMN - Netropolix",
      image: netropolix,
      tags: ["DEVELOPMENT"],
      description: "Visualized the recruitment process by creating a detailed BPMN model, showcasing each step a candidate may go through.",
      readMoreLink: "/projects/bpmn",
    },
    {
      title: "Busma",
      image: busma,
      tags: ["DESIGN", "DEVELOPMENT"],
      description: "A platform that combines all the needs in order to manage events smoothly.",
      readMoreLink: "/projects/busma",
      href: "https://busma.be/",
    },
    {
      title: "Race to the future",
      image: rttf,
      tags: ["AI", "DEVELOPMENT", "IOT"],
      description:
        "A fully autonomous car that can drive around a track and avoid obstacles. It uses a camera in combination with a trained AI model.",
      readMoreLink: "/projects/racetothefuture",
    },
    {
      title: "'t Simpelke",
      image: simpelke,
      tags: ["DESIGN", "DEVELOPMENT"],
      description: "A website for a local restaurant, making a nice menu and a way to order sandwiches online.",
      readMoreLink: "/projects/simpelke",
      href: "https://simpelke.be/",
    },
    {
      title: "BC Detailing",
      image: bcdetailing,
      tags: ["DESIGN", "DEVELOPMENT"],
      description: "A website for a mobile car detailing company, with an interactive booking system with a calendar.",
      readMoreLink: "/projects/bcdetailing",
      href: "https://bcdetailing.be",
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
      title: "Demo Fabric - Togaether",
      image: togaether,
      tags: ["ONTWIKKELING"],
      description: "Nieuwste Microsoft Fabric-tool testen en demonstreren, waarmee ze hun klanten kunnen laten zien hoe data wordt verwerkt en gevisualiseerd via een geavanceerde pipeline.",
      readMoreLink: "/projects/togaether",
    },
    {
      title: "BPMN - Netropolix",
      image: netropolix,
      tags: ["ONTWIKKELING"],
      description: "Recruteringsproces gevisualiseerd door een gedetailleerd BPMN-model te maken, waarbij elke stap die een kandidaat door kan lopen wordt getoond.",
      readMoreLink: "/projects/bpmn",
    },
    {
      title: "Busma",
      image: busma,
      tags: ["DESIGN", "ONTWIKKELING"],
      description: "Een platform dat alles combineert om evenementen soepel te beheren.",
      readMoreLink: "/projects/busma",
      href: "https://busma.be/",
    },
    {
      title: "Race naar de toekomst",
      image: rttf,
      tags: ["AI", "ONTWIKKELING", "IOT"],
      description:
        "Een volledig autonome auto die over een circuit kan rijden en obstakels kan vermijden. Het gebruikt een camera in combinatie met een getraind AI-model.",
      readMoreLink: "/projects/racetothefuture",
    },
    {
      title: "'t Simpelke",
      image: simpelke,
      tags: ["DESIGN", "ONTWIKKELING"],
      description: "Een website voor een lokaal restaurant, met een mooi menu en een systeem om online broodjes te bestellen.",
      readMoreLink: "/projects/simpelke",
      href: "https://simpelke.be/",
    },
    {
      title: "BC Detailing",
      image: bcdetailing,
      tags: ["DESIGN", "ONTWIKKELING"],
      description:
        "Een website voor een mobiele autodetailingservice, met een interactief boekingssysteem met een kalender.",
      readMoreLink: "/projects/bcdetailing",
      href: "https://bcdetailing.be",
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
    <main className="container px-10 lg:px-5  mt-40">
      <PageHeader title={t('projects')} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
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
    </main>
  );
};

export default ProjectsPage;
