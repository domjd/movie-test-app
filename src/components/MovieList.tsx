import { TMovie } from "../types/types";
import NewMovieCard from "./NewMovieCard";
import useFetch from "../hooks/useFetch";
import LoadMore from "./LoadMore";

type TMovieListProps = {
  moviesList: TMovie[];
};

function MovieList({ moviesList }: TMovieListProps) {
  const { state } = useFetch(moviesList);
  const { movies } = state;

  //   if (isLoading) {
  //     return (
  //       <div className="flex h-screen justify-center content-center">
  //         <span className="loading loading-spinner loading-lg"></span>
  //       </div>
  //     );
  //   }

  return (
    <section>
      {/* <div
        className={`flex justify-center content-center transition-all ${
          isLoading ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="loading loading-spinner loading-lg"></span>
      </div> */}
      <div className={`grid grid-cols-moviegrid transition-opacity}`}>
        {movies?.map((movie: TMovie, index: number) => (
          <NewMovieCard key={index} movie={movie} />
        ))}
        <LoadMore />
      </div>
      <div className="flex justify-center align-center m-8">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    </section>
  );
}

export default MovieList;
