import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="min-h-screen grid gap-4 px-4 md:px-6 max-w-3xl mx-auto">
      <header className="flex items-center py-4">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="#"
        >
          <OctagonIcon className="w-8 h-8" />
          Fight
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-sm font-medium">
          <Link
            className="p-2 rounded-md bg-gray-100 text-gray-900 hover:bg-gray-200"
            href="#"
          >
            Ryu
          </Link>
          <Link className="p-2 rounded-md" href="#">
            Chun-Li
          </Link>
          <Link className="p-2 rounded-md" href="#">
            Ken
          </Link>
          <Link className="p-2 rounded-md" href="#">
            Guile
          </Link>
        </nav>
      </header>
      <main className="grid gap-4 text-sm">
        <div className="flex items-center gap-4">
          <Image
            alt="Character"
            className="rounded-md"
            height="64"
            src="/placeholder.svg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64"
          />
          <div className="grid gap-1">
            <h1 className="text-xl font-semibold">Ryu</h1>
            <p className="text-sm font-normal text-gray-500">
              Master of the Hadouken
            </p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg">
          <div className="p-4 grid gap-4">
            <div className="grid gap-1">
              <h2 className="text-base font-semibold">Hadouken</h2>
              <p className="text-sm font-normal text-gray-500">
                Quarter Circle Forward + Punch
              </p>
            </div>
            <Button size="sm">Copy</Button>
          </div>
          <div className="border-t border-gray-200 p-4 grid gap-4">
            <div className="grid gap-1">
              <h2 className="text-base font-semibold">Shoryuken</h2>
              <p className="text-sm font-normal text-gray-500">
                Forward, Down, Down-Forward + Punch
              </p>
            </div>
            <Button size="sm">Copy</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function OctagonIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    </svg>
  );
}
