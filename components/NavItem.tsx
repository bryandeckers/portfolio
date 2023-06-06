import Link from "next/link";
import { FunctionComponent } from "react";

type NavItemData = {
  link: string;
  text: string;
};

const NavItem: FunctionComponent<NavItemData> = ({ link, text }) => {
  return (
    <li className="text-xl cursor-pointer font-semibold hover:text-blue-700">
      <Link href={link}>{text}</Link>
    </li>
  );
};

export default NavItem;
