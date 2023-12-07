export type SportType = {
  id: number;
  name: string;
  src: string;
  alt: string;
  description: string;
};

export const fetchSports = async (): Promise<SportType[]> => {
  const res = await fetch("http://localhost:8000/api/sports", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const sportsDB = await res.json();

  const sports: SportType[] = sportsDB.map((sport: any) => ({
    id: sport.id,
    name: sport.name,
    src: sport.src,
    alt: sport.alt,
    description: sport.description,
  }));
  return sports;
};

export const fetchSport = async (sportId: number): Promise<SportType | null> => {
  const res = await fetch(`http://localhost:8000/api/sports/${sportId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const sportDB = await res.json();

  const sport: SportType = {
    id: sportDB.id,
    name: sportDB.name,
    src: sportDB.src,
    alt: sportDB.alt,
    description: sportDB.description,
  };

  return sport;
};
