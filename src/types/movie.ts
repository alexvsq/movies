import { z } from "zod";

export const movieTypeSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});
export type MovieType = z.infer<typeof movieTypeSchema>;

export const resultMovieSchema = z.object({
  page: z.number(),
  results: z.array(movieTypeSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
export type ResultMovieType = z.infer<typeof resultMovieSchema>;

export const movieDetailSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  //belongs_to_collection: z.array(z.string()).nullable(),
  budget: z.number(),
  genres: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
  homepage: z.string(),
  id: z.number(),
  imdb_id: z.string().nullable(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(
    z.object({
      id: z.number(),
      logo_path: z.string().nullable(),
      name: z.string(),
      origin_country: z.string(),
    })
  ),
  production_countries: z.array(
    z.object({
      iso_3166_1: z.string(),
      name: z.string(),
    })
  ),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number(),
  spoken_languages: z.array(
    z.object({
      english_name: z.string(),
      iso_639_1: z.string(),
      name: z.string(),
    })
  ),
  status: z.string(),
  tagline: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type MovieDetailType = z.infer<typeof movieDetailSchema>;

export const GenreSchema = z.object({
  id: z.number().default(0),
  name: z.string(),
});

export const GenresResponseSchema = z.object({
  genres: z.array(GenreSchema),
});
export type GenresResponseType = z.infer<typeof GenresResponseSchema>;
