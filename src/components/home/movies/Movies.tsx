import { Clapperboard } from "lucide-react";
import DATA_FAKE from "@/data/DATA_MOVIES.json";
import CarouselItems from "@/components/shared/CarouselMovies";
import ButtonSecondary from "@/components/shared/ButtonSecondary";
import Link from "next/link";

const baseUrlImage = process.env.BASE_URL_IMAGE || "";

export default function Movies() {
  const dataWithImages = DATA_FAKE.results.map((movie, index) => ({
    ...movie,
    backdrop_path: baseUrlImage + "p/original" + movie.backdrop_path,
    poster_path: baseUrlImage + "p/w500" + movie.poster_path,
  }));

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

      <CarouselItems items={dataWithImages} />
    </section>
  );
}
