import { useEffect, useMemo, useState } from "react";
import { MovieCard } from "./MovieCard";

export function MoviesList({ movies, loading, searchInput }) {
  const movieCards = useMemo(() => {
    return movies.map((movie) => <MovieCard movie={movie} key={movie.id} />);
  }, [movies]);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 min-h-screen">
      {loading ? (
        <LoadingDots />
      ) : movieCards.length > 0 ? (
        movieCards
      ) : (
        `We couldn't find any movies matching: ${searchInput}`
      )}
    </div>
  );
}

function LoadingDots() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="col-span-full text-center py-10 text-xl font-semibold">
      Loading{dots}
    </div>
  );
}
