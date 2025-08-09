import { MovieType } from "@/types/movie";
import { cutLargeText } from "@/lib/cutLargeText";
import { Star, ImageOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface CardItemProps {
  item: MovieType;
}

export default function CardItem({ item }: CardItemProps) {
  const shortTitle = cutLargeText(item.title, 17);

  return (
    <Link
      href={{
        pathname: "/movie" + "/" + item.id,
      }}
      className="w-full max-w-[200px]"
    >
      <div className="w-full h-[300px] rounded-lg overflow-hidden group cursor-pointer  hover:-translate-y-2 transition">
        {item.poster_path ? (
          <Image
            src={item.poster_path}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
            width={200}
            height={300}
          />
        ) : (
          <div className="w-full h-full bg-white/5 rounded-lg flex items-center justify-center">
            <ImageOff />
          </div>
        )}
      </div>
      <p className="text-lg font-medium">{shortTitle}</p>
      <footer className="flex justify-between items-center text-sm">
        <p className="text-text-secondary">{item.release_date}</p>
        <div className="text-[#FFC504] flex gap-1 items-center">
          <Star fill="currentColor" className="w-3" />
          <p>{item.vote_average.toFixed(1)}</p>
        </div>
      </footer>
    </Link>
  );
}
