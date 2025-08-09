"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SortBy() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const setOrder = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.delete("page");
      params.set("sort_by", value);
    } else {
      params.delete("sort_by");
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  const optionsToShow = pathname.includes("/movies") ? options : optionsTv;

  return (
    <section className="my-2 flex flex-col gap-2">
      <p className="text-text-secondary">Sort by</p>

      <select
        onChange={(e) => {
          setOrder(e.target.value);
        }}
        name=""
        id=""
        className="bg-white w-full p-2 rounded-lg text-black text-sm"
      >
        {optionsToShow.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </section>
  );
}

const options = [
  { label: "", value: "" },
  { label: "Original Title (A-Z)", value: "original_title.asc" },
  { label: "Original Title (Z-A)", value: "original_title.desc" },
  { label: "Popularity (Low to High)", value: "popularity.asc" },
  { label: "Popularity (High to Low)", value: "popularity.desc" },
  { label: "Revenue (Low to High)", value: "revenue.asc" },
  { label: "Revenue (High to Low)", value: "revenue.desc" },
  { label: "Release Date (Oldest First)", value: "primary_release_date.asc" },
  { label: "Title (A-Z)", value: "title.asc" },
  { label: "Title (Z-A)", value: "title.desc" },
  {
    label: "Release Date (Newest First)",
    value: "primary_release_date.desc",
  },
  { label: "Vote Average (Low to High)", value: "vote_average.asc" },
  { label: "Vote Average (High to Low)", value: "vote_average.desc" },
  { label: "Vote Count (Low to High)", value: "vote_count.asc" },
  { label: "Vote Count (High to Low)", value: "vote_count.desc" },
];

const optionsTv = [
  { label: "", value: "" },
  { label: "First Air Date (Oldest First)", value: "first_air_date.asc" },
  { label: "First Air Date (Newest First)", value: "first_air_date.desc" },
  { label: "Name (A-Z)", value: "name.asc" },
  { label: "Name (Z-A)", value: "name.desc" },
  { label: "Original Name (A-Z)", value: "original_name.asc" },
  { label: "Original Name (Z-A)", value: "original_name.desc" },
  { label: "Popularity (Low to High)", value: "popularity.asc" },
  { label: "Popularity (High to Low)", value: "popularity.desc" },
  { label: "Vote Average (Low to High)", value: "vote_average.asc" },
  { label: "Vote Average (High to Low)", value: "vote_average.desc" },
  { label: "Vote Count (Low to High)", value: "vote_count.asc" },
  { label: "Vote Count (High to Low)", value: "vote_count.desc" },
];
