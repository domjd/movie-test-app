export type TMovieState = {
  movies: TMovie[];
  isLoading: boolean;
};

export type TMovie = {
  id: number;
  title: string;
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
