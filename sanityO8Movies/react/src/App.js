import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import DefaultLayout from './layout/DefaultLayout'
import Home from './pages/Home'
import Actor from './pages/Actor'
import Actors from './pages/Actors'
import Movie from './pages/Movie'
import Movies from './pages/Movies'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":slug" element={<Movie />} />
          </Route>
          <Route path="actors">
            <Route index element={<Actors />} />
            <Route path=":slug" element={<Actor />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
