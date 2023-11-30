import React, { useState } from "react";
import { movies } from "~/components/layouts/links";
import left from "../../images/chevron-left.svg";
import right from "../../images/chevron-right.svg";
import { Link, useNavigate } from "@remix-run/react";

const Movies: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollValue: number) => {
    const container = document.getElementById("moviesContainer");
    if (container) {
      const newScrollPosition = scrollPosition + scrollValue;
      container.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };

  const goToMovie = useNavigate();
  const handleMovieRoute = (id: number) =>{
    goToMovie(`/movies/${id}`);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full mt-4">
        <h1 className="text-3xl font-bold">Recommended Movies</h1>
        <Link className="text-base mb-4 text-red-400 mr-0" to="/movies">See All{" >>"}</Link>
      </div>
      <div
        id="moviesContainer"
        className="flex flex-row justify-between mt-3 gap-3 overflow-x-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={movie.src}
            alt={movie.alt}
            className="rounded-xl w-40 h-30"
            onClick={()=>handleMovieRoute(movie.id)}
          />
        ))}
      </div>
      <div className="flex justify-between mt-3">
        <button onClick={() => handleScroll(-1000)}><img src={left} alt="idk" /></button>
        <button onClick={() => handleScroll(1000)}><img src={right} alt="idk" /></button>
      </div>
    </div>
  );
};

export default Movies;
