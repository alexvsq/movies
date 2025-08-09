import {
  tvDetailSchema,
  ResponseRecomendationTvSchema,
  CreditsSchema,
  ResponseVideosTvSchema,
} from "@/types/series";

const BASE_URL = process.env.BASE_URL || "";
const API_KEY = process.env.API_KEY || "";

export const getDetailSerie = async (id: number) => {
  try {
    const url = new URL("tv/" + id, BASE_URL);
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
      throw new Error("Something went wrong fetching serie");
    }

    const dataJson = await response.json();
    const data = await tvDetailSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching serie");
  }
};

export const getCastCrewTv = async (id: number) => {
  try {
    const url = new URL("tv/" + id + "/credits", BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching cast and crew");
    }
    const dataJson = await response.json();
    const data = await CreditsSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching cast and crew");
  }
};
export const getRecomendationsTv = async (id: number) => {
  try {
    const url = new URL("tv/" + id + "/recommendations", BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching recommendations");
    }
    const dataJson = await response.json();
    const data = await ResponseRecomendationTvSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching recommendations");
  }
};

export const getVideosFromSerie = async (id: number) => {
  try {
    const url = new URL("tv/" + id + "/videos", BASE_URL);
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + API_KEY,
      },
    };

    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong fetching videos");
    }
    const dataJson = await response.json();
    const data = await ResponseVideosTvSchema.parseAsync(dataJson);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Something went wrong fetching videos");
  }
};
