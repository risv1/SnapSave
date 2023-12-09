import { useNavigate } from "@remix-run/react";
import React, { useEffect, useState } from "react";
import Navbar from "~/components/Navbar";
import { SportType, fetchSports } from "~/utils/sports";

const SportsPage: React.FC = () => {

  const [sports, setSports] = useState<SportType[]>([]);

  const fetchData = async () => {
    const sportsData = await fetchSports();
    setSports(sportsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goToSport = useNavigate();

  const handleSportRoute = (id: number) => {
    goToSport(`/sports/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center bg-neutral-300">
        {sports.map((sport) => (
          <div className="bg-white w-3/4 h-96 mt-5 flex flex-row items-center rounded-xl border-4 hover:border-red-500">
            <img
              key={sport.id}
              src={sport.src}
              alt={sport.alt}
              className="rounded-xl w-2/5 h-72 ml-5"
              onClick={() => handleSportRoute(sport.id)}
            />
            <div className="flex flex-col items-center ml-3">
              <h1 className="text-3xl">{sport.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsPage;
