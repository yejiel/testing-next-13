import { getCharacters, getShips } from "@/server/fetch";
import Link from "next/link";

export default async function Ships() {
  const ships = await getShips();

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {ships.results.map(({ name, url }) => (
        <Link
          key={name}
          href={`/ships/${url.substring(url.indexOf("ships/") + 6)}`}
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
  const characters = await getShips();

  return characters.results.map(({ url }) => ({
    slug: `/ships/${url.substring(url.indexOf("ships/") + 6)}`,
  }));
}
