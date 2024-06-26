import { useState } from "react";
import { TMovie } from "../types/types";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

type TNewMovieCardProps = {
  movie: TMovie;
};

function NewMovieCard({ movie }: TNewMovieCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card m-2 border border-slate-800 bg-base-100 shadow-xl">
      <figure>
        <img src={movie.imageURL} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>Release Date: {movie.releaseDate}</p>
        <div className="card-actions justify-end">
          <button onClick={() => setIsOpen(true)} className="btn btn-primary">
            More Information
          </button>
        </div>
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-6xl space-y-4 border-2 border-slate-800 rounded-xl bg-base-100 p-6 overflow-scroll lg:overflow-hidden">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-10 ">
              <div className="w-full h-auto basis-2/4">
                <img
                  className="w-40 sm:w-96 m-auto"
                  src={movie.imageURL}
                  alt="movie-poster"
                />
              </div>

              <div className="flex flex-col gap-5 basis-3/4">
                <DialogTitle className="text-2xl sm:text-4xl font-bold">
                  {movie.title}
                </DialogTitle>
                <Description>
                  <div className="grid grid-cols-2">
                    <p className="text-md sm:text-lg font-bold">Release Date</p>
                    <p className="text-md sm:text-lg font-bold">
                      {movie.releaseDate}
                    </p>
                  </div>
                  <p className="text-sm sm:text-m md:text-lg">
                    {movie.overview}
                  </p>
                </Description>
              </div>
              <div className="flex gap-4 self-end">
                <button
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default NewMovieCard;
