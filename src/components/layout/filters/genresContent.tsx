"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GenresResponseType } from "@/types/movie";

export default function Genre({
  genresData,
}: {
  genresData: GenresResponseType;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [genresState, setGenresState] = useState<number[]>([]);

  const setGenresInState = (newGenreId: number) => {
    const isIn = genresState.includes(newGenreId);
    let newList = [newGenreId, ...genresState];
    if (isIn) {
      newList = genresState.filter((genre) => genre !== newGenreId);
    }
    setGenresState(newList);
  };

  const setGenereInParams = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (genresState.length == 0) {
      params.delete("genre");
      router.push(`${pathname}?${params.toString()}`);
      return;
    }
    if (genresState.length > 1) {
      params.set("genre", genresState.join(","));
    } else {
      params.set("genre", genresState[0].toString());
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    setGenereInParams();
  }, [genresState]);

  return (
    <div className="flex flex-wrap gap-2">
      {genresData.genres.map((genre, index) => (
        <button
          key={genre.id}
          onClick={() => {
            setGenresInState(genre.id);
          }}
          className={`text-sm px-2 py-1 rounded-full cursor-pointer transition ${
            genresState.includes(genre.id)
              ? "bg-primary text-black"
              : "bg-white/10 hover:bg-white/20"
          } `}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
