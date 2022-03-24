import { NavLink } from 'react-router-dom'
import Title from '../components/Title'

export default function Home() {
  return (
    <NavLink to="/movies">
      <Title title="> to the movies" />
    </NavLink>
  )
}
// TODO: Legge inn referanse til MovieList //
