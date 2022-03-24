import { NavLink } from 'react-router-dom'
import Title from './Title'

function Navigation() {
  return (
    <header>
      <NavLink to="/home"><Title title="ich bin die B" /></NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Hjem</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/actors">Actors</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
