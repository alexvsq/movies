import HeroMovie from "@/components/home/heroMovie/Hero";
import Separator from "@/components/ui/Separator";
import Movies from "@/components/home/movies/Movies";
import Series from "@/components/home/series/Series";
import People from "@/components/home/people/People";

export default function Home() {
  return (
    <div className="">
      <HeroMovie />

      <Separator />

      <Movies />

      <Separator />

      <Series />

      <Separator />

      <People />
    </div>
  );
}
