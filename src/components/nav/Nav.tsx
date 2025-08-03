import Logo from "@/components/shared/Logo";
import { Search } from "lucide-react";
import NavItems from "./navItems";

export default function Nav() {
  return (
    <div className="w-full flex justify-center fixed z-10 nav-scroll-bg">
      <nav className="container-dynamic py-4 flex items-center justify-between w-full">
        <Logo />

        <aside className="flex items-center gap-8">
          <NavItems />
          <div className="w-[1px] h-5 bg-white" />
          <Search />
        </aside>
      </nav>
    </div>
  );
}
