import { LinksFunction } from "@remix-run/node";
import { FC } from "react";
import Navbar from "~/components/Navbar";
import Carousel from "~/components/Carousel";
import Movies from "~/components/sections/Movies";
import Sports from "~/components/sections/Sports";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "../styles/main.css" }];
};

const HomePage: FC = () => {
  return (
    <>
      <div className="overflow-hidden bg-neutral-200">
        <Navbar />
        <Carousel />
        <div id="movies" className="p-3">
          <Movies />
        </div>
        <div id="sports" className="p-3">
          <Sports />
        </div>
      </div>
    </>
  );
};

export default HomePage;
