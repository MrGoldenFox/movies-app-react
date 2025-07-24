exports.handler = async function () {
  const API_KEY = process.env.TMDB_API_KEY;
  const fetch = (await import("node-fetch")).default;

  console.log("TMDB_API_KEY exists:", !!API_KEY); // ✅ проверить что ключ подгрузился

  const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`);

  if (!res.ok) {
    const errorText = await res.text();
    console.error("TMDB ERROR:", res.status, errorText); // ✅ покажет ошибку TMDB
    return {
      statusCode: res.status,
      body: `TMDB error: ${errorText}`
    };
  }

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};