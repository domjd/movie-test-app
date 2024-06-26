import useMoviesContext from "../hooks/useMoviesContext";
import { TMovie } from "../types/types";

import NewMovieCard from "./NewMovieCard";

function MovieList() {
  const { state } = useMoviesContext();
  // const { state } = useFetch(moviesList);
  // const { movies } = state;

  // if (isLoading) {
  //   return (
  //     <div className="flex h-screen justify-center content-center">
  //       <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }

  return (
    <section className="min-h-screen">
      {/* <div
        className={`flex justify-center content-center transition-all ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="loading loading-spinner loading-lg"></span>
      </div> */}
      <div className={`grid grid-cols-moviegrid transition-opacity}`}>
        {state.movies?.map((movie: TMovie, index: number) => (
          <NewMovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
