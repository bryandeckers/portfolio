import { Link } from '@/i18n/routing';
import { FunctionComponent } from "react";

type NavItemData = {
  link: string;
  text: string;
  onClick?: () => void;
};

const NavItem: FunctionComponent<NavItemData> = ({ link, text, onClick }) => {
  return (
    <li className="text-xl cursor-pointer font-semibold hover:text-blue-700">
      <Link href={link} onClick={onClick}>{text}</Link>
    </li>
  );
};

export default NavItem;
