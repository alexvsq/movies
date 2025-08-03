export type tvType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: "tv" | "movie" | string; // puedes ajustarlo si solo es 'tv'
  original_language: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string; // puedes usar Date si lo vas a parsear
  vote_average: number;
  vote_count: number;
  origin_country: string[];
};
