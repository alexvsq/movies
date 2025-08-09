import { Info, ImageOff } from "lucide-react";
import Image from "next/image";
import { formatMinutesToHM } from "@/lib/formatHours";
import Percentage from "@/components/ui/Percentage";
import { getDetailSerie, getVideosFromSerie } from "@/api/tv/detail";
import FrameVideoYoutube from "@/components/shared/frameVIdeoYoutube";
import ListCast from "@/components/detail/tv/ListCastTv";
import Recomendations from "@/components/detail/tv/RecomendationsTv";
import TrailerButton from "@/components/detail/tv/TrailerButton";

const baseUrlImage = process.env.BASE_URL_IMAGE;

export default async function ContentTvDetail({
  idMovie,
}: {
  idMovie: string;
}) {
  const DETAIL_SERIE = await getDetailSerie(Number(idMovie));
  const VIDEOS_FROM_SERIE = await getVideosFromSerie(Number(idMovie));

  const videoTrailer = VIDEOS_FROM_SERIE.results.find((item) =>
    item.name.toLowerCase().includes("trailer")
  );

  return (
    <>
      <FrameVideoYoutube srcYoutubeKey={videoTrailer?.key} />

      {/* Encabezado */}
      <header className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[720px] relative">
        {DETAIL_SERIE.backdrop_path && (
          <Image
            src={baseUrlImage + "p/original" + DETAIL_SERIE.backdrop_path}
            alt=""
            className="h-full w-full object-cover object-center absolute -z-10 image-gradient-transparent"
            fill
          />
        )}

        <div className="container-dynamic flex items-center w-full h-full px-4 sm:px-6 lg:px-8">
          {/* Mobile */}
          <div className="block lg:hidden w-full">
            <div className="flex flex-col items-center text-center space-y-4 h-full justify-center">
              <div className="w-32 h-48 sm:w-40 sm:h-60 flex-shrink-0">
                {DETAIL_SERIE.poster_path ? (
                  <Image
                    src={baseUrlImage + "p/original" + DETAIL_SERIE.poster_path}
                    alt="serie"
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                    width={128}
                    height={192}
                  />
                ) : (
                  <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
                    <ImageOff />
                  </div>
                )}
              </div>

              <div className="space-y-3 max-w-md relative">
                <article className="absolute right-0 -top-16 md:relative">
                  <Percentage percentage={DETAIL_SERIE.vote_average * 10} />
                </article>

                <article>
                  <h2 className="text-xl sm:text-2xl font-bold">
                    {DETAIL_SERIE.name}
                  </h2>
                  <p className="text-sm sm:text-base font-medium text-text-secondary">
                    ({DETAIL_SERIE.first_air_date})
                  </p>
                  <p className="text-xs sm:text-sm mt-2">
                    {DETAIL_SERIE.first_air_date} •{" "}
                    {DETAIL_SERIE.genres.slice(0, 2).map((genre, index) => (
                      <span className="mx-1" key={index}>
                        {genre.name}
                      </span>
                    ))}{" "}
                    •{" "}
                    {DETAIL_SERIE.episode_run_time?.length
                      ? formatMinutesToHM(DETAIL_SERIE.episode_run_time[0])
                      : "—"}
                  </p>
                </article>

                <TrailerButton serieData={DETAIL_SERIE} />
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid lg:grid-cols-4 h-[450px] w-full">
            <div className="col-span-1 h-full">
              {DETAIL_SERIE.poster_path ? (
                <Image
                  src={baseUrlImage + "p/original" + DETAIL_SERIE.poster_path}
                  alt="serie"
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
                <Percentage percentage={DETAIL_SERIE.vote_average * 10} />
              </article>
              <article>
                <h2 className="text-3xl font-bold">
                  {DETAIL_SERIE.name}{" "}
                  <span className="font-medium text-text-secondary text-xl">
                    ({DETAIL_SERIE.first_air_date})
                  </span>
                </h2>
                <p>
                  {DETAIL_SERIE.first_air_date} •{" "}
                  {DETAIL_SERIE.genres.map((genre, index) => (
                    <span className="mx-1" key={index}>
                      {genre.name}
                    </span>
                  ))}{" "}
                  •{" "}
                  {DETAIL_SERIE.episode_run_time?.length
                    ? formatMinutesToHM(DETAIL_SERIE.episode_run_time[0])
                    : "—"}
                </p>
              </article>
              <article>
                {DETAIL_SERIE.tagline && (
                  <p className="text-text-secondary italic">
                    {DETAIL_SERIE.tagline}
                  </p>
                )}
                <p className="font-semibold text-xl">Overview</p>
                <p>{DETAIL_SERIE.overview}</p>
              </article>

              <TrailerButton serieData={DETAIL_SERIE} />
            </div>
          </div>
        </div>
      </header>

      {/* Overview mobile */}
      <div className="block lg:hidden container-dynamic px-4 py-6">
        <article className="space-y-3">
          {DETAIL_SERIE.tagline && (
            <p className="text-text-secondary italic text-sm">
              {DETAIL_SERIE.tagline}
            </p>
          )}
          <div>
            <p className="font-semibold text-lg mb-2">Overview</p>
            <p className="text-sm leading-relaxed">{DETAIL_SERIE.overview}</p>
          </div>
        </article>
      </div>

      {/* Footer */}
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
                  {DETAIL_SERIE.status}
                </p>
              </article>

              <article>
                <p className="font-semibold">Original Language</p>
                <p className="text-text-secondary text-sm">
                  {DETAIL_SERIE.original_language}
                </p>
              </article>

              <article>
                <p className="font-semibold">Seasons</p>
                <p className="text-text-secondary text-sm">
                  {DETAIL_SERIE.number_of_seasons}
                </p>
              </article>

              <article>
                <p className="font-semibold">Episodes</p>
                <p className="text-text-secondary text-sm">
                  {DETAIL_SERIE.number_of_episodes}
                </p>
              </article>
            </div>

            {DETAIL_SERIE.production_companies.length > 0 && (
              <div className="mt-4 pt-4 border-t">
                <p className="font-semibold mb-2">Production Companies</p>
                <div className="flex flex-wrap gap-2">
                  {DETAIL_SERIE.production_companies.map((company, index) => (
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
                <p className="text-text-secondary">{DETAIL_SERIE.status}</p>
              </article>

              <article>
                <p className="font-semibold text-lg">Original Language</p>
                <p className="text-text-secondary">
                  {DETAIL_SERIE.original_language}
                </p>
              </article>

              <article>
                <p className="font-semibold text-lg">Seasons</p>
                <p className="text-text-secondary">
                  {DETAIL_SERIE.number_of_seasons}
                </p>
              </article>

              <article>
                <p className="font-semibold text-lg">Episodes</p>
                <p className="text-text-secondary">
                  {DETAIL_SERIE.number_of_episodes}
                </p>
              </article>
            </div>

            {/* Production companies desktop */}
            {DETAIL_SERIE.production_companies.length > 0 && (
              <div className="mt-6 pt-4 border-t">
                <p className="font-semibold mb-2">Production</p>
                <div className="space-y-1">
                  {DETAIL_SERIE.production_companies.map((company, index) => (
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
