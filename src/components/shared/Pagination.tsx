"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface PaginationProps {
  page: number;
  totalPages: number;
  totalResults: number;
}

export default function Pagination({
  page,
  totalPages,
  totalResults,
}: PaginationProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // Limitar máximo a 500
  const maxPages = Math.min(totalPages, 500);

  const getPageNumbers = () => {
    const pages: number[] = [];

    if (maxPages <= 5) {
      for (let i = 1; i <= maxPages; i++) pages.push(i);
    } else {
      if (page <= 3) {
        pages.push(1, 2, 3, 4, -1, maxPages);
      } else if (page >= maxPages - 2) {
        pages.push(1, -1, maxPages - 3, maxPages - 2, maxPages - 1, maxPages);
      } else {
        pages.push(1, -1, page - 1, page, page + 1, -1, maxPages);
      }
    }

    return pages;
  };

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (newPage === 1) {
      params.delete("page");
    } else {
      params.set("page", newPage.toString());
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  if (totalResults === 0) {
    return null;
  }
  return (
    <footer className="min-h-40 flex flex-col my-10 md:my-0  md:flex-row items-center justify-center gap-4 md:gap-2 text-sm">
      <button
        className="px-3 py-2 border border-white/10 rounded-lg hover:bg-white/20 disabled:opacity-50 cursor-pointer"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button>
      <div className="flex flex-row gap-2 items-center">
        {getPageNumbers().map((item, index) =>
          item === -1 ? (
            <span key={index} className="px-2">
              ...
            </span>
          ) : (
            <button
              key={index}
              onClick={() => setPage(item)}
              className={`px-3 py-2 rounded-lg border border-white/10 hover:bg-white/20 cursor-pointer ${
                item === page ? "bg-primary text-black font-bold" : ""
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>
      <button
        className="px-3 py-2 border border-white/10 rounded-lg hover:bg-white/20 disabled:opacity-50 cursor-pointer"
        disabled={page === maxPages}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </footer>
  );
}
