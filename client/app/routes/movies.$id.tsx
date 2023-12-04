import React from "react";
import { useNavigate, useParams } from "react-router";
import { movies } from "~/components/assets/links";

const Movie: React.FC = () => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

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
                <h1 className="text-4xl">Movie Title</h1>
                <hr />
                <p className="text-xl mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, reiciendis soluta? Repellendus omnis similique fugiat alias voluptas assumenda. Doloribus quam at, dolor eos consequuntur autem. Accusantium quaerat culpa consectetur harum!
                Culpa similique quis officiis provident ipsum quae quibusdam cum, quod illo iusto illum pariatur at, recusandae reprehenderit corporis. Deleniti molestiae, magnam quidem doloremque dolores dignissimos! Maxime non modi corporis laudantium.</p>
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
