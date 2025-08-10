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

export const GenreSchema = z.object({
  id: z.number().default(0),
  name: z.string(),
});

export const GenresResponseSchema = z.object({
  genres: z.array(GenreSchema),
});

const personSchema = z.object({
  id: z.number(),
  credit_id: z.string(),
  name: z.string(),
  original_name: z.string(),
  gender: z.number(),
  profile_path: z.string().nullable(),
});

const genreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

const episodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  overview: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  air_date: z.string(),
  episode_number: z.number(),
  episode_type: z.string(),
  production_code: z.string(),
  runtime: z.number().nullable(),
  season_number: z.number(),
  show_id: z.number(),
  still_path: z.string().nullable(),
});

const networkSchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

const companySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
});

const countrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
});

const seasonSchema = z.object({
  air_date: z.string().nullable(),
  episode_count: z.number(),
  id: z.number(),
  name: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  season_number: z.number(),
  vote_average: z.number(),
});

const languageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
});

export const tvDetailSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  created_by: z.array(personSchema),
  episode_run_time: z.array(z.number()),
  first_air_date: z.string(),
  genres: z.array(genreSchema),
  homepage: z.string(),
  id: z.number(),
  in_production: z.boolean(),
  languages: z.array(z.string()),
  last_air_date: z.string(),
  last_episode_to_air: episodeSchema,
  name: z.string(),
  next_episode_to_air: episodeSchema.nullable().optional(),
  networks: z.array(networkSchema),
  number_of_episodes: z.number(),
  number_of_seasons: z.number(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(companySchema),
  production_countries: z.array(countrySchema),
  seasons: z.array(seasonSchema),
  spoken_languages: z.array(languageSchema),
  status: z.string(),
  tagline: z.string(),
  type: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type TvDetailType = z.infer<typeof tvDetailSchema>;

export const ResultRecomendationItemSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  id: z.number(),
  name: z.string(),
  original_name: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  media_type: z.string(),
  original_language: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  first_air_date: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  origin_country: z.array(z.string()),
});

export const ResponseRecomendationTvSchema = z.object({
  page: z.number(),
  results: z.array(ResultRecomendationItemSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type MovieList = z.infer<typeof ResponseRecomendationTvSchema>;

export const VideoResultSchema = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});

export const ResponseVideosTvSchema = z.object({
  id: z.number(),
  results: z.array(VideoResultSchema),
});

export type Videos = z.infer<typeof ResponseVideosTvSchema>;

export const CastItemSchema = z.object({
  adult: z.boolean().default(true),
  gender: z.number().default(0),
  id: z.number().default(0),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number().default(0),
  profile_path: z.string().nullable(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number().default(0),
});

export const CrewItemSchema = z.object({
  adult: z.boolean().default(true),
  gender: z.number().default(0),
  id: z.number().default(0),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number().default(0),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
  department: z.string(),
  job: z.string(),
});

export const CreditsSchema = z.object({
  cast: z.array(CastItemSchema),
  crew: z.array(CrewItemSchema),
});

export type CreditsType = z.infer<typeof CreditsSchema>;

export const TvListItemSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string(),
  first_air_date: z.string(),
  name: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const ResponseTvListSchema = z.object({
  page: z.number(),
  results: z.array(tvSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type ResponseTvListType = z.infer<typeof ResponseTvListSchema>;
