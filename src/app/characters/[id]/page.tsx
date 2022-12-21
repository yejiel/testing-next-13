import { getCharacterDetails } from "@/server/fetch";
import Link from "next/link";

export default async function CharacterDetail({
  params,
}: {
  params: { id: number };
}) {
  const character = await getCharacterDetails(params.id);

  return (
    <div className="bg-white m-3 rounded-md p-5 shadow-md">
      <Link href="/characters">Back</Link>
      <h2 className="text-2xl mt-2 mb-3 font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate capitalize">
        {character.name}
      </h2>
      <h3>Height: {character.height}</h3>
      <h3>Birth Year: {character.birth_year}</h3>
      <h3>Eye Color: {character.eye_color}</h3>
    </div>
  );
}
