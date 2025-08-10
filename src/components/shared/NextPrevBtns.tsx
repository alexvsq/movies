import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NextPrevBtns({
  next,
  prev,
}: {
  next: () => void;
  prev: () => void;
}) {
  return (
    <div className="absolute z-30 top-[40%] -translate-y-[40%] w-full">
      <div className="container-dynamic relative">
        <button
          className="embla__prev bg-white/10 rounded-full w-10 aspect-square flex justify-center items-center  left-0 absolute"
          onClick={prev}
        >
          <ChevronLeft size={40} className="cursor-pointer" />
        </button>
        <button
          className="embla__next bg-white/10 rounded-full w-10 aspect-square flex justify-center items-center  right-0 absolute"
          onClick={next}
        >
          <ChevronRight size={40} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
