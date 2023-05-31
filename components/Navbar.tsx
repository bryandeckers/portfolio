import Link from "next/link";
import { Icon } from "@iconify/react";
import { FunctionComponent } from "react";

type NavbarData = {
  darkMode: boolean;
};

const Navbar: FunctionComponent<NavbarData> = (darkMode) => {
  return (
    <header className="bg-white dark:bg-gray-800 py-5 drop-shadow fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center font-semibold w-[calc(100%-100px)] text-black dark:text-gray-300">
        <Link href="/" className="text-xl">
          Bryan
        </Link>
        <nav>
          <ul className="flex items-center gap-5 lg:gap-10 text-lg">
            <li className="cursor-pointer hover:text-blue-700 dark:hover:text-gray-400">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-700 dark:hover:text-gray-400">
              <Link href="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-700 dark:hover:text-gray-400">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="cursor-pointer hover:text-blue-700 dark:hover:text-gray-400">
              <Link href="/contact">Contact</Link>
            </li>
            <Icon
              icon={darkMode ? "ic:baseline-dark-mode" : "ic:outline-dark-mode"}
            />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
