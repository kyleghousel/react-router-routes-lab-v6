import { useEffect, useState } from "react";
import ActorCard from '../components/ActorCard'
import NavBar from "../components/NavBar";

const Actors = () => {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then(res => res.json())
      .then(actorsData => setActors(actorsData))
  }, [])

  const renderActors = actors.map((actor) => (
    <ActorCard key={actor.id} id={actor.id} name={actor.name} movies={actor.movies} />
  ))

  return (
    <>
      <header>
        <NavBar />
      </header>
      <h1>Actors Page</h1>
      <main>
        {actors && renderActors}
      </main>
    </>
  );
};

export default Actors;
