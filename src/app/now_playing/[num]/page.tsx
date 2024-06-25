import getNowPlaying from "@/actions/getNowPlaying";
import MovieCarousel from "@/components/MovieCarousel";
import NowPlayingNav from "@/components/NowPlayingNav";

type Params = {
  num: string;
};
type NowPlayingPageProps = {
  params: Params;
};

const NowPlayingPage = async ({ params }: NowPlayingPageProps) => {
  const pageNum = Number(params.num);
  const movieData = await getNowPlaying(pageNum);

  return (
    <>
      <NowPlayingNav pageNum={pageNum}/>
      <MovieCarousel movieData={movieData} />
    </>
  );
};

export default NowPlayingPage;
