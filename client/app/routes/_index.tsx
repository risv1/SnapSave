import { LinksFunction } from "@remix-run/node";
import { FC } from "react";
import Navbar from "~/components/Navbar";
import Carousel from "~/components/Carousel";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "../styles/main.css" }];
};

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="">
        <h1 className="text-5xl">Hello</h1>
      </div>
    </>
  );
};

export default HomePage;
