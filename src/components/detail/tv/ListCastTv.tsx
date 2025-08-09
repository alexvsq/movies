import { getCastCrewTv } from "@/api/tv/detail";
import Image from "next/image";
import { cutLargeText } from "@/lib/cutLargeText";
import { ImageOff } from "lucide-react";

const baseUrlImage = process.env.BASE_URL_IMAGE;

export default async function ListCast({ idMovie }: { idMovie: string }) {
  try {
    const dataCastCrew = await getCastCrewTv(Number(idMovie));

    const castActing = dataCastCrew.cast
      .filter((person) => person.known_for_department == "Acting")
      .map((person) => ({
        ...person,
        profile_path: person.profile_path
          ? baseUrlImage + "p/w200" + person.profile_path
          : null,
      }));

    return (
      <section className="py-4">
        <h2 className="text-xl font-semibold text-white">Cast</h2>

        <div className="flex gap-4 w-full overflow-x-scroll pb-1 pt-3 scrollbar-hidden-custom ">
          {castActing.map((person, index) => (
            <article key={index} className="shrink-0 max-w-[128px]">
              {person.profile_path ? (
                <Image
                  src={person.profile_path}
                  alt={person.name}
                  width={128}
                  height={200}
                  className="rounded-lg"
                />
              ) : (
                <div className="w-[128px] h-[192px] bg-white/5 rounded-lg flex items-center justify-center">
                  <ImageOff />
                </div>
              )}

              <footer className="text-center my-1">
                <p className="text-sm font-medium">
                  {cutLargeText(person.name, 15)}
                </p>
                <p className="text-text-secondary text-xs">
                  {person.character}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    return <div>Something went wrong</div>;
  }
}
