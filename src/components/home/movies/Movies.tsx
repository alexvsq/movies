import { Clapperboard } from "lucide-react";
import ButtonSecondary from "@/components/shared/ButtonSecondary";
import Link from "next/link";
import { Suspense } from "react";
import MoviesContent from "./MoviesContent";

export default function Movies() {
  return (
    <section className="">
      <header className="flex justify-between py-2 container-dynamic">
        <div className="flex items-center gap-2">
          <Clapperboard />
          <h3 className="text-xl">Movies</h3>
        </div>

        <Link href="/movies">
          <ButtonSecondary title="View More" />
        </Link>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <MoviesContent />
      </Suspense>
    </section>
  );
}
