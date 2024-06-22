import { useReducer } from "react";
import { intialState, movieReducer } from "../reducers/MovieReducer";
import { TMovie } from "../types/types";

const useFetch = (data: TMovie[]) => {
  const [state, dispatch] = useReducer(movieReducer, {
    ...intialState,
    movies: data,
  });

  return {
    state,
    dispatch,
  };
};

export default useFetch;
