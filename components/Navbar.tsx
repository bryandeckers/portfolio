"use client"
import { FunctionComponent, useState } from "react";
import { Link } from '@/i18n/routing';
import NavItem from "./NavItem";
import Image from "next/image";
import logo from "@/public/images/bd-logo-black.png";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

const Navbar: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const t = useTranslations('Navbar');

  return (
    <header className="mt-5">
      <div className="container px-10 lg:px-0 relative z-10">
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
              <NavItem link="/" text={t('home')} />
              <NavItem link="/projects/internship" text={t('internship')} />
              <NavItem link="/about" text={t('about')} />
              <NavItem link="/projects" text={t('projects')} />
              <NavItem link="/contact" text={t('contact')} />
            </ul>
          </nav>
        </div>
        {isOpen && (
          <nav className="fixed inset-0 bg-white bg-opacity-90 text-gray-900 transition-transform duration-300 transform">
            <div className="container flex justify-center items-center h-full">
              <ul className="flex flex-col items-center gap-5 text-xl">
                <NavItem link="/" text={t('home')} onClick={toggleMenu} />
                <NavItem link="/projects/internship" text={t('internship')} onClick={toggleMenu} />
                <NavItem link="/about" text={t('about')} onClick={toggleMenu} />
                <NavItem
                  link="/projects"
                  text={t('projects')}
                  onClick={toggleMenu}
                />
                <NavItem link="/contact" text={t('contact')} onClick={toggleMenu} />
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
