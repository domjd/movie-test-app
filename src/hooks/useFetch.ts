import { useEffect, useReducer } from "react";
import { movieReducer, intialState } from "../reducers/MovieReducer";
import { TMovie } from "../types/types";

const useFetch = (data: TMovie[], genre: string) => {
  const [state, dispatch] = useReducer(movieReducer, {
    ...intialState,
    movies: data,
    genre,
  });

  console.log(state.isLoading);
  useEffect(() => {
    if (data.length > 0) dispatch({ type: "SET_MOVIES", payload: data });
  }, [data]);

  return {
    state,
    dispatch,
  };
};

export default useFetch;
