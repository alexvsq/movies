import GenreContent from "./genresContent";
import { getGenresMovies } from "@/api/movies/genres";

export default async function Genre() {
  const DATA_GENRES = await getGenresMovies();

  return (
    <section className="my-2 flex flex-col gap-2">
      <p className="text-white">Genres</p>
      <GenreContent genresData={DATA_GENRES} />
    </section>
  );
}
