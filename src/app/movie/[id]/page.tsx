import getMovieDetails from "@/lib/getMovieDetails"

type MoviePageProps = {
  params: {
    id: string;
  };
};
async function MoviePage({ params }: MoviePageProps) {
  const movieId = params.id;
  const movieData = await getMovieDetails(movieId)
  console.log(movieData);
  
  return <div>MoviePage</div>;
}

export default MoviePage;

