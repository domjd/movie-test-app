import { useEffect, useState } from "react";
import "./App.css";
import { fetchMovies } from "./libs/FetchData";

import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { TMovie } from "./types/types";

function App() {
  const [movies, setMovies] = useState<TMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies(1);
      setMovies(data);
    };
    getMovies();
  }, []);

  return (
    <>
      <NavBar />
      <main className="max-w-[1280px] m-auto flex justify-center">
        <MovieList moviesList={movies} />
      </main>
    </>
  );
}

export default App;
