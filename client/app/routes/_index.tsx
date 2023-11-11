import { LinksFunction } from "@remix-run/node";
import { FC } from "react";
import Navbar from "~/components/Navbar";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: "../styles/main.css" }];
};

const HomePage: FC = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <h1 className="text-5xl">Hello</h1>
      </div>
    </>
  );
};

export default HomePage;
