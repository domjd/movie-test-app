import { useEffect, useReducer } from "react";
import { movieReducer, intialState } from "../reducers/MovieReducer";
import { fetchMovies } from "../libs/FetchData";
import { fetchDummyData } from "../libs/DummyData";

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
        const response = await fetchDummyData(state.page, state.genre);
        dispatch({ type: "SET_MOVIES", payload: response });
      } catch (e) {
        throw new Error("Intial Data could not be retrieved");
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
