import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NextPrevBtns({
  next,
  prev,
}: {
  next: () => void;
  prev: () => void;
}) {
  return (
    <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full">
      <div className="container-dynamic  w-full flex justify-between">
        <button
          className="embla__prev bg-white/10 rounded-full w-10 aspect-square flex justify-center items-center"
          onClick={prev}
        >
          <ChevronLeft size={40} className="cursor-pointer" />
        </button>
        <button
          className="embla__next bg-white/10 rounded-full w-10 aspect-square flex justify-center items-center"
          onClick={next}
        >
          <ChevronRight size={40} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
