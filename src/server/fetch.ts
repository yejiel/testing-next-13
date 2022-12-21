export const getCharacters = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  const data = await res.json();
  return data as CharactersList;
};

export interface CharactersList {
  results: Character[];
}

export interface Character {
  name: string;
  url: string;
  height: string;
  hair_color: string;
  birth_year: string;
  eye_color: string;
}

export const getCharacterDetails = async (id: number) => {
  const res = await fetch(`https://swapi.dev/api/people/${id}`);
  const data = await res.json();
  return data as Character;
};

export const getShips = async () => {
  const res = await fetch("https://swapi.dev/api/starships");
  const data = await res.json();
  return data as SpaceshipList;
};

export interface SpaceshipList {
  results: Spaceship[];
}

export interface Spaceship {
  name: string;
  url: string;
  model: string;
  manufacturer: string;
  crew: string;
}

export const getShipDetails = async (id: number) => {
  const res = await fetch(`https://swapi.dev/api/starships/${id}`);
  const data = await res.json();
  return data as Spaceship;
};
