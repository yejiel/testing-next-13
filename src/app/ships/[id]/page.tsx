import { getShipDetails } from "@/server/fetch";
import Link from "next/link";
import React from "react";

export default async function ShipDetails({
  params,
}: {
  params: { id: number };
}) {
  const ship = await getShipDetails(params.id);
  return (
    <div className="bg-white m-3 rounded-md p-5 shadow-md">
      <Link href="/ships">Back</Link>
      <h2 className="text-2xl mt-2 mb-3 font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate capitalize">
        {ship.name}
      </h2>
      <h3>Manufacturer: {ship.manufacturer}</h3>
      <h3>Model: {ship.model}</h3>
      <h3>Crew: {ship.crew}</h3>
    </div>
  );
}
