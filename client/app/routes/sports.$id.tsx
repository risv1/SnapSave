import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { fetchSport , SportType } from "~/utils/sports";

const Sport: React.FC = () => {
  const { id } = useParams();
  const sportId = id ? parseInt(id, 10) : 0;

  const [sport, setSport] = useState<SportType | null>(Object)

  const fetchData = async () => {
    const sportData = await fetchSport(sportId);
    setSport(sportData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!sport) {
    return <div className="text-4xl flex justify-center">Sport not found</div>;
  }

  const goTo = useNavigate();
  const handleRoute = () => {
    goTo(-1);
  };

  return (
    <div className="bg-neutral-300 w-full h-full fixed flex items-center justify-center">
    <div className="bg-white p-4 w-11/12 h-5/6 rounded-xl flex justify-start items-center">
        <img
          src={sport.src}
          alt={sport.alt}
          className="rounded-xl border-8 border-red-500 w-96 h-80 ml-5"
        />
      <div className="flex flex-col items-center ml-10 mr-10">
              <h1 className="text-4xl">{sport.name}</h1>
              <hr />
              <p className="text-xl mt-5">{sport.description}</p>
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

export default Sport;
