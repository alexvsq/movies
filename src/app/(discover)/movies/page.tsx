import { Suspense } from "react";
import MoviesContent from "@/components/discover/movies/content";
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
    DATA_MOVIES.with_runtime_lte;

  return (
    <Suspense key={KEY} fallback={<div>Loading...</div>}>
      <MoviesContent searchParams={searchParams} />
    </Suspense>
  );
}
