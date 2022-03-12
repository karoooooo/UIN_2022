import { useState } from 'react'
import Pokemons from './components/Pokemons'
import Posts from './components/Posts'

// const pokemons = [
//   { id: 1, name: 'Bulbasaur' },
//   { id: 2, name: 'Ivysaur' },
// ]

// hvis vi ikke bruker tom liste inni useState vil hvert tilfelle feile, men vi bør ha den med selv om vi ikke får skrevet ut noe.

function App() {
  const [pokemons, setPokemons] = useState([])

  const getPokemons = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    // query-parameter ?limit så vi kun får tilbake 25
    const data = await response.json()
    console.log(data.results)
    setPokemons(data.results)
  }

  return (
    <main className="mx-auto max-w-sm mt-6 border-2 p-6">
      <Pokemons pokemons={pokemons} />
      <button onClick={getPokemons} type="button">
        Hent Pokémons
      </button>
      <Posts data={data} />
    </main>
  )
}

export default App
