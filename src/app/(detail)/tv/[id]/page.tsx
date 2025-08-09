import { Suspense } from "react";
import ContentTvDetail from "@/components/detail/tv/ContentTvDetail";
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
        <ContentTvDetail idMovie={id} />
      </Suspense>
    </div>
  );
}
