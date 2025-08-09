import CarouselPeople from "@/components/shared/CarouselPeople";
import { getPeople } from "@/api/people/people";

const baseUrlImage = process.env.BASE_URL_IMAGE || "";

export default async function peopleContent() {
  const DATA_PEOPLE = await getPeople();

  const dataWithImages = DATA_PEOPLE.results.map((people) => ({
    ...people,
    profile_path: people.profile_path
      ? baseUrlImage + "p/w500" + people.profile_path
      : null,
  }));

  return <CarouselPeople items={dataWithImages} />;
}
