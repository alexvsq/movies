import { User } from "lucide-react";
import PeopleContent from "@/components/home/people/peopleContent";
import { Suspense } from "react";

export default function People() {
  return (
    <section className="">
      <header className="flex justify-between py-2 container-dynamic">
        <div className="flex items-center gap-2">
          <User />
          <h3 className="text-xl">People</h3>
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <PeopleContent />
      </Suspense>
    </section>
  );
}
