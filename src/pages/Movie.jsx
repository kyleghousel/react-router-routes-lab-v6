import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then(r => r.json())
      .then(movieData => setMovie(movieData))
      .catch(error => console.error(error))
  }, [movieId])

  if (!movie.genres) {
    return <h1>Loading
      ...</h1>
  }

  const renderGenres = movie.genres.map((genre, index) => (
          <span key={index}>{genre}</span>
        ))

  return ( movie &&
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {renderGenres}
      </main>
    </>
  );
};

export default Movie;
