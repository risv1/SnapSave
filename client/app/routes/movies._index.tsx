import React from "react"
import { Link } from "@remix-run/react";
import Navbar from "~/components/Navbar"; 

const MoviesPage: React.FC = () => {
    return(
        <div>
            <Navbar />
            <h1 className="text-4xl">All Movies</h1>
        </div>
    );
};

export default MoviesPage;