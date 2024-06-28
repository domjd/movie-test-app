import { useEffect, useReducer } from "react";
import { movieReducer, intialState } from "../reducers/MovieReducer";
import { fetchMovies } from "../libs/FetchData";
import toast from "react-hot-toast";

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

  const handlePageChange = () => {
    dispatch({ type: "SET_PAGE", payload: state.page + 1 });
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "SET_LOADING", payload: true });

      try {
        const response = await fetchMovies(state.page, state.genre);
        dispatch({ type: "SET_MOVIES", payload: response });
      } catch (error: unknown) {
        dispatch({ type: "SET_ERROR", payload: true });
        if (error instanceof Error) toast.error(error.message);
        else toast.error("Unknown Error Occured");
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    fetchData();
  }, [state.page, state.genre]);

  return {
    state,
    dispatch,
    handlePageChange,
    handleGenreChange,
  };
};

export default useFetch;
