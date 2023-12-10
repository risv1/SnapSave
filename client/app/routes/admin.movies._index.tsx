import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

import React, { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react"
import { checkUserRole } from "~/utils/users";
import Navbar from "~/components/Navbar";
import { MovieType, fetchMovies } from "~/utils/movies";

const ManageMovies = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userIsAdmin = await checkUserRole();
        setIsAdmin(userIsAdmin);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchUserData();
  }, []);

  const [movies, setmovies] = useState<MovieType[] | null>(null);

  const fetchData = async () => {
    const moviesData = await fetchMovies();
    setmovies(moviesData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const goTo = useNavigate()
    
  const handleRoute = (route: string) => {
      goTo(route)
  }

  return (
    <>
      <Navbar />
      {isAdmin ? (
          <div className="bg-neutral-200 w-full h-full flex justify-center items-center">
          <div className="flex items-center justify-center flex-col">
          <h1 className="text-3xl mt-5 font-bold">Manage Movies</h1>
          <Table className="w-4/6 h-full mt-8 bg-white">
            <TableCaption>All Movies</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Id</TableHead>
                <TableHead className="text-center">
                  Name
                </TableHead>
                <TableHead className="text-center">
                  Image Source
                </TableHead>
                <TableHead className="text-center">
                  Image Alt
                </TableHead>
                <TableHead className="text-center">
                  Description
                </TableHead>
                <TableHead className="text-right">Functions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {movies &&
                movies.map((movie) => (
                  <TableRow
                    key={movie.id}
                    className="border border-neutral-500"
                  >
                    <TableCell className="p-2">{movie.id}</TableCell>
                    <TableCell className="p-2">{movie.name}</TableCell>
                    <TableCell className="p-2">{movie.src}</TableCell>
                    <TableCell className="p-2">{movie.alt}</TableCell>
                    <TableCell className="p-2" colSpan={3}>{movie.description}</TableCell>
                    <TableCell className="p-2">
                    <button onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleRoute(`/admin/movies/${movie.id}`)} className="text-white text-base rounded p-1 w-16 bg-green-500 hover:bg-green-700">
                          Edit
                        </button>
                      <button className="text-white text-base rounded mt-2 p-1 w-16 bg-red-500 hover:bg-red-700">
                        Delete
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="flex justify-items-center">
            <h1 className="text-4xl">Not Authorized</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default ManageMovies;
