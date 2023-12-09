import { FC, useRef, FormEvent, useState, useEffect } from "react";
import { Link, NavigateFunction, useNavigate } from "@remix-run/react";
import ProfileSheet from "./nav-ui/ProfileSheet";
import Menu from "./nav-ui/Menu";
import { checkUserLoggedIn } from "~/utils/users";

const Navbar: FC = ({}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    const checkLoggedInUser = async () => {
      try {
        const checkIsLoggedIn = await checkUserLoggedIn();
        setIsLoggedIn(checkIsLoggedIn);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    checkLoggedInUser();
  }, []);

  const searchRef = useRef<HTMLInputElement>(null);
  const goTo: NavigateFunction = useNavigate();

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (searchRef.current) {
      console.log(searchRef.current.value);
      searchRef.current.value = "";
    }
  };

  const handleRoute = (route: string) => {
    goTo(route);
  };

  const Logout = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("Logged out succesfully")
      setIsLoggedIn(false)
      goTo("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="z-10 bg-indigo-700 shadow-md sticky h-20 z-1 flex justify-between items-center flex-row">
      <div className="p-5 ml-8 flex flex-row items-center gap-10">
        <Link to="/" className="text-3xl font-semibold text-white mb-1 p-3">
          Snap<span className="text-red-500">Save</span>
        </Link>
        <form onSubmit={handleSearch} className="flex-grow ">
          <input
            type="text"
            ref={searchRef}
            className="rounded h-10 border border-slate-300 pl-2 pr-20 text-xl w-"
            placeholder="Search"
          />
        </form>
        <Menu />
      </div>
      <div className="flex items-center gap-10 p-5 mb-1 mr-5">

      {isLoggedIn ? (
        <button
        className="p-2 rounded bg-red-500 text-white"
        onClick={Logout}
      >Sign out</button>
      ):(
        <button
        className="p-2 rounded bg-green-500 text-white"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
          handleRoute("/login")
        }
      > Sign up
      </button>
      )}
        <ProfileSheet />
      </div>
    </div>
  );
};

export default Navbar;
