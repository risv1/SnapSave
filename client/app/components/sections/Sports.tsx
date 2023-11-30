import React, { useState } from "react";
import { sports } from "~/components/layouts/links";
import left from "../../images/chevron-left.svg";
import right from "../../images/chevron-right.svg";
import { useNavigate } from "@remix-run/react";
import { Link } from "@remix-run/react";

const Movies: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollValue: number) => {
    const container = document.getElementById("sportsContainer");
    if (container) {
      const newScrollPosition = scrollPosition + scrollValue;
      container.scrollLeft = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };

  const goToSport = useNavigate();
  const handleSportRoute = (id: number) =>{
    goToSport(`/sports/${id}`);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full mt-5">
        <h1 className="text-3xl font-bold">Recommended Sports</h1>
        <Link className="text-base text-red-400 mr-0" to="/sports">See All{" >>"}</Link>
      </div>
      <div
        id="sportsContainer"
        className="flex flex-row justify-between mt-4 gap-3 overflow-x-hidden"
        style={{ whiteSpace: "nowrap" }}
      >
        {sports.map((sport) => (
          <img
            key={sport.id}
            src={sport.src}
            alt={sport.alt}
            className="rounded-xl w-60 h-48"
            onClick={()=>{handleSportRoute(sport.id)}}
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
