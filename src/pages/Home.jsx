import { Hero } from "../components/Hero";
import { MovieSection } from "../components/MovieSection";

export default function Home({ movies, loading }) {
  return (
    <>
      <Hero />
      <MovieSection movies={movies} title="Explore movies" loading={loading}/>
    </>
  );
}
