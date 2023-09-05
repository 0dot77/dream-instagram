"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import HomeFillIcon from "./ui/icons/HomeFillIcon";
import HomeIcon from "./ui/icons/HomeIcon";
import SearchIcon from "./ui/icons/SearchIcon";
import SearchFillIcon from "./ui/icons/SearchFillIcon";
import NewIcon from "./ui/icons/NewIcon";
import NewFillIcon from "./ui/icons/NewFillIcon";
import ColorButton from "./ui/ColorButton";

const menu = [
  {
    href: "/",
    icon: <HomeIcon />,
    clickedIcon: <HomeFillIcon />,
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    clickedIcon: <SearchFillIcon />,
  },
  {
    href: "/new",
    icon: <NewIcon />,
    clickedIcon: <NewFillIcon />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center px-6">
      <Link href="/">
        <h1 className="text-3xl font-bold">Instagram</h1>
      </Link>
      <nav>
        <ul className="flex gap-4 items-center p-4">
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{pathname === item.href ? item.clickedIcon : item.icon}</Link>
            </li>
          ))}
          <ColorButton
            text="Sign In"
            onClick={() => {}}
          />
        </ul>
      </nav>
    </div>
  );
}
