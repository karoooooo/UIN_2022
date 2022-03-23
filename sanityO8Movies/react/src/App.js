import { getMovies } from './lib/services/movieService'
import Movies from './components/Movies'

function App() {
  const getMovieData = async () => {
    const movies = await getMovies()
    console.log(movies)
  }
  return (
    <main>
      <button type="button" onClick={getMovieData}>
        Hent data
      </button>
      <Movies />
    </main>
  )
}

export default App
