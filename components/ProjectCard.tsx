"use client";
import { FunctionComponent } from "react";

import { Icon } from "@iconify/react";
import Image, { StaticImageData } from "next/image";
import { Link } from '@/i18n/routing';
import { useTranslations } from "next-intl";

type ProjectCardData = {
  title: string;
  image: StaticImageData;
  readMoreLink?: string;
  tags: string[];
  description: string;
  href?: string;
};

const ProjectCard: FunctionComponent<ProjectCardData> = ({
  title,
  image,
  href,
  readMoreLink,
  tags,
  description,
}) => {
  const t = useTranslations('ProjectPage');

  return (
    <div className="flex flex-col border rounded-xl drop-shadow-md p-10 h-full">
      {/* project image */}
      <div className="h-48 relative">
        <Image src={image} alt="" className="rounded-lg object-cover" fill />
      </div>
      <div className="flex items-center justify-between mt-5">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {href && (
          <div className="flex items-center">
            <Link href={href} className="" target="_blank" rel="noopener">
              <Icon icon="fa6-solid:arrow-up-right-from-square" className="text-xl" />
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <p key={tag} className="text-gray-500 rounded-md">
            {tag}
            {tags.indexOf(tag) !== tags.length - 1 ? ", " : ""}
          </p>
        ))}
      </div>
      <p className="mt-5 flex-grow">{description}</p>
      {/* read more link */}
      {readMoreLink && (
        <div className="flex flex-col mt-auto">
          <Link
            href={readMoreLink}
            className="mt-5 px-4 py-2 rounded-md bg-customblack text-white w-fit"
          >
            {t('tellmemore')}
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
