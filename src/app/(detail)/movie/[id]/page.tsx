import { Suspense } from "react";
import ContentDetailMovie from "@/components/detail/movies/ContentDetailMovie";
import { SkeletonDetailContent } from "@/components/ui/skeletons";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="w-full">
      <Suspense fallback={<SkeletonDetailContent />}>
        <ContentDetailMovie idMovie={id} />
      </Suspense>
    </div>
  );
}
