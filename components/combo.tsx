import React from "react";
import { Button } from "./ui/button";

const ComboPage = () => {
  return (
    <section className="w-full py-12 lg:py-24">
      <div className="container px-4 grid max-w-5xl items-center justify-center gap-4 text-center md:gap-8 md:px-6 xl:max-w-6xl">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Character Combos
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Master your character with these combos.
          </p>
        </div>
      </div>
      <div className="container max-w-5xl flex flex-col min-[600px]:grid gap-4 px-4 md:gap-8 md:grid-cols-2 lg:max-w-6xl xl:gap-10">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">Character Name</h3>
          <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
            Description of the character and their playstyle. Description of the
            character and their playstyle. Description of the character and
            their playstyle. Description of the character and their playstyle.
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">Combo Name</h3>
          <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
            Description of the combo and when it should be used. Description of
            the combo and when it should be used. Description of the combo and
            when it should be used. Description of the combo and when it should
            be used.
          </p>
          <Button
            className="border-gray-200 border-gray-200 border bg-white shadow-sm w-24 hover:translate-y-0.5 transition-transform translate-y-0.5 translate-y-1px translate-y-1px rounded-md dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:translate-y-0.5 dark:translate-y-0.5 dark:translate-y-1px dark:translate-y-1px"
            size="sm"
            variant="outline"
          >
            Expand
          </Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">Combo Name</h3>
          <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
            Description of the combo and when it should be used. Description of
            the combo and when it should be used. Description of the combo and
            when it should be used. Description of the combo and when it should
            be used.
          </p>
          <Button
            className="border-gray-200 border-gray-200 border bg-white shadow-sm w-24 hover:translate-y-0.5 transition-transform translate-y-0.5 translate-y-1px translate-y-1px rounded-md dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:translate-y-0.5 dark:translate-y-0.5 dark:translate-y-1px dark:translate-y-1px"
            size="sm"
            variant="outline"
          >
            Expand
          </Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">Combo Name</h3>
          <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
            Description of the combo and when it should be used. Description of
            the combo and when it should be used. Description of the combo and
            when it should be used. Description of the combo and when it should
            be used.
          </p>
          <Button
            className="border-gray-200 border-gray-200 border bg-white shadow-sm w-24 hover:translate-y-0.5 transition-transform translate-y-0.5 translate-y-1px translate-y-1px rounded-md dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:translate-y-0.5 dark:translate-y-0.5 dark:translate-y-1px dark:translate-y-1px"
            size="sm"
            variant="outline"
          >
            Expand
          </Button>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">Combo Name</h3>
          <p className="text-sm leading-loose text-gray-500 md:text-base dark:text-gray-400">
            Description of the combo and when it should be used. Description of
            the combo and when it should be used. Description of the combo and
            when it should be used. Description of the combo and when it should
            be used.
          </p>
          <Button
            className="border-gray-200 border-gray-200 border bg-white shadow-sm w-24 hover:translate-y-0.5 transition-transform translate-y-0.5 translate-y-1px translate-y-1px rounded-md dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:translate-y-0.5 dark:translate-y-0.5 dark:translate-y-1px dark:translate-y-1px"
            size="sm"
            variant="outline"
          >
            Expand
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComboPage;
