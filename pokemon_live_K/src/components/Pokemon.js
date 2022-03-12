// Henter disse nøklene fra en annen funksjon

import { useState } from 'react'

// hente visse props som også blir brukt her, de står i APIen til Pokemons
export default function Pokemon({ url, name }) {
  const [experience, setExperience] = useState(false)

  const getPokemon = async () => {
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.base_experience)
    // console.log(data.results)
    setExperience(data.base_experience)
    // setPokemons(data.results)
  }


  // const showExperience = () => {
  //   setShow(!show)
  // }

  return (
    <article>
      <h2>{name}</h2>
      <p>URL: ({url})</p>
      //State: experience, if it has, show the value of exp.
      {experience ? <p>Experience: {experience}</p> : null}
      <button onClick={() => getPokemon(url)} type="button">
        See experience
      </button>
    </article>
  )
}
