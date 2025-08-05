import Separator from "@/components/ui/Separator";
import OrderBy from "./filters/sortBy";
import Genres from "./filters/Genres";
import TimeRange from "./filters/timeRange";
import UserScore from "./filters/userScore";

export default function AsidePages() {
  return (
    <aside className="col-span-1 bg-white/5 rounded-xl p-4 h-fit">
      <OrderBy />

      <Separator />

      <Genres />

      <Separator />

      <UserScore />

      <Separator />

      <TimeRange />
    </aside>
  );
}
