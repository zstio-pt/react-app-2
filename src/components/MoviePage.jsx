import { useState, useEffect } from "react";

function MoviePage({ movieId }) {
  const [movie, setMovie] = useState(null);

  // Wydzielona funkcja pomocnicza dla czytelności
  async function fetchMovieData(id) {
    const response = await fetch(`https://api.sampleapis.com/movies/comedy/${id}`);
    const data = await response.json();

    setMovie(data);
  }

  useEffect(() => {
    fetchMovieData(movieId);
  }, [movieId]);

  return (
    <div>
      {movie ? (
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.imdbId}</p>
          <img src={movie.posterURL} alt={movie.title} />
        </div>
      ) : (
        <p>Ładowanie...</p>
      )}
    </div>
  );
}

export default MoviePage;
