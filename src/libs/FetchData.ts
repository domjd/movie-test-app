import { TMovie, TMovieResponseData } from "../types/types";

export async function fetchMovies(page: number): Promise<TMovie[]> {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDQ4ZGM1YzEyMTQ3MTBiZDBmNTRjMTAyMjk5OGQ2ZSIsIm5iZiI6MTcxOTA3MDM2Mi4wODgxMTIsInN1YiI6IjYzZGQzZTdjMzczYWMyMDBjYWZjYjJiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gkdvV-7VvFP6g93x23Fx0DX8cKWkTgh-r43Drn3_xjM",
        },
      }
    );

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
