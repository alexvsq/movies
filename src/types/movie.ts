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

export const VideoFromMovieResponseSchema = z.object({
  id: z.number().default(0),
  results: z.array(
    z.object({
      iso_639_1: z.string(),
      iso_3166_1: z.string(),
      name: z.string(),
      key: z.string(),
      site: z.string(),
      size: z.number().default(0),
      type: z.string(),
      official: z.boolean().default(true),
      published_at: z.string(),
      id: z.string(),
    })
  ),
});
export type VideosFromMovieResponseType = z.infer<
  typeof VideoFromMovieResponseSchema
>;

const personCreditSchema = z.object({
  adult: z.boolean().default(true),
  gender: z.number().default(0),
  id: z.number().default(0),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number().default(0),
  profile_path: z.string().nullable(),
  credit_id: z.string(),
});

const castCreditMovieSchema = personCreditSchema.extend({
  cast_id: z.number().default(0),
  character: z.string(),
  order: z.number().default(0),
});

const crewCreditMovieSchema = personCreditSchema.extend({
  department: z.string(),
  job: z.string(),
});

export const responseCreditMovieSchema = z.object({
  id: z.number().default(0),
  cast: z.array(castCreditMovieSchema),
  crew: z.array(crewCreditMovieSchema),
});

export type ResponseCreditMovieType = z.infer<typeof responseCreditMovieSchema>;

export const movieRecommendationsSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  id: z.number(),
  title: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable(),
  media_type: z.string(),
  original_language: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  release_date: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export type MovieRecommendationType = z.infer<
  typeof movieRecommendationsSchema
>;

export const responseMovieRecommendationsSchema = z.object({
  page: z.number(),
  results: z.array(movieRecommendationsSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export type ResponseMovieRecommendationsType = z.infer<
  typeof responseMovieRecommendationsSchema
>;
