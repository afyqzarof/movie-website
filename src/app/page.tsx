import getNowPlaying from "@/actions/getNowPlaying";
import MovieCarousel from "@/components/MovieCarousel";
import NowPlayingNav from "@/components/NowPlayingNav";

export default async function Home() {
  const movieData = await getNowPlaying();

  return (
    <>
      <NowPlayingNav pageNum={1}/>
      <MovieCarousel movieData={movieData} />
    </>
  );
}
