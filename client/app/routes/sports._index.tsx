import React from "react"
import Navbar from "~/components/Navbar"; 

const SportsPage: React.FC = () => {
    return(
        <div>
            <Navbar />
            <h1 className="text-4xl">All Sports</h1>
        </div>
    );
};

export default SportsPage;