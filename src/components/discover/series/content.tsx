import TvCard from "@/components/shared/CardTv";
import { discoverTv } from "@/api/tv/discover";
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
    const DATA_TV = await discoverTv(filters);

    const dataWithImages = DATA_TV.results.map((serie) => ({
      ...serie,
      backdrop_path: serie.backdrop_path
        ? baseUrlImage + "p/original" + serie.backdrop_path
        : null,
      poster_path: serie.poster_path
        ? baseUrlImage + "p/w500" + serie.poster_path
        : null,
    }));

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dataWithImages.map((movie, index) => (
            <TvCard key={index} item={movie} />
          ))}
        </div>

        <Pagination
          page={DATA_TV.page}
          totalPages={DATA_TV.total_pages}
          totalResults={DATA_TV.total_results}
        />
      </>
    );
  } catch (error) {
    return <div>Something went wrong</div>;
  }
}
