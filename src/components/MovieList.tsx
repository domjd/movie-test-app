import { InView } from "react-intersection-observer";
import useMoviesContext from "../hooks/useMoviesContext";
import { TMovie } from "../types/types";
import LoadMore from "./LoadMore";

import NewMovieCard from "./NewMovieCard";

function MovieList() {
  const { state, handlePageChange } = useMoviesContext();

  const loadPage = (inView: boolean) => {
    console.log(inView);
    if (inView) handlePageChange();
  };

  return (
    <section className="pt-2">
      {state.isLoading && state.movies.length === 0 ? (
        <>
          <div className="flex justify-center content-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      ) : (
        <>
          <div className={`grid grid-cols-moviegrid transition-opacity}`}>
            {state.movies?.map((movie: TMovie, index: number) => (
              <NewMovieCard key={index} movie={movie} />
            ))}
          </div>
          <InView onChange={(inView) => loadPage(inView)}>
            <LoadMore />
          </InView>
        </>
      )}
    </section>
  );
}

export default MovieList;
