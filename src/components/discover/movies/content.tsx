import MovieCard from "@/components/shared/CardMovie";
import { discoverMovies } from "@/api/movies/discover";
import { filtersType } from "@/types/filter";
import Pagination from "@/components/shared/Pagination";

const baseUrlImage = process.env.BASE_URL_IMAGE || "";

export default async function content({
  searchParams,
}: {
  searchParams: Promise<filtersType>;
}) {
  try {
    const filters = await searchParams;
    const DATA_MOVIES = await discoverMovies(filters);

    const dataWithImages = DATA_MOVIES.results.map((movie) => ({
      ...movie,
      backdrop_path: movie.backdrop_path
        ? baseUrlImage + "p/original" + movie.backdrop_path
        : null,
      poster_path: movie.poster_path
        ? baseUrlImage + "p/w500" + movie.poster_path
        : null,
    }));

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataWithImages.map((movie, index) => (
            <MovieCard key={index} item={movie} />
          ))}
        </div>
        <Pagination
          page={DATA_MOVIES.page}
          totalPages={DATA_MOVIES.total_pages}
          totalResults={DATA_MOVIES.total_results}
        />
      </>
    );
  } catch (error) {
    return <div>Something went wrong</div>;
  }
}
