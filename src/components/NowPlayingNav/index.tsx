import Link from "next/link";
import React from "react";

type NowPlayingNavProps = {
  pageNum: number;
};

function NowPlayingNav({ pageNum }: NowPlayingNavProps) {
  return (
    <nav className="flex w-full flex-col items-center gap-4">
      <h1 className="text-4xl font-extralight">Now Playing</h1>
      <nav className="flex gap-6">
        {pageNum === 1 || (
          <Link
            href={`/now_playing/${pageNum - 1}`}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm text-white"
          >
            Back
          </Link>
        )}
        <Link
          href={`/now_playing/${pageNum + 1}`}
          className="rounded-full bg-slate-950 px-4 py-2 text-sm text-white"
        >
          Next
        </Link>
      </nav>
      <p className="self-end">Page {pageNum}</p>
    </nav>
  );
}

export default NowPlayingNav;
