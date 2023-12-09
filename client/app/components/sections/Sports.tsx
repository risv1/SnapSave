import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@remix-run/react";
import left from "../../images/chevron-left.svg";
import right from "../../images/chevron-right.svg";
import {fetchSports, SportType } from "~/utils/sports";

const Sports: React.FC = () => {
  const [sports, setSports] = useState<SportType[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const fetchData = async () => {
    const sportsData = await fetchSports();
    setSports(sportsData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScroll = (scrollValue: number) => {
    const container = document.getElementById("sportsContainer");
    if (container) {
      const newScrollPosition = scrollPosition + scrollValue;
      container.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };

  const goToSport = useNavigate();
  const handleSportRoute = (id: string) => {
    goToSport(`/sports/${id}`);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full mt-4">
        <h1 className="text-3xl font-bold">Recommended Sports</h1>
        <Link className="text-base mb-4 text-red-400 mr-0" to="/sports">
          See All{" >>"}
        </Link>
      </div>
      <div
        id="sportsContainer"
        className="flex flex-row justify-between mt-3 gap-3 overflow-x-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        {sports.map((sport: any) => (
          <img
            key={sport.id}
            src={sport.src}
            alt={sport.alt}
            className="rounded-xl w-60 h-48 border-4 ease-in-out duration-200 hover:border-red-500 cursor-pointer"
            onClick={() => handleSportRoute(sport.id)}
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

export default Sports;