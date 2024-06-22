import { TMovie } from "../types/types";

type TMovieCardProps = {
  movie: TMovie;
};

function MovieCard({ movie }: TMovieCardProps) {
  return (
    <div className="flex m-2 flex-col gap-4 md:gap-1 justify-between border-slate-100 rounded-md border-2 p-2">
      <img className="" src={movie.imageURL} />
      <h2 className="font-bold text-3xl md:text-xl">{movie.title}</h2>
      <h3 className="italic text-slate-400">{movie.releaseDate}</h3>
      <button className="border-slate-300 text-white font-semibold rounded-3xl border-2 bg-amber-500 h-10 text-2xl md:text-lg md:h-10">
        Add To Favorites
      </button>
    </div>
  );
}

export default MovieCard;
