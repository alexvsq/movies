import { z } from "zod";

const TrendingItemSchema = z.object({
  adult: z.boolean().default(true),
  backdrop_path: z.string().nullable(),
  id: z.number(),
  title: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  original_language: z.string().nullable(),
  original_title: z.string().nullable().optional(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  media_type: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number().default(0).nullable(),
  release_date: z.string().nullable().optional(),
  first_air_date: z.string().nullable().optional(),
  video: z.boolean().nullable().optional(),
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
