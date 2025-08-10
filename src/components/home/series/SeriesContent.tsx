import { getListSeries } from "@/api/tv/list";
import CarouselTv from "@/components/shared/CarouselTv";

const baseUrlImage = process.env.BASE_URL_IMAGE || "";

export default async function SeriesContent() {
  const LIST_SERIES = await getListSeries();

  const dataWithImages = LIST_SERIES.results.map((serie, index) => ({
    ...serie,
    backdrop_path: baseUrlImage + "p/original" + serie.backdrop_path,
    poster_path: baseUrlImage + "p/w500" + serie.poster_path,
  }));

  return <CarouselTv items={dataWithImages} />;
}
