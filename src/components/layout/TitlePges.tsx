"use client";
import { usePathname } from "next/navigation";
import { Clapperboard, Tv } from "lucide-react";

export default function TitlePges() {
  const pathname = usePathname();

  return (
    <header className="h-44 flex items-end py-10">
      <article className="flex items-center gap-2">
        {pathname.includes("/movies") ? (
          <>
            <Tv size={40} />
            <h1 className="text-4xl font-bold">Series</h1>
          </>
        ) : (
          <>
            <Clapperboard size={40} />
            <h1 className="text-4xl font-bold">Movies</h1>
          </>
        )}
      </article>
    </header>
  );
}
