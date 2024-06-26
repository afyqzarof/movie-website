import MovieCarousel from "@/components/MovieCarousel/MovieCarousel";
import getSearch from "@/lib/getSearch";

type SearchProps = {
  searchParams: {
    query: string;
  };
};
async function Search({ searchParams }: SearchProps) {
  const query = searchParams.query;
  const movieData = await getSearch(query);
  console.log(movieData);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-3xl">Search results for '{query}'</h1>
      <section>
        <MovieCarousel movieData={movieData} />
      </section>
    </div>
  );
}

export default Search;
