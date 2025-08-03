import DATA_SERIES from "@/data/DATA_TV.json";
import SeriesTv from "@/components/shared/CardTv";

export default function page() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {DATA_SERIES.results.map((series, index) => (
        <SeriesTv key={index} item={series} />
      ))}
    </div>
  );
}
