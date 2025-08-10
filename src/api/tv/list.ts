import { ResponseTvListSchema } from "@/types/series";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export type ListMoviesType =
  | "popular"
  | "airing_today"
  | "on_the_air"
  | "top_rated";

export async function getListSeries(list: ListMoviesType = "popular") {
  try {
    const url = new URL("tv/" + list, BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching list series");
    }
    const dataJson = await response.json();
    const data = await ResponseTvListSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching list series");
  }
}
