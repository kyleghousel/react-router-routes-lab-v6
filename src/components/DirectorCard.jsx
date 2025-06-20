const DirectorCard = ({ id, movies, name }) => {

  const renderMovies = movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))

  return (
    <article key={id}>
      <h2>{name}</h2>
      <ul>
        {movies && renderMovies}
      </ul>
    </article>
  )
}

export default DirectorCard
