exports.handler = async function () {
  const API_KEY = process.env.TMDB_API_KEY;
  const fetch = (await import("node-fetch")).default;

  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};