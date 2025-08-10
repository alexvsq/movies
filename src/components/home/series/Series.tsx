import { Tv } from "lucide-react";
import ButtonSecondary from "@/components/shared/ButtonSecondary";
import Link from "next/link";
import SeriesContent from "./SeriesContent";

export default function Series() {
  return (
    <section className="">
      <header className="flex justify-between py-2 container-dynamic">
        <div className="flex items-center gap-2">
          <Tv />
          <h3 className="text-xl">Series</h3>
        </div>

        <Link href="/series">
          <ButtonSecondary title="View More" />
        </Link>
      </header>

      <SeriesContent />
    </section>
  );
}
