import ContentDetailMovie from "@/components/detail/movies/ContentDetailMovie";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <ContentDetailMovie params={params} />
      </Suspense>
    </div>
  );
}
