import Link from "next/link";
import { Icon } from "@iconify/react";
import { FunctionComponent } from "react";
import NavItem from "./NavItem";

type NavbarData = {
  
};

const Navbar: FunctionComponent<NavbarData> = () => {
  return (
    <header className="bg-white w-full mt-10">
      <div className="container mx-auto flex justify-between items-center font-bold w-[calc(100%-100px)] text-black ">
        <Link href="/" className="text-xl">
          Bryan Deckers
        </Link>
        <nav>
          <ul className="flex items-center gap-5 lg:gap-10 text-xl">
            <NavItem link="/" text="Home" />
            <NavItem link="/about" text="About" />
            <NavItem link="/projects" text="Projects" />
            <NavItem link="/contact" text="Contact" />
            <Icon
              icon="ic:baseline-dark-mode"
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
