import { useEffect, useReducer } from "react";
import { movieReducer, intialState } from "../reducers/MovieReducer";
import { TMovie } from "../types/types";

const useFetch = (data: TMovie[]) => {
  const [state, dispatch] = useReducer(movieReducer, {
    ...intialState,
    movies: data,
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
