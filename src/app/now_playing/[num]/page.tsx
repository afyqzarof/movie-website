type Params = {
  num: number;
};
type NowPlayingPageProps = {
  params: Params;
};

const NowPlayingPage = ({ params }: NowPlayingPageProps) => {
  const pageNum = params.num;

  return <div>{page}</div>;
};

export default NowPlayingPage;
