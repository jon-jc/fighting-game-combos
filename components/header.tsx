import { MountainIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const HeaderPage = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Fighting Game Combos</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/characters"
        >
          Characters
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/combos"
        >
          Combos
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Special Moves
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Strategies
        </Link>
      </nav>
    </header>
  );
};

export default HeaderPage;
