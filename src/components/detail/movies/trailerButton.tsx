"use client";
import { List, Heart, Bookmark, Play } from "lucide-react";
import { MovieDetailType } from "@/types/movie";
import { useFrameIsOpenStore } from "@/store/framerYoutubeStore";

export default function accountButtons({ movie }: { movie: MovieDetailType }) {
  const { isOpen, setIsOpen } = useFrameIsOpenStore();

  const buttons = [
    {
      name: "Watchlist",
      icon: <List fill="currentColor" className="w-5" />,
    },
    {
      name: "Favorites",
      icon: <Heart fill="currentColor" className="w-5" />,
    },
    {
      name: "History",
      icon: <Bookmark fill="currentColor" className="w-5" />,
    },
  ];

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="bg-primary rounded-full  h-10 w-fit gap-2 flex items-center justify-center text-black px-4"
      >
        <Play fill="currentColor" className="w-5" />
        <p>Watch Trailer</p>
      </button>
      {/* <article className="flex gap-4 items-center">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="bg-primary rounded-full w-10 h-10 flex items-center justify-center text-black"
          >
            {button.icon}
          </button>
        ))}
      </article> */}
    </>
  );
}
