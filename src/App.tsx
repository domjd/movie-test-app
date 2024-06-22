import { useEffect, useState } from "react";
import "./App.css";
import { fetchMovies } from "./libs/FetchData";
import { TMovie } from "./types/types";
import useFetch from "./hooks/useFetch";

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
    <div className="flex gap-10">
      {movies?.map((movie: TMovie, index: number) => {
        return (
          <div className="flex flex-col min-w-40 items-center" key={index}>
            <img className="" src={movie.imageURL} />
            <h2>{movie.title}</h2>
            <h3>{movie.releaseDate}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
