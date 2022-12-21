import Link from "next/link";
import { ReactNode } from "react";
import "../../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex min-h-screen overflow-auto">
        <main className="flex-shrink w-1/12">
          <ul>
            <Link href="/characters">
              <li className="text-center uppercase hover:underline hover:text-red-600 py-2">
                Characters
              </li>
            </Link>
            <Link href="/ships">
              <li className="text-center uppercase hover:underline hover:text-red-600 py-2">
                Ships
              </li>
            </Link>
          </ul>
        </main>
        <section className="flex-grow bg-gray-100 w-11/12">{children}</section>
      </body>
    </html>
  );
}
