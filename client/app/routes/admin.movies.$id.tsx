import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "~/components/Navbar";
import { MovieType, fetchMovie } from "~/utils/movies";
import { checkUserRole } from "~/utils/users";

const ManageMovie = () => {
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

  const { id } = useParams();
  const params = useParams();
  const movieId = id ? parseInt(id, 10) : 0;

  const [movie, setMovie] = useState<MovieType | null>({
    id: 0,
    name: "",
    src: "",
    alt: "",
    description: "",
  });

  const fetchMovieData = async () => {
    const movieData = await fetchMovie(movieId);
    setMovie(movieData);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  const onSave = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!movie) {
      console.error("Movie data is null. Cannot save.");
      return;
    }
    const res = await fetch(
      `http://localhost:8000/api/admin/movies/${params.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(movie),
      }
    );
    if (!res.ok) {
      console.log("Form data not sent");
    } else {
      console.log("Form data sent succesfully");
    }
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const srcRef = useRef<HTMLInputElement>(null);
  const altRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.value = movie?.name || "";
    }
    if (srcRef.current) {
      srcRef.current.value = movie?.src || "";
    }
    if (altRef.current) {
      altRef.current.value = movie?.alt || "";
    }
    if (descRef.current) {
      descRef.current.value = movie?.description || "";
    }
  }, [movie]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie((prevMovie: any) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const goTo = useNavigate();

  const handleRoute = () => {
    goTo("/admin/movies");
  };

  return (
    <>
      <Navbar />
      {isAdmin ? (
        <div className="bg-neutral-200 w-full h-full p-6">
          <form className="flex flex-col items-center">
            <input
              disabled
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="id"
              placeholder={params.id}
            />
            <input
              ref={nameRef}
              onChange={handleChange}
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="name"
              placeholder={movie?.name}
            />
            <input
              ref={srcRef}
              onChange={handleChange}
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="src"
              placeholder={movie?.src}
            />
            <input
              ref={altRef}
              onChange={handleChange}
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              type="text"
              name="alt"
              placeholder={movie?.alt}
            />
            <input
              ref={descRef}
              onChange={handleChange}
              type="text"
              name="description"
              className="border border-gray-400 p-2 mb-2 rounded w-full max-w-xl h-full"
              placeholder={movie?.description}
            />
            <div className="mt-3">
              <button
                onClick={onSave}
                className="bg-blue-500 text-white p-2 rounded w-20 hover:bg-blue-600 focus:outline-none focus:border-blue-700 focus:ring focus:ring-blue-200"
              >
                Save
              </button>
              <button
                onClick={handleRoute}
                className="bg-red-500 text-white p-2 w-20 ml-3 rounded hover:bg-red-600 focus:outline-none focus:border-red-700 focus:ring focus:ring-blue-200"
              >
                Cancel
              </button>
            </div>
          </form>
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

export default ManageMovie;
