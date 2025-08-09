"use client";
import { useFrameIsOpenStore } from "@/store/framerYoutubeStore";
import { CircleX } from "lucide-react";

export default function frameYoutube({
  srcYoutubeKey,
}: {
  srcYoutubeKey?: string;
}) {
  const { isOpen, setIsOpen } = useFrameIsOpenStore();

  const closeFrame = () => {
    setIsOpen(false);
  };

  if (!isOpen || !srcYoutubeKey) {
    return null;
  }
  return (
    <div
      onClick={closeFrame}
      className="fixed z-10 inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    >
      <div className="h-[50%] w-[90%] md:h-[80%] md:w-[80%] relative">
        <button
          onClick={closeFrame}
          className="absolute bg-primary text-black rounded-full p-1 -top-5 -right-5 cursor-pointer"
        >
          <CircleX size={35} />
        </button>

        <iframe
          src={"https://www.youtube.com/embed/" + srcYoutubeKey}
          className="w-full h-full rounded-lg"
          title="Iframe Example"
        ></iframe>
      </div>
    </div>
  );
}
//https://www.youtube.com/embed/dQw4w9WgXcQ"
