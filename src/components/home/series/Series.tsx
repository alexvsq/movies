import { Tv } from "lucide-react";
import DATA_FAKE from "@/data/DATA_TV.json";
import CarouselTv from "@/components/shared/CarouselTv";
import ButtonSecondary from "@/components/shared/ButtonSecondary";
import Link from "next/link";

const baseUrlImage = process.env.BASE_URL_IMAGE || "";

export default function Series() {
  const dataWithImages = DATA_FAKE.results.map((serie, index) => ({
    ...serie,
    backdrop_path: baseUrlImage + "p/original" + serie.backdrop_path,
    poster_path: baseUrlImage + "p/w500" + serie.poster_path,
  }));

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

      <CarouselTv items={dataWithImages} />
    </section>
  );
}
