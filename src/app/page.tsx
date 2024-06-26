import getNowPlaying from "@/actions/getNowPlaying";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import NowPlayingNav from "@/components/NowPlayingNav/NowPlayingNav";
import PageBtns from "@/components/PageBtns/PageBtns";

export default async function Home() {
  const movieData = await getNowPlaying();

  return (
    <>
      <NowPlayingNav pageNum={1} />
      <MovieCarousel movieData={movieData} />
      <PageBtns pageNum={1} />
    </>
  );
}
