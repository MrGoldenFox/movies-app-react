import { MovieSection } from "../components/MovieSection";

export default function Trends({ movies, loading }) {
  return <MovieSection movies={movies} title="Trending movies" loading={loading}/>;
}
