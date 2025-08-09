import { resultMovieSchema } from "@/types/movie";
import { filtersType } from "@/types/filter";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export const discoverMovies = async (searchParams: filtersType) => {
  try {
    const url = new URL("discover/movie", BASE_URL);
    url.searchParams.set("page", searchParams.page || "1");
    url.searchParams.set("include_adult", "false");

    if (searchParams.sort_by) {
      url.searchParams.set("sort_by", searchParams.sort_by);
    }
    if (searchParams.genre) {
      url.searchParams.set("with_genres", searchParams.genre);
    }
    if (searchParams.with_runtime_gte) {
      url.searchParams.set("with_runtime.gte", searchParams.with_runtime_gte);
    }
    if (searchParams.with_runtime_lte) {
      url.searchParams.set("with_runtime.lte", searchParams.with_runtime_lte);
    }
    if (searchParams.vote_average_gte) {
      url.searchParams.set("vote_average.gte", searchParams.vote_average_gte);
    }
    if (searchParams.vote_average_lte) {
      url.searchParams.set("vote_average.lte", searchParams.vote_average_lte);
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching movies");
    }
    const dataJson = await response.json();
    const data = await resultMovieSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching movies");
  }
};
