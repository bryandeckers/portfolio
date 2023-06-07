import ProjectCard from "@/components/ProjectCard";
import { Icon } from "@iconify/react";
import { NextPage } from "next";
import Head from "next/head";

import waaiburg from "../public/images/waaiburgdashboard.png";
import dfk from "../public/images/dfkteams.png";

const ProjectsPage: NextPage = () => {
  return (
    <main className="container px-60 mt-20">
      <Head>
        <title>Bryan Deckers | Projects</title>
      </Head>
        <h2 className="text-4xl font-bold mb-20">Projects</h2>
        <div className="flex flex-col gap-20 mb-20">
          <ProjectCard
            title="Waaiburg"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis unde voluptas iusto nihil deserunt. Voluptate sunt perferendis quasi debitis voluptas ipsa ab modi quod at accusantium mollitia asperiores, qui quam?"
            image={waaiburg}
          >
            <Icon icon="devicon:tailwindcss" className="text-5xl" />
            <Icon icon="devicon:laravel" className="text-4xl" />
            <Icon icon="devicon:flutter" className="text-3xl" />
          </ProjectCard>
          <ProjectCard
            title="Dartsfederatie Kempen"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis unde voluptas iusto nihil deserunt. Voluptate sunt perferendis quasi debitis voluptas ipsa ab modi quod at accusantium mollitia asperiores, qui quam?"
            image={dfk}
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
