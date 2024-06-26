import { useCallback, useEffect, useReducer } from "react";
import { movieReducer, intialState } from "../reducers/MovieReducer";
import { fetchMovies } from "../libs/FetchData";

const useFetch = () => {
  const [state, dispatch] = useReducer(movieReducer, intialState);

  console.log("Called useFetch");

  const handleGenreChange = (g: string) => {
    if (g) {
      console.log("changing genre: ", g);
      dispatch({ type: "SET_GENRE", payload: g });
    } else {
      throw new Error("Genre not provided");
    }
  };

  const fetchData = useCallback(async () => {
    console.log("Calling effect function");
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await fetchMovies(state.page, state.genre);
      console.log("RESPONSE: ", response);
      dispatch({ type: "SET_MOVIES", payload: response });
    } catch (e) {
      throw new Error("Intial Data could not be retrieved");
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }, [state.page, state.genre]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getMovies = useCallback(async () => {
    console.log("Calling getMovies");
    console.log("previous move state: ", state.movies);
    console.log("genre: ", state.genre);

    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const data = await fetchMovies(state.page, state.genre);

      dispatch({ type: "SET_MOVIES", payload: data });
      //dispatch({ type: "SET_PAGE", payload: state.page + 1 });
      console.log("movies found");
      //console.log(state.isLoading);
    } catch (e) {
      throw new Error("Data could not be found");
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }

    console.log("NEW MOVIES: ", state.movies);
    console.log("NEW GENRE: ", state.genre);
  }, [state.page, state.genre]);

  const handlePageChange = () => {
    dispatch({ type: "SET_PAGE", payload: state.page + 1 });
  };

  return {
    state,
    dispatch,
    handlePageChange,
    getMovies,
    handleGenreChange,
  };
};

export default useFetch;
