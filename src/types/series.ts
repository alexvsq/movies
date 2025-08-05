import { z } from "zod";

export const tvSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  id: z.number(),
  name: z.string(),
  original_name: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  media_type: z.any(),
  original_language: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  first_air_date: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  origin_country: z.array(z.string()),
});
export type TvType = z.infer<typeof tvSchema>;

export const resultTvSchema = z.object({
  page: z.number(),
  results: z.array(tvSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
export type ResultTvType = z.infer<typeof resultTvSchema>;
