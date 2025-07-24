import { useState } from "react";
import { HeaderMovie } from "../components/HeaderMovie";
import { MoviesList } from "../components/MoviesList";

export function MovieSection({ movies, title, loading }) {
  const [searchInput, setSearchInput] = useState("");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section>
      <HeaderMovie
        setSearchInput={setSearchInput}
        searchInput={searchInput}
        title={title}
      />
      <MoviesList movies={filteredMovies} searchInput={searchInput} loading={loading}/>
    </section>
  );
}
