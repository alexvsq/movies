"use client";
import { useEffect, useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useDebouncedCallback } from "use-debounce";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function timeRange() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [timeRange, setTimeRange] = useState<[number, number]>([0, 360]);

  const setTimeRangeInParamsDebounce = useDebouncedCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (timeRange[0] === 0 && timeRange[1] === 360) {
      params.delete("with_runtime_gte");
      params.delete("with_runtime_lte");
    } else {
      params.set("with_runtime_gte", timeRange[0].toString());
      params.set("with_runtime_lte", timeRange[1].toString());
    }
    router.push(`${pathname}?${params.toString()}`);
  }, 800);

  useEffect(() => {
    setTimeRangeInParamsDebounce();
  }, [timeRange]);

  return (
    <section className="my-2 flex flex-col gap-3">
      <p className="text-white">Runtime</p>
      <RangeSlider
        defaultValue={timeRange}
        min={0}
        max={360}
        step={1}
        onInput={(e) => setTimeRange(e)}
      />
      <footer className="text-text-secondary flex justify-between text-sm">
        <p>{timeRange[0]} min</p>
        <p>{timeRange[1]} min</p>
      </footer>
    </section>
  );
}
