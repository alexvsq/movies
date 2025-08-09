import { ResponseTrendingSchema } from "@/types/trending";
import { resultMovieSchema } from "@/types/movie";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export const getAllTrending = async () => {
  try {
    const url = new URL("trending/all/week", BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching trending");
    }
    const dataJson = await response.json();
    const data = await ResponseTrendingSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching trending");
  }
};
export const getTrendingMovies = async () => {
  try {
    const url = new URL("trending/movie/week", BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching trending movies");
    }
    const dataJson = await response.json();
    const data = await resultMovieSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching trending movies");
  }
};
