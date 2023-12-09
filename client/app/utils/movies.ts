export type MovieType = {
    id: number;
    name: string;
    src: string;
    alt: string;
    description: string;
  };
  
export const fetchMovies = async (): Promise<MovieType[]>=> {
    const res = await fetch("http://localhost:8000/api/movies", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  
    const moviesDB = await res.json();
  
    const movies: MovieType[] = moviesDB.map((movie: any) => ({
      id: movie.id,
      name: movie.name,
      src: movie.src,
      alt: movie.alt,
      description: movie.description,
    }));
    return movies;
  };

export const fetchMovie = async (movieId: number): Promise<MovieType | null> => {
    const res = await fetch(`http://localhost:8000/api/movies/${movieId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
  
    const movieDB = await res.json();

    const movie: MovieType = {
      id: movieDB.id,
      name: movieDB.name,
      src: movieDB.src,
      alt: movieDB.alt,
      description: movieDB.description,
    };
  
    return movie;
  };
  
