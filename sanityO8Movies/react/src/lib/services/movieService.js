import client from '../client.js'

// må være sikker på hva som skal hentes//

// const movieFields = ` 
//    'movie': movie.current,
//    'actor': actor->title,
// `

// const movieFields = {
//   name: 'movie',
//   fields: [
//     {
//       name:'full_name',
//     },
//     {
//       name: 'actor'
//     },
//   ],
// }


export const getMovies = async () => {
  const data = await client.fetch(`*[]`)
  return data
}

// export const getEvents = async (slug) => {
//   const data = await client.fetch(
//     `*[_type == "movie" && slug.current == $slug]{${eventFields}}, { slug }`)
//   return data
// };

// trenger jeg det med slug?
