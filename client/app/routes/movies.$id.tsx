import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchMovie, MovieType } from "~/components/utils/movies";

const Movie: React.FC = () => {
  const { id } = useParams();
  const movieId = id ? parseInt(id, 10) : 0;

  const [movie, setMovie] = useState<MovieType | null>(Object)

  const fetchData = async () => {
    const movieData = await fetchMovie(movieId);
    setMovie(movieData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!movie) {
    return <div className="text-4xl flex justify-center">Movie not found</div>;
  }

  const goTo = useNavigate();
  const handleRoute = () => {
    goTo(-1);
  };

  return (
    <div className="bg-neutral-300 w-full h-full fixed flex items-center justify-center">
      <div className="bg-white p-4 w-11/12 h-5/6 rounded-xl flex justify-start items-center">
          <img
            src={movie.src}
            alt={movie.alt}
            className="rounded-xl border-8 border-red-500 w-64 h-96 ml-5"
          />
        <div className="flex flex-col items-center ml-10 mr-10">
                <h1 className="text-4xl">{movie.name}</h1>
                <hr />
                <p className="text-xl mt-5">{movie.description}</p>
              </div>
          </div>
        <button
          className="bg-black border-red-500 text-red-500 absolute top-14 right-14 mr-3 mt-2"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleRoute()}
        >
          Back
        </button>
      </div>
  );
};

export default Movie;
