import { Suspense } from "react";
import TvContent from "@/components/discover/series/content";
import { SkeletonCardGrid } from "@/components/ui/skeletons";
import { filtersType } from "@/types/filter";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<filtersType>;
}) {
  const DATA_MOVIES = await searchParams;

  const KEY =
    DATA_MOVIES.sort_by ||
    DATA_MOVIES.genre ||
    DATA_MOVIES.with_runtime_gte ||
    DATA_MOVIES.with_runtime_lte ||
    DATA_MOVIES.vote_average_gte ||
    DATA_MOVIES.vote_average_lte ||
    DATA_MOVIES.page;

  return (
    <Suspense key={KEY} fallback={<SkeletonCardGrid />}>
      <TvContent searchParams={searchParams} />
    </Suspense>
  );
}
