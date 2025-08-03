import { formatMinutesToHM } from '@/lib/formatHours'
import DETAIL_MOVIE from "@/data/DETAIL_MOVIE.json";
import Percentage from '@/components/ui/Percentage';
import AccountButtons from '@/components/detail/movies/AccountButtons'

const baseUrl = process.env.BASE_URL;

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    return (
        <div className="w-full">
            <header className=" w-full h-[720px] relative">
                <img
                    src={baseUrl + "p/original" + DETAIL_MOVIE.backdrop_path}
                    alt=""
                    className="h-full w-full object-cover object-center absolute -z-10 image-gradient-transparent "
                />
                <div className="container-dynamic flex items-center w-full h-full ">

                    <div className="grid grid-cols-4 h-[450px]">
                        <div className="col-span-1 h-full">
                            <img src={baseUrl + "p/original" + DETAIL_MOVIE.poster_path} alt="movie" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="col-span-3 h-full flex flex-col gap-3 justify-center px-10">

                            <article>
                                <Percentage percentage={DETAIL_MOVIE.vote_average * 10} />
                            </article>

                            <article>
                                <h2 className="text-3xl font-bold">{DETAIL_MOVIE.title} <span className="font-medium text-text-secondary">({DETAIL_MOVIE.release_date})</span></h2>
                                <p>{DETAIL_MOVIE.release_date} • {DETAIL_MOVIE.genres.map((genre, index) => <span className="mx-1" key={index}>{genre.name}</span>)} • {formatMinutesToHM(DETAIL_MOVIE.runtime)}</p>
                            </article>

                            <article>
                                <p className="text-text-secondary italic">{DETAIL_MOVIE.tagline}</p>
                                <p className="font-semibold text-xl">Overview</p>
                                <p>{DETAIL_MOVIE.overview}</p>
                            </article>

                            <AccountButtons movie={DETAIL_MOVIE} />

                            {
                                DETAIL_MOVIE.production_companies.map((company, index) =>
                                    <article key={index}>
                                        <p className="text-text-secondary">{company.name}</p>
                                    </article>
                                )
                            }

                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}
