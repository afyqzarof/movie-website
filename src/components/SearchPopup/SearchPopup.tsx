import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";

function SearchPopup() {
  return (
    <Dialog>
      <DialogTrigger>Search</DialogTrigger>
      <DialogContent>
        <article>
          <form className="form">
            <label htmlFor="search"></label>
            <input type="text" name="search" id="search" />
            <button type="submit">Search</button>
          </form>
        </article>
      </DialogContent>
    </Dialog>
  );
}

export default SearchPopup;
