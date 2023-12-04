import React from "react";
import { sports } from "~/components/assets/links";
import { useNavigate, useParams } from "@remix-run/react";

const sport: React.FC = () => {
  const { id } = useParams();

  const sport = sports.find((sport) => sport.id === Number(id));

  if (!sport) {
    return <div className="text-4xl flex justify-center">Sport not found</div>;
  }

  const goTo = useNavigate();
  const handleRoute = () => {
    goTo(-1);
  }

  return (
    <div className="bg-neutral-300 w-full h-full fixed flex items-center justify-center">
      <div className="bg-white p-4 w-11/12 h-5/6 rounded-xl flex justify-start items-center">
        <div className="mb-2">
          <img
            src={sport.src}
            alt={sport.alt}
            className="rounded-xl border-8 border-red-500 w-96 h-80 ml-5"
          />
        </div>
        <button
          className="bg-black border-red-500 text-red-500 absolute top-14 right-14 mr-3 mt-2"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleRoute()}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default sport;
