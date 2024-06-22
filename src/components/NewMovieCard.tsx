import { TMovie } from "../types/types";

type TNewMovieCardProps = {
  movie: TMovie;
};

function NewMovieCard({ movie }: TNewMovieCardProps) {
  return (
    <div className="card m-2 border-2 border-slate-800 bg-base-100 shadow-xl">
      <figure>
        <img src={movie.imageURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie.overview}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add To Favorites</button>
        </div>
      </div>
    </div>
  );
}

export default NewMovieCard;
