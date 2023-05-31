import Image from "next/image";
import Link from "next/link";

import busma from "../public/images/busma.png";
import { NextPage } from "next";

const ProjectsPage: NextPage = () => {
  return (
    <main className="">
      <h1 className="text-3xl font-semibold mb-20">Projects</h1>
      <div className="flex flex-col md:flex-row gap-10 md:gap-40">
        <div className="w-full md:w-2/3">
          {/* sizing on div */}
          <Image src={busma} alt="busma" />
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-medium mb-5">Project 1</h2>
            <p>project beschrijving</p>
          </div>
          <div>
            <p className="mb-10">Technische details</p>
            <Link href="" className="mt-auto ">
              Link naar project 1
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
