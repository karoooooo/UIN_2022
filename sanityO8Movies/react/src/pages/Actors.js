import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getActors } from '../lib/services/actorService'
import Title from '../components/Title'
import Case from '../components/Case'

function ActorList({ actors }) {
  return (
    <>          {/* {JSON.stringify(actor)} */}
      {actors?.map((actor) => (
        <article key={actor.slug}>
          <h2>{actor.full_name}</h2>
          <Link to={`/actors/${actor.slug}`}>
            <button type="button">
              Les mer om {actor.full_name}
            </button>          
          </Link>
        </article>
      ))}
    </>
  )
}


export default function Actors() {
  const [actors, setActors] = useState(null)

  useEffect(() => {
    const getActorsData = async () => {
    const data = await getActors([])
    setActors(data)      
    }
    getActorsData()
  }, [])

  return (
    <section>
      <Title title="Actors" />
      <Case>
        <ActorList actors={ actors } />
      </Case>
    </section>
  )
}
