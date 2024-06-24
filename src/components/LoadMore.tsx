import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import { fetchMovies } from "../libs/FetchData";
import { TMovie } from "../types/types";
import NewMovieCard from "./NewMovieCard";

type TLoadMoreProps = {
  genre: string;
};

let page = 2;

function LoadMore({ genre }: TLoadMoreProps) {
  const { ref, inView } = useInView();
  const [data, setData] = useState<TMovie[]>([]);

  useEffect(() => {
    const fetchNewMovies = async () => {
      const movies = await fetchMovies(page, genre);
      setData([...data, ...movies]);
      page++;
    };

    if (inView) {
      fetchNewMovies();
    }
  }, [inView, data, genre]);

  return (
    <>
      {data?.map((movie: TMovie, index: number) => (
        <NewMovieCard key={index} movie={movie} />
      ))}
      <span ref={ref}></span>
    </>
  );
}

export default LoadMore;
