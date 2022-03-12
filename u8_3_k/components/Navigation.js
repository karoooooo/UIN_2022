import { Link, NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header>
      <nav>
        <Link to="/" id="logo">
          Logo
        </Link>
        <ul>
            <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to="/"
                Hjem
            </NavLink>
            </li>
            <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to="posts"
                Articles
            </NavLink>
            </li>
            <li>
            <NavLink
              className={({isActive}) => (isActive ? 'active' : '')}
              to="services"
                Tjenester
            </NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}
