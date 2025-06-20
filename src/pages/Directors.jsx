import { useEffect, useState } from "react";
import DirectorCard from "../components/DirectorCard";
import NavBar from "../components/NavBar";


const Directors = () => {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then(res => res.json())
      .then(directorsData => setDirectors(directorsData))
  }, [])

  const renderDirectors = directors.map((director) => (
    <DirectorCard key={director.id} id={director.id} name={director.name} movies={director.movies} />
  ))

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Directors Page</h1>
      <main>
        {directors && renderDirectors}
      </main>
    </>
  );
};

export default Directors;
