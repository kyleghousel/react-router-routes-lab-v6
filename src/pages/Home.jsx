import { useEffect, useState } from "react";
import MovieCard from '../components/MovieCard'
import NavBar from '../components/NavBar'

const Home = () =>{
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(res => res.json())
      .then(movieData => setMovies(movieData))
  }, [])

  const displayMovies = movies.map((movie) => (
    <MovieCard key={movie.id} id={movie.id} title={movie.title}/>
  ))
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home Page</h1>
        {movies && displayMovies}
      </main>
    </>
  );
};

export default Home;
