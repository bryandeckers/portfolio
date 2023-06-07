import Link from "next/link";
import { FunctionComponent } from "react";
import NavItem from "./NavItem";
import Image from "next/image";
import logo from '../public/images/bd-logo-black.png';

const Navbar: FunctionComponent = () => {
  return (
    <header className="mt-5">
      <div className="container flex justify-between items-center font-bold w-[calc(100%-100px)]">
        <Link href="/" className="text-xl w-20">
          <Image src={logo} alt="Logo" />
        </Link>
        <nav>
          <ul className="flex items-center gap-5 lg:gap-10 text-xl">
            <NavItem link="/" text="Home" />
            <NavItem link="/about" text="About" />
            <NavItem link="/projects" text="Projects" />
            <NavItem link="/contact" text="Contact" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
