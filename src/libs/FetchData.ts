import { TMovie, TMovieResponseData } from "../types/types";

export async function fetchMovies(
  page: number,
  genre: string
): Promise<TMovie[]> {
  const endpoint =
    genre !== "0"
      ? `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&with_genres=${genre}&page=${page}`
      : `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&&page=${page}`;
  try {
    const data = await fetch(endpoint, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: import.meta.env.TMDB_API_KEY,
      },
    });

    const results = await data.json();

    const formattedMovies = results.results.map((m: TMovieResponseData) =>
      formatMovie(m)
    );

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return formattedMovies;
  } catch (error) {
    console.log("error");
    throw error;
  }
}

const formatMovie = (movie: TMovieResponseData) => {
  const formattedMovie: TMovie = {
    id: movie.id,
    title: movie.title,
    overview: movie.overview,
    releaseDate: movie.release_date,
    imageURL: "https://image.tmdb.org/t/p/original" + movie.poster_path,
  };

  return formattedMovie;
};
