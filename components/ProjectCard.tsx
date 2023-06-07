import { FunctionComponent } from "react";

import { Icon } from "@iconify/react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type ProjectCardData = {
  title: string;
  description: string;
  image: StaticImageData;
  href?: string;
  children?: any;
};

const ProjectCard: FunctionComponent<ProjectCardData> = ({
  title,
  description,
  image,
  href,
  children,
}) => {
  return (
    <div className="border rounded-xl drop-shadow-md">
      <div className="flex flex-col xl:flex-row items-center gap-10 p-10 drop-shadow-md">
        {/* project image */}
        <div className="w-full xl:w-1/2">
          <Image src={image} alt="" className="rounded-lg" />
        </div>
        <div className="flex flex-col w-full xl:w-1/2">
          <div className="flex items-center mb-5 justify-between">
            <h2 className="text-2xl font-semibold">{title}</h2>
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
          <p>{description}</p>
          <Link href="" className="mt-5 px-4 py-2 rounded-md bg-customblack text-white w-fit">Tell me more!</Link>
          <div className="flex justify-center gap-10 items-center mt-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
