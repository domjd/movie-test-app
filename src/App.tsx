import { useEffect } from "react";
import "./App.css";
import { fetchMovies } from "./libs/FetchData";

import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import FilterBar from "./components/FilterBar";
import useFetch from "./hooks/useFetch";

function App() {
  // const [movieList, setMovieList] = useState<TMovie[]>([]);
  // const [genre, setGenre] = useState(0);
  const { state, dispatch } = useFetch([], "0");
  const { movies, genre } = state;

  const handleGenreChange = (g: string) => {
    if (g) dispatch({ type: "SET_GENRE", payload: g });
  };

  useEffect(() => {
    const getMovies = async () => {
      dispatch({ type: "SET_LOADING", payload: true });
      const data = await fetchMovies(1, genre);
      dispatch({ type: "SET_MOVIES", payload: data });
    };
    getMovies();
  }, [genre, dispatch]);

  return (
    <>
      <NavBar />
      <main className=" flex flex-col max-w-[1280px] m-auto justify-center">
        <FilterBar handleGenreChange={handleGenreChange} />
        <MovieList moviesList={movies} genre={genre} />
      </main>
    </>
  );
}

export default App;
