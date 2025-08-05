import { GenresResponseSchema } from "@/types/movie";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export const getGenresMovies = async () => {
  try {
    const url = new URL("genre/movie/list", BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching genres");
    }
    const dataJson = await response.json();
    const data = await GenresResponseSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching genres");
  }
};
