const fetch = require("node-fetch");

exports.handler = async function () {
  const API_KEY = process.env.TMDB_API_KEY;

  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "TMDB_API_KEY not found" }),
    };
  }

  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      const text = await res.text();
      return {
        statusCode: res.status,
        body: JSON.stringify({
          error: "TMDB responded with error",
          details: text,
        }),
      };
    }

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Unexpected error", message: err.message }),
    };
  }
};
