import { z } from "zod";

const KnownForSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  media_type: z.string(),
  original_language: z.string(),
  original_title: z.string().nullable().optional(),
  overview: z.string(),
  poster_path: z.string().nullable().optional(),
  release_date: z.string().nullable().optional(),
  title: z.string().nullable().optional(),
  video: z.boolean().nullable().optional(),
  vote_average: z.number(),
  vote_count: z.number(),
});

const PeopleSchema = z.object({
  adult: z.boolean().default(true),
  gender: z.number().default(0),
  id: z.number().default(0),
  known_for: z.array(KnownForSchema),
  known_for_department: z.string(),
  name: z.string(),
  popularity: z.number().default(0),
  profile_path: z.string().nullable(),
});
export type PeopleType = z.infer<typeof PeopleSchema>;

export const PeopleResponseSchema = z.object({
  page: z.number().default(0),
  results: z.array(PeopleSchema),
  total_pages: z.number().default(0),
  total_results: z.number().default(0),
});
export type PeopleResponseType = z.infer<typeof PeopleResponseSchema>;
