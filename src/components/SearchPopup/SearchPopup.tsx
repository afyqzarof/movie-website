"use client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";

import { useRouter } from "next/navigation";

import React, { FormEvent } from "react";

function SearchPopup() {
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const searchInput = form.search as HTMLInputElement;

    router.push(`/search?query=${searchInput.value}`);
  };
  return (
    <Dialog>
      <DialogTrigger className="text-black">Search</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogTitle>Search for a movie</DialogTitle>
        <article>
          <form
            className="flex flex-col items-end gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center gap-4">
              <label htmlFor="search" className="">
                Search:
              </label>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Type here"
                className="w-full rounded border border-black p-2 outline-none"
              />
            </div>
            <DialogClose asChild>
              <button
                type="submit"
                className="rounded-full bg-black px-4 py-2 text-white"
              >
                Search
              </button>
            </DialogClose>
          </form>
        </article>
      </DialogContent>
    </Dialog>
  );
}

export default SearchPopup;
