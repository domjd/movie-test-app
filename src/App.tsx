import { useEffect, useState } from "react";
import "./App.css";
import { fetchMovies } from "./libs/FetchData";

import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { TMovie } from "./types/types";
import FilterBar from "./components/FilterBar";

function App() {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const [genre, setGenre] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(1, genre);
      setMovies(data);
    };
    getMovies();
  }, [genre]);

  return (
    <>
      <NavBar />
      <main className=" flex flex-col max-w-[1280px] m-auto justify-center">
        <FilterBar handleGenre={setGenre} />
        <MovieList moviesList={movies} />
      </main>
    </>
  );
}

export default App;
