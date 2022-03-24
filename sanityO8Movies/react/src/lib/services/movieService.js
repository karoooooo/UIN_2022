import client from '../client'

const movieFields = `  
  title,
  'actor': actor->full_name,
  'slug': slug.current,
  _id,
`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${movieFields}}`,
    { slug }
  )
  return data?.[0]
}
