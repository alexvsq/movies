import { resultTvSchema } from "@/types/series";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export const discoverTv = async (page = 1) => {
  try {
    const url = new URL("discover/tv", BASE_URL);
    url.searchParams.set("page", page.toString());

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching tv");
    }
    const dataJson = await response.json();
    const data = await resultTvSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching tv");
  }
};
