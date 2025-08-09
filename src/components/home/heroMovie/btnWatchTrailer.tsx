"use client";
import { Play } from "lucide-react";
import { useFrameIsOpenStore } from "@/store/framerYoutubeStore";

export default function btnWatchTrailer() {
  const { isOpen, setIsOpen } = useFrameIsOpenStore();

  return (
    <button
      onClick={() => {
        setIsOpen(true);
      }}
      className="flex items-center gap-2 bg-primary text-black py-2 px-4 rounded-lg justify-center min-w-40 hover:-translate-y-1 transition cursor-pointer"
    >
      <Play fill="currentColor" />
      <p className="font-medium">Watch Trailer</p>
    </button>
  );
}
