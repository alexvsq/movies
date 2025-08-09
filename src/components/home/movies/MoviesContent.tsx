import CarouselItems from "@/components/shared/CarouselMovies";
import { getListMovies } from "@/api/movies/list";

export default async function MoviesContent() {
  const LIST_MOVIES = await getListMovies();

  const dataWithImages = LIST_MOVIES.results.map((movie) => ({
    ...movie,
    backdrop_path: movie.backdrop_path
      ? process.env.BASE_URL_IMAGE + "p/original" + movie.backdrop_path
      : null,
    poster_path: movie.poster_path
      ? process.env.BASE_URL_IMAGE + "p/w500" + movie.poster_path
      : null,
  }));

  return <CarouselItems items={dataWithImages} />;
}
