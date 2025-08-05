import TvCard from "@/components/shared/CardTv";
import { discoverTv } from "@/api/tv/discover";

const baseUrlImage = process.env.BASE_URL_IMAGE || "";

export default async function content({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  try {
    const page = Number((await searchParams).page) || 1;
    const DATA_TV = await discoverTv(page);

    const dataWithImages = DATA_TV.results.map((movie) => ({
      ...movie,
      backdrop_path: baseUrlImage + "p/original" + movie.backdrop_path,
      poster_path: baseUrlImage + "p/w500" + movie.poster_path,
    }));

    return (
      <div className="grid grid-cols-4 gap-4">
        {dataWithImages.map((movie, index) => (
          <TvCard key={index} item={movie} />
        ))}
      </div>
    );
  } catch (error) {
    return <div>Something went wrong</div>;
  }
}
