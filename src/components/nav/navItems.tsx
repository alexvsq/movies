"use client";
import { usePathname } from "next/navigation";
import { Tv, Clapperboard, House } from "lucide-react";

export default function navItems() {
  const pathname = usePathname();

  const navButtons = [
    {
      name: "Home",
      href: "/",
      icon: <House />,
    },
    {
      name: "Movies",
      href: "/movies",
      icon: <Clapperboard />,
    },
    {
      name: "Series",
      href: "/series",
      icon: <Tv />,
    },
  ];

  return (
    <ul className="flex items-center gap-4 md:gap-16 text-text-secondary">
      {navButtons.map((navButton, index) => {
        return (
          <a
            key={index}
            href={navButton.href}
            className={`hover:text-white ${
              pathname == navButton.href
                ? "underline underline-offset-8 text-white"
                : ""
            }`}
          >
            <li className="hidden md:block">{navButton.name}</li>
            <li className="md:hidden">{navButton.icon}</li>
          </a>
        );
      })}
    </ul>
  );
}
