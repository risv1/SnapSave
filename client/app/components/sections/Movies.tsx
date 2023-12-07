import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@remix-run/react";
import left from "../../images/chevron-left.svg";
import right from "../../images/chevron-right.svg";
import {fetchMovies, MovieType } from "~/components/utils/movies";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchData = async () => {
    const moviesData = await fetchMovies();
    setMovies(moviesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = (scrollValue: number) => {
    const container = document.getElementById("moviesContainer");
    if (container) {
      const newScrollPosition = scrollPosition + scrollValue;
      container.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };

  const goToMovie = useNavigate();
  const handleMovieRoute = (id: string) => {
    goToMovie(`/movies/${id}`);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full mt-4">
        <h1 className="text-3xl font-bold">Recommended Movies</h1>
        <Link className="text-base mb-4 text-red-400 mr-0" to="/movies">
          See All{" >>"}
        </Link>
      </div>
      <div
        id="moviesContainer"
        className="flex flex-row justify-between mt-3 gap-3 overflow-x-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        {movies.map((movie: any) => (
          <img
            key={movie.id}
            src={movie.src}
            alt={movie.alt}
            className="rounded-xl w-40 h-30 ease-in-out duration-200 border-4 hover:border-red-500 cursor-pointer"
            onClick={() => handleMovieRoute(movie.id)}
          />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        <button onClick={() => handleScroll(-1000)}>
          <img src={left} alt="idk" />
        </button>
        <button onClick={() => handleScroll(1000)}>
          <img src={right} alt="idk" />
        </button>
      </div>
    </div>
  );
};

export default Movies;
