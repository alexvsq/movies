import { Info, ImageOff } from "lucide-react";
import { formatMinutesToHM } from "@/lib/formatHours";
import Percentage from "@/components/ui/Percentage";
import TrailerButton from "@/components/detail/movies/trailerButton";
import { getDetailMovie } from "@/api/movies/detail";
import { getVideosFromMovie } from "@/api/movies/detail";
import FrameVideoYoutube from "@/components/shared/frameVIdeoYoutube";
import ListCast from "@/components/detail/movies/ListCast";
import Recomendations from "@/components/detail/movies/Recomendations";
import Image from "next/image";

const baseUrlImage = process.env.BASE_URL_IMAGE;

export default async function ContentDetailMovie({
  idMovie,
}: {
  idMovie: string;
}) {
  const DETAIL_MOVIE = await getDetailMovie(Number(idMovie));
  const VIDEOS_FROM_MOVIE = await getVideosFromMovie(Number(idMovie));

  const videTrailer = VIDEOS_FROM_MOVIE.results.find(
    (item) => item.name == "Official Trailer"
  );

  return (
    <>
      <FrameVideoYoutube srcYoutubeKey={videTrailer?.key} />
      {/* Mobile */}
      <header className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px] relative">
        <Image
          src={baseUrlImage + "p/original" + DETAIL_MOVIE.backdrop_path}
          alt=""
          className="h-full w-full object-cover object-center absolute -z-10 image-gradient-transparent"
          fill
        />
        <div className="container-dynamic flex items-center w-full h-full px-4 sm:px-6 lg:px-8">
          <div className="block lg:hidden w-full">
            <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
              <div className="w-32 h-48 sm:w-40 sm:h-60 flex-shrink-0">
                <Image
                  src={baseUrlImage + "p/original" + DETAIL_MOVIE.poster_path}
                  alt="movie"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  width={128}
                  height={192}
                />
              </div>

              <div className="space-y-3 max-w-md relative">
                <article className="absolute right-0 -top-16 md:relative">
                  <Percentage percentage={DETAIL_MOVIE.vote_average * 10} />
                </article>

                <article>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {DETAIL_MOVIE.title}
                  </h2>
                  <p className="text-sm sm:text-base font-medium text-text-secondary">
                    ({DETAIL_MOVIE.release_date})
                  </p>
                  <p className="text-xs sm:text-sm mt-2">
                    {DETAIL_MOVIE.release_date} •{" "}
                    {DETAIL_MOVIE.genres.slice(0, 2).map((genre, index) => (
                      <span className="mx-1" key={index}>
                        {genre.name}
                      </span>
                    ))}{" "}
                    • {formatMinutesToHM(DETAIL_MOVIE.runtime)}
                  </p>
                </article>

                <TrailerButton movie={DETAIL_MOVIE} />
              </div>
            </div>
          </div>
          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-4 h-[450px] w-full">
            <div className="col-span-1 h-full">
              {DETAIL_MOVIE.poster_path ? (
                <Image
                  src={baseUrlImage + "p/original" + DETAIL_MOVIE.poster_path}
                  alt="movie"
                  className="w-full h-full object-cover rounded-lg"
                  width={305}
                  height={450}
                />
              ) : (
                <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
                  <ImageOff />
                </div>
              )}
            </div>
            <div className="col-span-3 h-full flex flex-col gap-3 justify-center px-10">
              <article>
                <Percentage percentage={DETAIL_MOVIE.vote_average * 10} />
              </article>

              <article>
                <h2 className="text-3xl font-bold">
                  {DETAIL_MOVIE.title}{" "}
                  <span className="font-medium text-text-secondary text-xl">
                    ({DETAIL_MOVIE.release_date})
                  </span>
                </h2>
                <p>
                  {DETAIL_MOVIE.release_date} •{" "}
                  {DETAIL_MOVIE.genres.map((genre, index) => (
                    <span className="mx-1" key={index}>
                      {genre.name}
                    </span>
                  ))}{" "}
                  • {formatMinutesToHM(DETAIL_MOVIE.runtime)}
                </p>
              </article>

              <article>
                <p className="text-text-secondary italic">
                  {DETAIL_MOVIE.tagline}
                </p>
                <p className="font-semibold text-xl">Overview</p>
                <p>{DETAIL_MOVIE.overview}</p>
              </article>

              <TrailerButton movie={DETAIL_MOVIE} />
            </div>
          </div>
        </div>
      </header>

      <div className="block lg:hidden container-dynamic px-4 py-6">
        <article className="space-y-3">
          {DETAIL_MOVIE.tagline && (
            <p className="text-text-secondary italic text-sm">
              {DETAIL_MOVIE.tagline}
            </p>
          )}
          <div>
            <p className="font-semibold text-lg mb-2">Overview</p>
            <p className="text-sm leading-relaxed">{DETAIL_MOVIE.overview}</p>
          </div>
        </article>
      </div>

      <footer className="container-dynamic px-4 lg:px-8">
        <div className="block lg:hidden space-y-8">
          <aside className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl">
            <header className="text-primary text-lg font-medium flex gap-1 mb-4">
              <Info />
              <h3>About</h3>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <article>
                <p className="font-semibold">Status</p>
                <p className="text-text-secondary text-sm">
                  {DETAIL_MOVIE.status}
                </p>
              </article>

              <article>
                <p className="font-semibold">Original Language</p>
                <p className="text-text-secondary text-sm">
                  {DETAIL_MOVIE.original_language}
                </p>
              </article>

              {DETAIL_MOVIE.budget > 0 && (
                <article>
                  <p className="font-semibold">Budget</p>
                  <p className="text-text-secondary text-sm">
                    ${DETAIL_MOVIE.budget.toLocaleString()}
                  </p>
                </article>
              )}

              {DETAIL_MOVIE.revenue > 0 && (
                <article>
                  <p className="font-semibold">Revenue</p>
                  <p className="text-text-secondary text-sm">
                    ${DETAIL_MOVIE.revenue.toLocaleString()}
                  </p>
                </article>
              )}
            </div>

            {DETAIL_MOVIE.production_companies.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <p className="font-semibold mb-2">Production Companies</p>
                <div className="flex flex-wrap gap-2">
                  {DETAIL_MOVIE.production_companies.map((company, index) => (
                    <span
                      key={index}
                      className="text-text-secondary text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {company.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>

          <article>
            <ListCast idMovie={idMovie} />
            <Recomendations idMovie={idMovie} />
          </article>
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-10">
          <article className="col-span-3">
            <ListCast idMovie={idMovie} />
            <Recomendations idMovie={idMovie} />
          </article>
          <aside className="col-span-1 mt-10 p-4 rounded-xl h-fit">
            <header className="text-primary text-lg font-medium flex gap-1 my-2">
              <Info />
              <h3>About</h3>
            </header>

            <div className="space-y-4">
              <article>
                <p className="font-semibold text-lg">Status</p>
                <p className="text-text-secondary">{DETAIL_MOVIE.status}</p>
              </article>

              <article>
                <p className="font-semibold text-lg">Original Language</p>
                <p className="text-text-secondary">
                  {DETAIL_MOVIE.original_language}
                </p>
              </article>

              {DETAIL_MOVIE.budget > 0 && (
                <article>
                  <p className="font-semibold text-lg">Budget</p>
                  <p className="text-text-secondary">
                    ${DETAIL_MOVIE.budget.toLocaleString()}
                  </p>
                </article>
              )}

              {DETAIL_MOVIE.revenue > 0 && (
                <article>
                  <p className="font-semibold text-lg">Revenue</p>
                  <p className="text-text-secondary">
                    ${DETAIL_MOVIE.revenue.toLocaleString()}
                  </p>
                </article>
              )}
            </div>

            {/* Production companies desktop */}
            {DETAIL_MOVIE.production_companies.length > 0 && (
              <div className="mt-6 pt-4 border-t">
                <p className="font-semibold mb-2">Production</p>
                <div className="space-y-1">
                  {DETAIL_MOVIE.production_companies.map((company, index) => (
                    <p key={index} className="text-text-secondary text-sm">
                      {company.name}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </footer>
    </>
  );
}
