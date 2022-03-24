import sanityClient from '@sanity/client'

const options = {
  projectId: 'g33oghdx',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token: process.env.REACT_APP_SANITY_TOKEN,
}

const client = sanityClient({
  ...options,
  useCdn: false,
})

export default client
