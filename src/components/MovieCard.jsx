import { useState } from "react";

export function MovieCard({ movie }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="blur-container flex-1/2 sm:flex-1/3 md:flex-1/4 lg:flex-1/5 xl:flex-1/6 flex-col">
      <img
        src={movie.image.original}
        alt={movie.name}
        className="w-full h-90 rounded-tr-4xl rounded-tl-4xl"
      />

      <div className="py-2 px-4 w-full flex flex-col flex-1">
        <h3 className="mb-1  drop-shadow-[0_0_4px_var(--accent)]">
          {movie.name}
        </h3>

        <p className="flex gap-2 mb-3">
          Rating:
          <span className="font-light text-[var(--golden)] block">
            {movie.rating.average}⭐️
          </span>
        </p>

        <p className="text-md font-bold uppercase">Description:</p>
        <span
          dangerouslySetInnerHTML={{
            __html: movie.summary.replace(/^<p>/i, "").replace(/<\/p>$/i, ""),
          }}
          className={
            expanded
              ? "text-balance body"
              : "text-balance line-clamp-3-html body"
          }
        ></span>
        <button
          onClick={() => {
            setExpanded(!expanded);
          }}
          className="text-[var(--accent)] block mr-auto p-4 -ml-4 -mt-1"
        >
          {expanded ? "Less" : "More..."}
        </button>

        <div className="mt-auto flex gap-1 flex-wrap">
          {movie.genres.map((genre) => (
            <span
              key={genre}
              className="py-2 px-4 bg-[var(--bg)]/40 rounded-4xl backdrop-blur-xl min-w-max text-xs block border-1 border-white/10 text-nowrap"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
