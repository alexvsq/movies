import { Suspense } from "react";
import MoviesContent from "@/components/discover/movies/content";
import { filtersType } from "@/types/filter";
import { SkeletonCardGrid } from "@/components/ui/skeletons";

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
      <MoviesContent searchParams={searchParams} />
    </Suspense>
  );
}
