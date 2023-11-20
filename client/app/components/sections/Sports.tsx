import React, { useState } from "react";
import { SportLinks } from "~/images/links";
import left from "../../images/chevron-left.svg";
import right from "../../images/chevron-right.svg";
import { Link } from "@remix-run/react";

interface Sport {
  id: number;
  src: any;
  alt: string;
}

const sports: Sport[] = [
  { id: 1, src: SportLinks[1], alt: "Image 1" },
  { id: 2, src: SportLinks[2], alt: "Image 2" },
  { id: 3, src: SportLinks[3], alt: "Image 3" },
  { id: 4, src: SportLinks[4], alt: "Image 4" },
  { id: 5, src: SportLinks[5], alt: "Image 5" },
  { id: 6, src: SportLinks[6], alt: "Image 6" },
  { id: 7, src: SportLinks[7], alt: "Image 7" },
  { id: 8, src: SportLinks[8], alt: "Image 8" },
];

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
