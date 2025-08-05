import { movieDetailSchema } from "@/types/movie";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export const getDetailMovie = async (id: number) => {
  try {
    const url = new URL("movie/" + id, BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      console.log(response);
      throw new Error("Something went wrong fetching movies");
    }

    const dataJson = await response.json();
    const data = await movieDetailSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching movie");
  }
};
