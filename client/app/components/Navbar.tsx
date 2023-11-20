import { FC, useRef, FormEvent } from "react";
import { Link } from "@remix-run/react";
import ProfileSheet from "./nav-ui/ProfileSheet";
import Menu from "./nav-ui/Menu";

const Navbar: FC = ({}) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    if (searchRef.current) {
      console.log(searchRef.current.value);
      searchRef.current.value = "";
    }
  };

  return (
    <div className="z-10 bg-white shadow-md sticky h-20 z-1 flex justify-between items-center flex-row">
      <div className="p-5 ml-8 flex flex-row items-center gap-10">
        <Link to="/" className="text-3xl font-semibold text-black mb-1 p-3">
          Snap<span className="text-red-500">Seat</span>
        </Link>
        <form onSubmit={handleSearch} className="flex-grow ">
          <input
            type="text"
            ref={searchRef}
            className="rounded h-10 border border-slate-300 pl-2 pr-20 text-xl w-"
            placeholder="Search for Available Events"
          />
        </form>
        <Menu />
      </div>
      <div className="flex items-center gap-10 p-5 mb-1 mr-5">
        <button className="p-2 rounded bg-green-500 text-white" >Sign up</button>
        <ProfileSheet />
      </div>
    </div>
  );
};

export default Navbar;
