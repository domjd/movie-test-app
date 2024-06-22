import { useEffect, useState } from "react";
import "./App.css";
import { fetchMovies } from "./libs/FetchData";
import { TMovie } from "./types/types";
import useFetch from "./hooks/useFetch";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState<TMovie[]>([]);
  const { state, dispatch } = useFetch(movies);

  useEffect(() => {
    const getMovies = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };

    getMovies();
  }, []);

  return (
    <main className="flex justify-center">
      <div className="grid grid-cols-moviegrid">
        {movies?.map((movie: TMovie, index: number) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export default App;
