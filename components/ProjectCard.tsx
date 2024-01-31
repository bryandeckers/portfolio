"use client";
import { FunctionComponent } from "react";

import { Icon } from "@iconify/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardData = {
  title: string;
  image: StaticImageData;
  href?: string;
};

const ProjectCard: FunctionComponent<ProjectCardData> = ({
  title,
  image,
  href,
}) => {
  return (
    <div className="flex flex-col border rounded-xl drop-shadow-md p-10">
      {/* project image */}
      <div className="">
        <Image src={image} alt="" className="rounded-lg" />
      </div>
      <div className="flex items-center justify-between mt-10">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center">
          <Link
            href={href ? href : ""}
            className=""
            target="_blank"
            rel="noopener"
          >
            <Icon
              icon="fa6-solid:arrow-up-right-from-square"
              className="text-xl"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <Link
          href={`/projects/` + title.toLowerCase().replaceAll(" ", "")}
          className="mt-5 px-4 py-2 rounded-md bg-customblack text-white w-fit"
        >
          Tell me more!
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
