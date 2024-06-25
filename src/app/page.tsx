import MovieCard from "@/components/MovieCard";
import { NowPlaying } from "@/types/types";
import axios, { AxiosResponse } from "axios";

async function getNowPlaying(page: number = 1) {
  const baseUrl = process.env.BASE_URL;
  const apiKey = process.env.API_KEY;
  try {
    const res:AxiosResponse<NowPlaying> = await axios.get(
      `${baseUrl}/movie/now_playing?api_key=${apiKey}&page=${page}`,
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const movieData = await getNowPlaying();

  return (
    <main className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-5xl font-extralight">Now Playing</h1>
      <nav>
        <button>Next</button>
      </nav>
      <section className="flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:items-start md:grid-cols-3">
        {movieData?.results.map((movie) => {
          return (
            <div key={movie.id} className="h-full">
              <MovieCard
                title={movie.title}
                imgSrc={movie.poster_path}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}
