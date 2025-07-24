import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Trends from "./pages/Trends.jsx";
import { Header } from "./components/Header.jsx";
import { useEffect, useMemo, useState } from "react";
import { ScrollToTop } from "./utils/ScrollToTop.jsx";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch("/api/trending");
        const data = await response.json();

        console.log(data.results)

        setMovies(data.results);
        setTopRated(data.results.filter((movie) => movie.vote_average > 6));
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    }

    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto px-[5vw] py-4">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home movies={movies} loading={loading} />} />
        <Route
          path="/trends"
          element={<Trends movies={topRated} loading={loading} />}
        />
      </Routes>
    </div>
  );
}
