import Link from "next/link";
import React from "react";
import PageBtns from "../PageBtns/PageBtns";

type NowPlayingNavProps = {
  pageNum: number;
};

function NowPlayingNav({ pageNum }: NowPlayingNavProps) {
  return (
    <nav className="flex w-full flex-col items-center gap-4">
      <h1 className="text-4xl font-extralight">Now Playing</h1>
      <PageBtns pageNum={pageNum} />
      <p className="self-end">Page {pageNum}</p>
    </nav>
  );
}

export default NowPlayingNav;
