import Link from "next/link";

type MovieCardProps = {
  title: string;
  imgSrc: string | null;
  releaseDate: Date;
  rating: number;
  id: string;
};

function MovieCard({ title, imgSrc, releaseDate, rating, id }: MovieCardProps) {
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMG_BASE_URL;
  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
  };

  const date = new Date(releaseDate);
  return (
    <Link href={`/movie/${id}`} className="flex h-full">
      <article className="flex w-full flex-col gap-4 rounded border-2 border-black p-4">
        <img
          src={imgSrc ? imgBaseUrl + imgSrc : "/poster-not-found.png"}
          alt={title}
          className="w=full"
        />
        <div className="flex flex-col">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <p className="text-lg">{date.toLocaleDateString("en", options)}</p>
          <p className="text-lg">{rating.toFixed(1)} / 10</p>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;
