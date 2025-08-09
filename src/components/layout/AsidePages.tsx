import Separator from "@/components/ui/Separator";
import SortBy from "./filters/sortBy";
import Genres from "./filters/genres";
import TimeRange from "./filters/timeRange";
import UserScore from "./filters/userScore";

export default async function AsidePages() {
  return (
    <aside className="md:col-span-1 fixed z-10 -bottom-2 md:-bottom-0 md:relative bg-bg-primary md:bg-white/5 rounded-xl p-4 h-fit min-h-40">
      <SortBy />

      <Separator />

      <Genres />

      <Separator />

      <UserScore />

      <Separator />

      <TimeRange />
    </aside>
  );
}
