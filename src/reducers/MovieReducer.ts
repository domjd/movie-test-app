import { TMovie, TMovieState } from "../types/types";

export const intialState: TMovieState = {
  movies: [],
  isLoading: true,
};

type Action =
  | { type: "SET_MOVIES"; payload: TMovie[] }
  | { type: "SET_LOADING"; payload: boolean };

export const movieReducer = (state: TMovieState, action: Action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_MOVIES":
      return { ...state, movies: action.payload, isLoading: false };
    default:
      return state;
  }
};
