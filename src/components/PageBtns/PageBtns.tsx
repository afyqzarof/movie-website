import Link from "next/link";

function PageBtns({ pageNum }: { pageNum: number }) {
  return (
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
  );
}

export default PageBtns;
