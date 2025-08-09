import { getRecomendationsTv } from "@/api/tv/detail";
import { cutLargeText } from "@/lib/cutLargeText";
import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";

const baseUrlImage = process.env.BASE_URL_IMAGE;

export default async function RecomendationsTv({
  idMovie,
}: {
  idMovie: string;
}) {
  const dataRecomendations = await getRecomendationsTv(Number(idMovie));

  const recomendations = dataRecomendations.results.map((movie) => ({
    ...movie,
    backdrop_path: movie.backdrop_path
      ? baseUrlImage + "p/w500" + movie.backdrop_path
      : null,
  }));

  return (
    <section className="py-4">
      <h2 className="text-xl font-semibold text-white">Recomendations</h2>
      <div className="flex gap-4 w-full overflow-x-scroll py-3 scrollbar-hidden-custom ">
        {recomendations.map((movie, index) => (
          <Link
            key={index}
            href={`/${movie.media_type}/${movie.id}`}
            className="shrink-0 max-w-[270px]"
          >
            {movie.backdrop_path ? (
              <Image
                src={movie.backdrop_path}
                alt={movie.name}
                width={270}
                height={140}
                className="rounded-lg"
              />
            ) : (
              <div className=" min-w-[270px] h-40 bg-white/5 rounded-lg flex items-center justify-center">
                <ImageOff />
              </div>
            )}
            <p className="text-sm font-medium text-center mt-2">
              {cutLargeText(movie.original_name, 28)}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
