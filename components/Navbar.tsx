"use client";
import {
  ChangeEvent,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  useTransition,
} from "react";
import { Link } from "@/i18n/routing";
import NavItem from "./NavItem";
import Image from "next/image";
import logo from "@/public/images/bd-logo-black.png";
import { Icon } from "@iconify/react";
import { useLocale, useTranslations } from "next-intl";
import { Locale, usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

const Navbar: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const t = useTranslations("Navbar");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !ulRef.current?.contains(event.target as Node) &&
        menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="mt-5">
      <div className="container px-10 lg:px-5 relative z-10">
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
            <ul className="flex items-center gap-5 lg:gap-10 text-xl whitespace-nowrap">
              <NavItem link="/" text={t("home")} />
              <NavItem link="/about" text={t("about")} />
              <NavItem link="/projects/internship" text={t("internship")} />
              <NavItem link="/projects" text={t("projects")} />
              <NavItem link="/contact" text={t("contact")} />
              <select
                className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                onChange={onSelectChange}
                onClick={closeMenu}
              >
                <option value="" disabled selected>
                  {locale === "nl" ? "Selecteer taal" : "Choose language"}
                </option>
                <option value="en">EN</option>
                <option value="nl">NL</option>
              </select>
            </ul>
          </nav>
        </div>
        {isOpen && (
          <nav
            ref={menuRef}
            className="fixed inset-0 bg-white bg-opacity-90 text-gray-900 transition-transform duration-300 transform"
          >
            <div className="container flex justify-center items-center h-full">
              <ul
                ref={ulRef}
                className="flex flex-col items-center gap-5 text-xl"
              >
                <NavItem link="/" text={t("home")} onClick={closeMenu} />
                <NavItem
                  link="/projects/internship"
                  text={t("internship")}
                  onClick={closeMenu}
                />
                <NavItem link="/about" text={t("about")} onClick={closeMenu} />
                <NavItem
                  link="/projects"
                  text={t("projects")}
                  onClick={closeMenu}
                />
                <NavItem
                  link="/contact"
                  text={t("contact")}
                  onClick={closeMenu}
                />
                <select
                  className="block w-full px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                  onChange={onSelectChange}
                >
                  <option value="" disabled selected>
                    {locale === "nl" ? "Selecteer taal" : "Choose language"}
                  </option>
                  <option value="en">EN</option>
                  <option value="nl">NL</option>
                </select>
              </ul>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
