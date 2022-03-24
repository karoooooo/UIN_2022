import client from '../client'

const actorFields = `  
  'slug': slug.current,
  full_name,
  _id,
  `

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  return data
}

export const getActor = async (slug) => {
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
    { slug }
  )
  return data?.[0]
}
