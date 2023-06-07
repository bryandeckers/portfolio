import { Icon } from "@iconify/react";
import Link from "next/link";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="bg-customblack py-10 text-white mt-auto w-full">
      <div className="container flex flex-col md:flex-row gap-10 md:gap-0 md:justify-between items-center">
        <p>Bryan Deckers &copy; {new Date().getFullYear()}</p>
        <div className="flex gap-5">
          <Link
            href="https://www.linkedin.com/in/bryandeckers/"
            target="_blank"
            rel="noopener"
          >
            <Icon icon="fa-brands:linkedin" className="text-2xl" />
          </Link>
          <Link
            href="https://github.com/bryandeckers"
            target="_blank"
            rel="noopener"
          >
            <Icon icon="fa-brands:github" className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
