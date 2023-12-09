import { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Link } from "@remix-run/react";
import { checkUserRole } from "~/utils/users";

const Menu = () => {

  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(()=>{
    const fetchUserData = async() => {
      try{
        const userIsAdmin = await checkUserRole()
        setIsAdmin(userIsAdmin)
      }catch(error){
        console.error("Error: ", error)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div className="z-10">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              Movies
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute z-10 w-40">
              <ul className="list-none p-0 m-0 w-40 h-20 gap-2 mt-2">
                <li className="ml-3 hover:bg-gray-200 pr-1">
                  <NavigationMenuLink>
                    <Link to="/#movies">Recommended Movies</Link>
                  </NavigationMenuLink>
                </li>
                <li className="ml-3 hover:bg-gray-200 pr-1">
                  <NavigationMenuLink>
                    <Link to="/movies">All Movies</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="pl-5">
            <NavigationMenuTrigger className="text-xl">
              Sports
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute z-10 w-40">
              <ul className="list-none p-0 m-0 w-40 h-20 gap-2 mt-2">
                <li className="ml-3 hover:bg-gray-200 pr-1">
                  <NavigationMenuLink>
                    <Link to="/#sports">Recommended Sports</Link>
                  </NavigationMenuLink>
                </li>
                <li className="ml-3 hover:bg-gray-200 pr-1">
                  <NavigationMenuLink>
                    <Link to="/sports">All Sports</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {isAdmin &&
          <NavigationMenuItem className="pl-5">
            <NavigationMenuTrigger className="text-xl">
              Admin
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute z-10 w-40">
              <ul className="list-none p-0 m-0 w-40 h-20 gap-2 mt-2">
              <li className="ml-3 hover:bg-gray-200 pr-1">
                  <NavigationMenuLink>
                    <Link to="/admin/movies">Manage Movies</Link>
                  </NavigationMenuLink>
                </li>
                <li className="ml-3 hover:bg-gray-200 pr-1">
                  <NavigationMenuLink>
                    <Link to="/admin/sports">Manage Sports</Link>
                  </NavigationMenuLink>
                </li>
                <li className="ml-3 hover:bg-gray-200 pr-1">
                  <NavigationMenuLink>
                    <Link to="/admin/users">Manage Users</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        }
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Menu;