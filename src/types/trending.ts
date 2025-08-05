import { z } from "zod";

const TrendingItemSchema = z.object({
  adult: z.boolean().default(true),
  backdrop_path: z.string(),
  id: z.number(),
  title: z.string(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  media_type: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number().default(0),
  release_date: z.string(),
  video: z.boolean(),
  vote_average: z.number().default(0),
  vote_count: z.number().default(0),
});
export type TrendingItemType = z.infer<typeof TrendingItemSchema>;

export const ResponseTrendingSchema = z.object({
  page: z.number().default(0),
  results: z.array(TrendingItemSchema),
  total_pages: z.number().default(0),
  total_results: z.number().default(0),
});
export type ResponseTrendingType = z.infer<typeof ResponseTrendingSchema>;
