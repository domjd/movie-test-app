export type TMovieState = {
  movies: TMovie[];
  genre: string;
  page: number;
  isLoading: boolean;
};

export type TMovie = {
  id: number;
  title: string;
  overview: string;
  releaseDate: string;
  imageURL: string;
};

export interface TMovieResponseData {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
