"use client";
import { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function userScore() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [timeRange, setTimeRange] = useState<[number, number]>([0, 10]);

  const setUserScoreInParamsDebounce = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (timeRange[0] === 0 && timeRange[1] === 10) {
      params.delete("vote_average_gte");
      params.delete("vote_average_lte");
    } else {
      params.set("vote_average_gte", timeRange[0].toString());
      params.set("vote_average_lte", timeRange[1].toString());
    }
    router.push(`${pathname}?${params.toString()}`);
  }, 800);

  useEffect(() => {
    setUserScoreInParamsDebounce();
  }, [timeRange]);

  return (
    <section className="my-2 flex flex-col gap-3">
      <p className="text-white">User Score</p>
      <RangeSlider
        defaultValue={timeRange}
        min={0}
        max={10}
        step={1}
        onInput={(e) => setTimeRange(e)}
      />
      <footer className="text-text-secondary flex justify-between text-sm">
        <p>{timeRange[0]}</p>
        <p>{timeRange[1]}</p>
      </footer>
    </section>
  );
}
