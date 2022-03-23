import React /* , {useState, useEffect} */ from 'react'
import Movie from './Movie'

function Movies() {
  // [movieData, setMovieData] = useState([title: "", actor:""])
  // useEffect(() => {
  // first

  // return () => {
  //    second
  // }
  // }, [third])

  return (
    <section>
      <Movie title="The Report" actor="Adam Driver" />
      <Movie title="title" actor="actor" />
    </section>
  )
}

export default Movies
