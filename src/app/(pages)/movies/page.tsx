import DATA_MOVIES from "@/data/DATA_MOVIES.json";
import MovieCard from "@/components/shared/CardMovie";

export default function page() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {DATA_MOVIES.results.map((movie, index) => (
        <MovieCard key={index} item={movie} />
      ))}
    </div>
  );
}
