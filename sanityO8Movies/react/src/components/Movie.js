import React from 'react'

export default function Movie({ title, actor }) {
  return (
    <article>
      <b>Title: {title}</b>
      <i>Actor: {actor}</i>
    </article>
  )
}
