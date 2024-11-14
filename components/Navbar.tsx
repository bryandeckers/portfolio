"use client"
import { FunctionComponent, useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import Image from "next/image";
import logo from "@/public/images/bd-logo-black.png";
import { Icon } from "@iconify/react";

const Navbar: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="mt-5">
      <div className="container relative z-10">
        <div className="flex justify-between items-center font-bold ">
          <Link href="/" className="text-xl w-20">
            <Image src={logo} alt="Logo" />
          </Link>
          <nav className="lg:hidden">
            <Icon
              icon="mdi:menu"
              className="text-3xl focus:outline-none bg-opacity-100"
              onClick={toggleMenu}
            />
          </nav>
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-5 lg:gap-10 text-xl">
              <NavItem link="/" text="Home" />
              <NavItem link="/projects/internship" text="Internship" />
              <NavItem link="/about" text="About" />
              <NavItem link="/projects" text="Projects" />
              <NavItem link="/contact" text="Contact" />
            </ul>
          </nav>
        </div>
        {isOpen && (
          <nav className="fixed inset-0 bg-white bg-opacity-90 text-gray-900 transition-transform duration-300 transform">
            <div className="container flex justify-center items-center h-full">
              <ul className="flex flex-col items-center gap-5 text-xl">
                <NavItem link="/" text="Home" onClick={toggleMenu} />
                <NavItem link="/projects/internship" text="Internship" onClick={toggleMenu} />
                <NavItem link="/about" text="About" onClick={toggleMenu} />
                <NavItem
                  link="/projects"
                  text="Projects"
                  onClick={toggleMenu}
                />
                <NavItem link="/contact" text="Contact" onClick={toggleMenu} />
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
