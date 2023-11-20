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
            <NavigationMenuContent className="absolute z-10">
              <ul className="list-none p-0 m-0">
                <li>
                  <NavigationMenuLink>
                    <Link to="#movies">Recommended Movies</Link>
                  </NavigationMenuLink>
                </li>
                <li>
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
            <NavigationMenuContent className="absolute z-10">
              <ul className="list-none p-0 m-0">
                <li>
                  <NavigationMenuLink>
                    <Link to="#sports">Recommended Sports</Link>
                  </NavigationMenuLink>
                </li>
                <li>
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
