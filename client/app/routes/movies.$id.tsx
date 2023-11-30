import React from "react";
import { useNavigate, useParams } from "react-router";
import { movies } from "~/components/layouts/links";

const Movie: React.FC = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return <div className="text-4xl flex justify-center">Movie not found</div>;
  }

  const goTo = useNavigate();
  const handleRoute =(route: string)=>{
    goTo(route);
  }

  return (
    <div className="bg-neutral-300 w-full h-full fixed flex items-center justify-center">
      <div className="bg-white p-4 w-11/12 h-5/6 rounded-xl flex justify-start items-center">
        <div className="mb-2">
          <img src={movie.src} alt={movie.alt} className="rounded-xl border-8 border-red-500 w-64 h-96 ml-5" />
        </div>
        <button className="bg-black border-red-500 text-red-500 absolute top-14 right-14 mr-3 mt-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleRoute("/#movies")}>Back</button>
      </div>
    </div>
  );
};

export default Movie;
