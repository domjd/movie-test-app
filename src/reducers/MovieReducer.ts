import { TMovie, TMovieState } from "../types/types";

export const intialState: TMovieState = {
  movies: [],
  genre: "0",
  page: 1,
  isLoading: false,
};

export type Action =
  | { type: "SET_MOVIES"; payload: TMovie[] }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_GENRE"; payload: string }
  | { type: "SET_PAGE"; payload: number };

export const movieReducer = (state: TMovieState, action: Action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_MOVIES":
      console.log("setting movies: ", [...state.movies, ...action.payload]);
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
        isLoading: false,
      };
    case "SET_GENRE":
      console.log(action.payload);
      return {
        ...state,
        movies: [],
        isLoading: false,
        genre: action.payload,
        page: 1,
      };
    case "SET_PAGE":
      return { ...state, isLoading: false, page: action.payload };
    default:
      return state;
  }
};
