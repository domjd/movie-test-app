import { useContext } from "react";
import { MoviesContext } from "../contexts/MoviesContext";

function useMoviesContext() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error(
      "useMoviesContext must be used within MoviesContextProvider"
    );
  }

  return context;
}

export default useMoviesContext;
