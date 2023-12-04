import { useNavigate } from "@remix-run/react";
import React from "react";
import { movies } from "~/components/assets/links";
import Navbar from "~/components/Navbar";

const MoviesPage: React.FC = () => {
  const goToMovie = useNavigate();

  const handleMovieRoute = (id: number) => {
    goToMovie(`/movies/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-neutral-300">
        {movies.map((movie) => (
          <div className="bg-white w-3/4 h-96 mt-5 flex flex-row items-center rounded-xl border-4 hover:border-red-500">
            <img
              key={movie.id}
              src={movie.src}
              alt={movie.alt}
              className="rounded-xl w-56 h-80 ml-5"
              onClick={() => handleMovieRoute(movie.id)}
            />
            <div className="flex flex-col items-center ml-3">
              <h1 className="text-3xl">Movie Title</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
