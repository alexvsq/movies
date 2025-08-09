import { resultMovieSchema } from "@/types/movie";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export type ListMoviesType =
  | "now_playing"
  | "popular"
  | "top_rated"
  | "upcoming";

export async function getListMovies(list: ListMoviesType = "now_playing") {
  try {
    const url = new URL("movie/" + list, BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching list movies");
    }
    const dataJson = await response.json();
    const data = await resultMovieSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching list movies");
  }
}
