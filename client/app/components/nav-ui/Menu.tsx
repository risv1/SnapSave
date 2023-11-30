import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Link } from "@remix-run/react";
const Menu = () => {
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
          <NavigationMenuItem>
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
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-xl">
              Streams
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Menu;
