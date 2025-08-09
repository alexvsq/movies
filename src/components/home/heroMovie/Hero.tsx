import { getAllTrending } from "@/api/trending";
import ContentTrending from "./contentTrending";

export default async function HeroMovie() {
  const baseUrlImage = process.env.BASE_URL_IMAGE;
  if (!baseUrlImage) {
    throw new Error("BASE_URL_IMAGE is not defined in environment variables.");
  }

  let DATA_TRENDING = await getAllTrending();

  const data = {
    ...DATA_TRENDING,
    results: DATA_TRENDING.results.slice(0, 6).map((movie, index) => ({
      ...movie,
      backdrop_path: movie.backdrop_path
        ? baseUrlImage + "p/original" + movie.backdrop_path
        : "",
      poster_path: movie.poster_path
        ? baseUrlImage + "p/w500" + movie.poster_path
        : "",
    })),
  };

  return <ContentTrending data={data} />;
}
