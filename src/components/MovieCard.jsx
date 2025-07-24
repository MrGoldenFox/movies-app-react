import { useEffect, useRef, useState } from "react";
import { GENRE_MAP } from "../constants/genres";

export function MovieCard({ movie }) {
  const [expanded, setExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descRef = useRef();

  useEffect(() => {
    const el = descRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight + 1);
    }
  }, [movie.overview]);

  return (
    <article className="blur-container flex flex-col h-full">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-90 rounded-tr-4xl rounded-tl-4xl"
      />

      <div className="py-2 px-4 w-full flex flex-col justify-between h-full">
        <h3 className="mb-1  drop-shadow-[0_0_4px_var(--accent)]">
          {movie.title}
        </h3>

        <p className="flex gap-2 mb-3">
          Rating:
          <span className="font-light text-[var(--golden)] block">
            {Math.floor(Math.round(movie.vote_average))}⭐️
          </span>
        </p>

        <p className="text-md font-bold uppercase">Description:</p>
        <span
          className={expanded ? " body" : " line-clamp-3-html body"}
          ref={descRef}
        >
          {movie.overview}
        </span>
        {isClamped && (
          <button
            onClick={() => {
              setExpanded(!expanded);
            }}
            className="text-[var(--accent)] block mr-auto p-4 -ml-4 -mt-1"
          >
            {expanded ? "Less" : "More..."}
          </button>
        )}

        <div className="mt-auto flex gap-1 flex-wrap">
          {movie.genre_ids.map((genreId) => (
            <span
              key={genreId}
              className="py-2 px-4 bg-[var(--bg)]/40 rounded-4xl backdrop-blur-xl min-w-max text-xs block border-1 border-white/10 text-nowrap"
            >
              {GENRE_MAP[genreId]}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
