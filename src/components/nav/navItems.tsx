"use client";
import { usePathname } from "next/navigation";

export default function navItems() {
  const pathname = usePathname();

  const navButtons = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Movies",
      href: "/movies",
    },
    {
      name: "Series",
      href: "/series",
    },
  ];

  return (
    <ul className="flex items-center gap-16 text-text-secondary">
      {navButtons.map((navButton, index) => {
        return (
          <a key={index} href={navButton.href} className="">
            <li
              className={`hover:text-white ${
                pathname == navButton.href
                  ? "underline underline-offset-8 text-white"
                  : ""
              }`}
            >
              {navButton.name}
            </li>
          </a>
        );
      })}
    </ul>
  );
}
