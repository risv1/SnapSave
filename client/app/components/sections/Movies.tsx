import React, { useState } from "react";
import { MovieLinks } from "~/images/links";
import left from "../../images/chevron-left.svg";
import right from "../../images/chevron-right.svg";
import { Link } from "@remix-run/react";

interface Movie {
  id: number;
  src: any;
  alt: string;
}

const movies: Movie[] = [
  { id: 1, src: MovieLinks[1], alt: "Image 1" },
  { id: 2, src: MovieLinks[2], alt: "Image 2" },
  { id: 3, src: MovieLinks[3], alt: "Image 3" },
  { id: 4, src: MovieLinks[4], alt: "Image 4" },
  { id: 5, src: MovieLinks[5], alt: "Image 5" },
  { id: 6, src: MovieLinks[6], alt: "Image 6" },
  { id: 7, src: MovieLinks[7], alt: "Image 7" },
  { id: 8, src: MovieLinks[8], alt: "Image 8" },
];

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
