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

  if (state.isError) {
    return (
      <section>
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Failed To Fetch Movies</span>
        </div>
      </section>
    );
  }

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
