import { ResponseTrendingSchema } from "@/types/trending";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export const getTrending = async () => {
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
