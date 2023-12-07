import React, { useState } from "react";
import Navbar from "~/components/Navbar";
import Login from "~/components/sections/Login";
import Register from "~/components/sections/Register";

const LoginPage: React.FC = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleView = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  return (
    <>
      <Navbar />
      <div className="bg-neutral-300 w-full h-full fixed flex items-center justify-center">
        <div className="bg-white p-4 h-4/6 w-9/12 absolute top-10 rounded-xl flex justify-center space-x-8 border">
          {showLogin ? (
            <Login />
          ) : (
            <Register onToggle={toggleView} />
          )}
        </div>
        <button
          className="absolute top-5 right-5 bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={toggleView}
        >
          {showLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>
    </>
  );
};

export default LoginPage;
