import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function LoadMore() {
  const { ref, inView } = useInView();

  // useEffect(() => {
  //   console.log("LoadMore");
  //   if (inView) {
  //     console.log("Load In View");
  //     dispatch({ type: "SET_PAGE", payload: state.page + 1 });
  //     //getMovies();
  //     //loadNextPage();
  //     //fetchMovies();
  //   }
  // }, [inView]);

  useEffect(() => {
    if (inView) console.log("IN VIEW");
  });

  return (
    <>
      {/* {movies?.map((movie: TMovie, index: number) => (
        <NewMovieCard key={index} movie={movie} />
      ))} */}
      <div className="flex justify-center align-center m-8">
        <span ref={ref} className="loading loading-spinner loading-lg"></span>
      </div>
    </>
  );
}

export default LoadMore;
