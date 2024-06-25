import { NowPlaying } from "@/types/NowPlaying";
import React from "react";
import MovieCard from "../MovieCard";

type MovieCarouselProps = { movieData: NowPlaying | undefined };

function MovieCarousel({ movieData }: MovieCarouselProps) {
  return (
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
  );
}

export default MovieCarousel;
