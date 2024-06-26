import getNowPlaying from "@/lib/getNowPlaying";
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import NowPlayingNav from "@/components/NowPlayingNav/NowPlayingNav";
import PageBtns from "@/components/PageBtns/PageBtns";

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
      <NowPlayingNav pageNum={pageNum} />
      <MovieCarousel movieData={movieData} />
      <PageBtns pageNum={pageNum} />
    </>
  );
};

export default NowPlayingPage;
