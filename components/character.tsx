import React from "react";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Character = () => {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 items-stretch">
          <Link className="flex w-full items-stretch p-4" href="#">
            <div className="flex space-x-4 items-center w-full">
              <Image
                alt="Ryu"
                className="rounded-lg object-cover"
                height="88"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "88/88",
                  objectFit: "cover",
                }}
                width="88"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
                  Ryu
                </h3>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  The wandering warrior seeks to battle the strongest opponents.
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 ml-auto" />
          </Link>
          <Link className="flex w-full items-stretch p-4" href="#">
            <div className="flex space-x-4 items-center w-full">
              <Image
                alt="Chun-Li"
                className="rounded-lg object-cover"
                height="88"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "88/88",
                  objectFit: "cover",
                }}
                width="88"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
                  Chun-Li
                </h3>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  Interpols finest, seeking justice with a barrage of kicks.
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 ml-auto" />
          </Link>
          <Link className="flex w-full items-stretch p-4" href="#">
            <div className="flex space-x-4 items-center w-full">
              <Image
                alt="Ken"
                className="rounded-lg object-cover"
                height="88"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "88/88",
                  objectFit: "cover",
                }}
                width="88"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
                  Ken
                </h3>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  The fiery disciple of Ansatsuken with a heart of gold.
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 ml-auto" />
          </Link>
          <Link className="flex w-full items-stretch p-4" href="#">
            <div className="flex space-x-4 items-center w-full">
              <Image
                alt="Guile"
                className="rounded-lg object-cover"
                height="88"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "88/88",
                  objectFit: "cover",
                }}
                width="88"
              />
              <div className="space-y-1">
                <h3 className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">
                  Guile
                </h3>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  The stoic soldier fights for peace with sonic booms.
                </p>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 ml-auto" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default Character;
