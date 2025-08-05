import { TvType } from "@/types/series";
import { cutLargeText } from "@/lib/cutLargeText";
import { Star } from "lucide-react";
import Link from "next/link";

export default function CardItem({ item }: { item: TvType }) {
  const shortTitle = cutLargeText(item.name, 17);

  return (
    <Link
      href={{
        pathname: "/tv" + "/" + item.id,
      }}
      className="w-full max-w-[200px]"
    >
      <div className="w-full h-[300px] rounded-lg overflow-hidden group cursor-pointer  hover:-translate-y-2 transition">
        {item.poster_path ? (
          <img
            src={item.poster_path}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 "></div>
        )}
      </div>
      <p className="text-lg font-medium">{shortTitle}</p>
      <footer className="flex justify-between items-center text-sm">
        <p className="text-text-secondary">{item.first_air_date}</p>
        <div className="text-[#FFC504] flex gap-1 items-center">
          <Star fill="currentColor" className="w-3" />
          <p>{item.vote_average.toFixed(1)}</p>
        </div>
      </footer>
    </Link>
  );
}
