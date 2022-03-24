import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getMovie } from '../lib/services/movieService'
import Case from '../components/Case'
import Title from '../components/Title'

export default function Movie() {
  const [movie, setMovie] = useState(null)
  const { title, actor } = useParams()

  useEffect(() => {
    const getMovieData = async () => {
      const movieData = await getMovie()
      setMovie(movieData)
    }
    getMovieData()
  }, [title, actor])

  return (
    <Case>
      <Title title={movie.title}>{movie.title}</Title>
      <p>{movie.actor}</p>
    </Case>
  )
}
