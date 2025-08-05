"use client";
import { ResponseTrendingType } from "@/types/trending";
import { Play, Star } from "lucide-react";
import { useState } from "react";
import { cutLargeText } from "@/lib/cutLargeText";
import Link from "next/link";

export default function ContentTrending({
  data,
}: {
  data: ResponseTrendingType;
}) {
  const [indexCurrentItem, setIndexCurrentItem] = useState(0);

  const CURRENT_ITEM = data.results[indexCurrentItem];

  const linkTo =
    CURRENT_ITEM.media_type == "movie"
      ? "/movie"
      : CURRENT_ITEM.media_type == "tv"
      ? "/tv"
      : "";

  return (
    <section className="h-[750px] w-full relative">
      <img
        src={CURRENT_ITEM.backdrop_path}
        alt="movie"
        className="h-full w-full object-cover object-center absolute -z-10 image-gradient-transparent "
      />

      <div className="container-dynamic h-full flex flex-col justify-center ">
        <header className="max-w-[470px] flex flex-col gap-3 min-h-[180px]">
          <h2 className=" text-5xl font-semibold">{CURRENT_ITEM.title}</h2>
          <div className="flex gap-2 items-center text-sm">
            <div className="bg-primary px-2 rounded">
              <Star fill="black" stroke="black" className="w-3" />
            </div>
            <p>
              {CURRENT_ITEM.vote_average} ({CURRENT_ITEM.vote_count}){" "}
            </p>
            <p>•</p>
            <p className="text-text-secondary">{CURRENT_ITEM.release_date}</p>
          </div>
          <p>{cutLargeText(CURRENT_ITEM.overview, 170)}</p>
        </header>

        <footer className="flex my-5 gap-4">
          <Link href={linkTo + `/${CURRENT_ITEM.id}`}>
            <button className="flex items-center gap-2 border border-white/20 text-black py-2 px-4 rounded-lg min-w-40 justify-center hover:bg-white/20 hover:-translate-y-1 transition cursor-pointer">
              <p className="font-medium text-white">Details</p>
            </button>
          </Link>
          <Link href={linkTo + `/${CURRENT_ITEM.id}`}>
            <button className="flex items-center gap-2 bg-primary text-black py-2 px-4 rounded-lg justify-center min-w-40 hover:-translate-y-1 transition cursor-pointer">
              <Play fill="currentColor" />
              <p className="font-medium">Watch Trailer</p>
            </button>
          </Link>
        </footer>

        <article className="w-[1300px]  absolute bottom-0 translate-y-1/2 ">
          <h3 className=" pb-5 font-medium">Trending</h3>

          <div className="w-[1300px] h-80 bg-[#C4C4C4]/10 backdrop-blur-xs rounded-3xl border border-white/20">
            <div className="flex justify-between w-full h-full p-4">
              {data.results.slice(0, 6).map((movie, index) => (
                <article
                  key={index}
                  onMouseOver={() => setIndexCurrentItem(index)}
                  className={`rounded-lg overflow-hidden cursor-pointer transition ${
                    index == indexCurrentItem
                      ? "scale-125 border-4 border-white/20"
                      : ""
                  }`}
                >
                  <img
                    src={movie.poster_path}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </article>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
