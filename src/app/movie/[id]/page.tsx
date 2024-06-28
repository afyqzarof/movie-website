import getMovieDetails from "@/lib/getMovieDetails";

type MoviePageProps = {
  params: {
    id: string;
  };
};
async function MoviePage({ params }: MoviePageProps) {
  const imgUrl = process.env.NEXT_PUBLIC_IMG_BASE_URL;
  const movieId = params.id;
  const movieData = await getMovieDetails(movieId);
  const date = new Date(movieData?.release_date || "");
  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
  };

  return (
    <main className="flex flex-col gap-4 md:flex-row">
      <img
        src={
          movieData?.poster_path
            ? imgUrl + movieData.poster_path
            : "poster-not-found.png"
        }
        alt={movieData?.title}
      />
      <div className="flex max-w-2xl flex-col gap-2">
        <h1 className="text-2xl">{movieData?.title}</h1>
        <p>{date.toLocaleDateString("en", options)}</p>
        <p className="text-lg">{movieData?.vote_average.toFixed(1)} / 10</p>
        <p className="text-lg">{movieData?.overview}</p>
        <div className="flex flex-wrap gap-4">
          {movieData?.genres.map((genre) => {
            return (
              <p className="rounded-full bg-slate-700 px-2 py-1 text-white">
                {genre.name}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default MoviePage;
