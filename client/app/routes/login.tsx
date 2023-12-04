import React, { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "~/components/Navbar";

const LoginPage: React.FC = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showLogin, setShowLogin] = useState(true);

  const goTo = useNavigate();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginData);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(signupData);
  };

  const toggleView = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

  const handleRoute = (route: string) => {
    goTo(route);
  };

  return (
    <>
      <Navbar />
      <div className="bg-neutral-300 w-full h-full fixed flex items-center justify-center">
        <div className="bg-white p-4 h-4/6 w-9/12 absolute top-10 rounded-xl flex justify-center space-x-8 border">
          {showLogin ? (
            <div className="flex flex-col items-center w-full">
              <h1 className="text-3xl mb-4 mt-4">Login</h1>
              <form onSubmit={handleLoginSubmit} className="flex flex-col mt-2">
                <label className="mb-2">
                  Username:
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        username: e.target.value,
                      })
                    }
                    className="border p-2 rounded ml-3 mt-5 bg-green-100"
                  />
                </label>
                <label className="mb-2">
                  Password:
                  <input
                    type="password"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                    className="border p-2 rounded ml-4 mt-5 bg-green-100"
                  />
                </label>
                <button
                  disabled={!loginData.username || !loginData.password}
                  type="submit"
                  className={`${
                    !loginData.username || !loginData.password
                      ? "bg-green-300"
                      : "bg-green-500 hover:bg-green-600"
                  } text-white mt-8 p-2 rounded`}
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                    handleRoute("/")
                  }
                >
                  Login
                </button>
              </form>
              <button
                onClick={toggleView}
                className="text-blue-500 hover:underline mt-4"
              >
                Don't have an account? Click here to sign up!
              </button>
            </div>
          ) : (
            <div className="flex flex-col pl-4 items-center w-full">
              <h1 className="text-3xl mb-4 mt-4">Sign Up</h1>
              <form onSubmit={handleSignupSubmit} className="flex flex-col">
                <label className="mb-2">
                  Name:
                  <input
                    type="text"
                    value={signupData.fullName}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        fullName: e.target.value,
                      })
                    }
                    className="border p-2 rounded mt-2 ml-8 bg-green-100"
                  />
                </label>
                <label className="mb-2">
                  Email:
                  <input
                    type="email"
                    value={signupData.email}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        email: e.target.value,
                      })
                    }
                    className="border p-2 rounded mt-3 ml-9 bg-green-100"
                  />
                </label>
                <label className="mb-2">
                  Password:
                  <input
                    type="password"
                    value={signupData.password}
                    onChange={(e) =>
                      setSignupData({
                        ...signupData,
                        password: e.target.value,
                      })
                    }
                    className="border p-2 rounded mt-3 ml-2 bg-green-100"
                  />
                </label>
                <button
                  type="submit"
                  className="bg-green-500 text-white p-2 rounded hover:bg-green-600 mt-1"
                  onClick={(e: React.MouseEvent) => handleRoute("/")}
                >
                  Sign Up
                </button>
              </form>
              <button
                onClick={toggleView}
                className="text-blue-500 hover:underline mt-3"
              >
                Already have an account? Click here to login!
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
