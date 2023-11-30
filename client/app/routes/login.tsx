import React from "react";
import Navbar from "~/components/Navbar";

const LoginPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="bg-neutral-300 w-full h-full fixed flex items-center justify-center">
        <div className="bg-white p-4 h-96 w-11/12 absolute top-10 rounded-xl flex justify-start items-center">
            <h1>Hello</h1>
        </div>      
      </div>
    </>
  );
};

export default LoginPage;
