import { getCharacters } from "@/server/fetch";
import Link from "next/link";

export default async function Characters() {
  const characters = await getCharacters();

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {characters.results.map(({ name, url }) => (
        <Link
          key={name}
          href={`/characters/${url.substring(url.indexOf("people/") + 7)}`}
        >
          <div
            className="bg-white p-3 text-center drop-shadow-md hover:bg-red-500 hover:text-white transition-all"
            key={name}
          >
            {name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  const characters = await getCharacters();

  return characters.results.map(({ url }) => ({
    slug: `/characters/${url.substring(url.indexOf("people/") + 7)}`,
  }));
}
