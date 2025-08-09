import GenreContent from "./genresContent";
import { getGenresMovies } from "@/api/movies/genres";
import { getGenresTv } from "@/api/tv/genres";

export default async function Genre() {
  const DATA_GENRES_MOVIES = await getGenresMovies();
  const DATA_GENRES_TV = await getGenresTv();

  return (
    <section className="my-2 flex flex-col gap-2">
      <p className="text-white">Genres</p>
      <GenreContent
        genresMovies={DATA_GENRES_MOVIES}
        genresTv={DATA_GENRES_TV}
      />
    </section>
  );
}
