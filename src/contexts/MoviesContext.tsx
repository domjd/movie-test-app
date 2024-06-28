import { createContext } from "react";
import { TMovieState } from "../types/types";

import useFetch from "../hooks/useFetch";

import { Action } from "../reducers/MovieReducer";

type MoviesContext = {
  handleGenreChange: (genre: string) => void;
  handlePageChange: () => void;
  state: TMovieState;
  dispatch: React.Dispatch<Action>;
};

export const MoviesContext = createContext<MoviesContext | null>(null);

function MoviesContextProvider({ children }: { children: React.ReactNode }) {
  const { state, dispatch, handleGenreChange, handlePageChange } = useFetch();

  return (
    <MoviesContext.Provider
      value={{
        state,
        dispatch,
        handleGenreChange,
        handlePageChange,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
