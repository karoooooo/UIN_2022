import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Case from '../components/Case'
import Title from '../components/Title'
import { getActor } from '../lib/services/actorService'

export default function Actor() {
  const [actor, setActor] = useState(null)
    const { slug } = useParams()

  useEffect(() => {
    const getActorData = async () => {
      const data = await getActor(slug)
        setActor(data)
    }
    getActorData()
  }, [slug])

  return (
    <Case key={actor.slug}>
      <article>
        {/* {JSON.stringify(actor.current)} */}
        <Title title={actor.full_name} />
        <p>{actor.slug}</p>
      </article>
    </Case>
  )
}
// TODO: add variable name //
