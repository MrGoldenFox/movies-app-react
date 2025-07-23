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
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setMovies(data.slice(0, 20));
      setTopRated(data.filter((movie) => movie.rating.average > 8.5));
      setLoading(false);
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
