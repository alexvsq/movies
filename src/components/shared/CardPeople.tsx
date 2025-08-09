import { PeopleType } from "@/types/people";
import Link from "next/link";
import { cutLargeText } from "@/lib/cutLargeText";
import Image from "next/image";
import { ImageOff } from "lucide-react";

export default function CardPeople({ item }: { item: PeopleType }) {
  return (
    <Link href={{ pathname: "/" }} className="w-full max-w-[200px]">
      <div className="w-full h-[300px] rounded-lg overflow-hidden group cursor-pointer  hover:-translate-y-2 transition">
        {item.profile_path ? (
          <Image
            src={item.profile_path}
            alt={item.name}
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
      <p className="text-center my-2">{cutLargeText(item.name, 18)}</p>
    </Link>
  );
}
