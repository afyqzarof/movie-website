import getNowPlaying from "@/actions/getNowPlaying";
import MovieCard from "@/components/MovieCard";
import MovieCarousel from "@/components/MovieCarousel";
import Link from "next/link";

export default async function Home() {
  const movieData = await getNowPlaying();

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-5xl font-extralight">Now Playing</h1>
      <nav>
        <Link
          href={"/now_playing/2"}
          className="rounded-full bg-slate-950 px-4 py-2 text-lg text-white"
        >
          Next
        </Link>
      </nav>

      <MovieCarousel movieData={movieData} />
    </main>
  );
}
