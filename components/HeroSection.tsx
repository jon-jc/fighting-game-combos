import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <main className="grid min-h-[800px] items-center justify-center bg-gray-100 py-12 lg:py-24 dark:bg-gray-800">
      <div className="container grid items-center gap-6 px-4 text-center md:px-6">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
            Guilty Gear Strive
          </h1>

          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            The most stylish 2D fighter yet. Master the mechanics of Guilty Gear
            and unleash devastating combos.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <Input
              className="flex-1"
              placeholder="Search for combos"
              type="search"
            />
            <Button type="submit">Search</Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
