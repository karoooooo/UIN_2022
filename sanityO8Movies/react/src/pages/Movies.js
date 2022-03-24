import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getMovies } from '../lib/services/movieService'
import Title from '../components/Title'
import Case from '../components/Case'


function MovieList({ movies }) {
  return (
    <>        {/* {JSON.stringify(movie)} */}
      {movies?.map((movie) => (
        <article key={movie.slug}>
          <h2>{movie.title}</h2>
          <i>En medvirkende skuespiller:</i>
          <h3>{movie.actor}</h3>
         {/* <Link to={movie.slug}>
          <button type="button">
            Les mer om {movie.title}
          </button>          
          </Link> */}
        </article>
      ))}
    </>
  )
}


export default function Movies() {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    const getMovieData = async () => {
    const data = await getMovies([])
    setMovies(data)      
    }
    getMovieData()
  }, [])

  return (
    <section>
    <Title title="Movies" />
    <Case>
    <MovieList movies={ movies } />
    </Case>
    </section>
  )
}
//TODO: lage to props for å sende til Movie.js
