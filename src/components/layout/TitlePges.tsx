"use client";
import { usePathname } from "next/navigation";
import { Clapperboard, Tv } from "lucide-react";
import { useFilterMenuIsOpenStore } from "@/store/filterMenuStore";
import { SlidersHorizontal } from "lucide-react";

export default function TitlePges() {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useFilterMenuIsOpenStore();

  return (
    <header className="h-36 flex items-end justify-between py-6">
      <article className="flex items-center gap-2">
        {pathname.includes("/movies") ? (
          <>
            <Clapperboard size={30} />
            <h1 className="text-2xl font-bold">Movies</h1>
          </>
        ) : (
          <>
            <Tv size={30} />
            <h1 className="text-2xl font-bold">Series</h1>
          </>
        )}
      </article>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="md:hidden"
      >
        <SlidersHorizontal />
      </button>
    </header>
  );
}
