import { Suspense } from "react";
import TvContent from "@/components/discover/series/content";

export default function Page({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TvContent searchParams={searchParams} />
    </Suspense>
  );
}
