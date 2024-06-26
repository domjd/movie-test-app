import "./App.css";

import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import FilterBar from "./components/FilterBar";
import useMoviesContext from "./hooks/useMoviesContext";

import LoadMore from "./components/LoadMore";
import { InView } from "react-intersection-observer";

function App() {
  const { handlePageChange } = useMoviesContext();

  const loadPage = (inView: boolean) => {
    console.log(inView);
    if (inView) handlePageChange();
  };

  return (
    <>
      <NavBar />
      <main className=" flex flex-col max-w-[1280px] m-auto justify-center">
        <FilterBar />
        <MovieList />
        <InView onChange={(inView) => loadPage(inView)}>
          <LoadMore />
        </InView>
      </main>
    </>
  );
}

export default App;
