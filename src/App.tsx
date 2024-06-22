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
    <main className="flex justify-center">
      <div className="flex flex-col w-full md:flex-row flex-wrap justify-start">
        {movies?.map((movie: TMovie, index: number) => {
          return (
            <div
              className="flex w-full md:w-[200px] m-2 flex-col gap-4 md:gap-1 justify-between border-slate-100 rounded-md border-2 p-2"
              key={index}
            >
              <img className="" src={movie.imageURL} />
              <h2 className="font-bold text-3xl md:text-xl">{movie.title}</h2>
              <h3 className="italic text-slate-400">{movie.releaseDate}</h3>
              <button className="border-slate-300 text-white font-semibold rounded-3xl border-2 bg-amber-500 h-20 text-2xl md:text-lg md:h-10">
                Add To Favorites
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default App;
