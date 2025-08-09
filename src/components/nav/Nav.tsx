import Logo from "@/components/shared/Logo";
import { Search } from "lucide-react";
import NavItems from "./navItems";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="w-full flex justify-center fixed z-20 nav-scroll-bg">
      <nav className="container-dynamic py-4 flex flex-col gap-4 md:flex-row items-center justify-between w-full">
        <Logo />

        <aside className="flex items-center gap-8">
          <NavItems />
          <div className="w-[1px] h-5 bg-white" />
          <Link href="/search">
            <Search />
          </Link>
        </aside>
      </nav>
    </div>
  );
}
