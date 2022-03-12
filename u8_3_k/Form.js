import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Form() {
  const navigate = useNavigate();
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleCommentChange = (event) => {
    setComment(event.target.value); // dette skrives i text area
    // tilgang til det som skrives i text area
    // setComment gjør at vi får tak i den informasjonen, kjøre den inn på lageret og fylle opp lageret. for å få kontroll på og vise fram riktig versjon, må comment brukes nede. Value = {comment}
  }

  const addComment = (event) => {
    event.preventDefault() // ønsker å gjøre noe med informasjonen før det blir sendt. Det nettleseren vil gjøre skjer ikke med en gang
    setLoading(true) // simulere at vi sender
    setTimeout(() => {
      setSuccess(true) // for å vise at kommentaren er kjent
      setLoading(false) // ønsker å sette knappen tilbake til "send" og ikke "sender..."
    }, 2000) // etter 2 sek, setLoading tilbake til false. Trigger en callbackfunksjon
    console.log(comment)
  }

  return (
    <form method="POST" onSubmit={addComment}>
      {/* // trigger add comment som blir trigga av Send-Knappen// */}
      <h2>Legg igjen en kommentar</h2>
      <label htmlFor="comment">
        Kommentar
        <textarea
          id="comment"
          name="comment"
          cols={15}
          rows={5}
          onChange={handleCommentChange} // endringer i textarea ønsker vi å fange opp ved handleCommentChange
          value={comment} // denne verdien blir oppdatert fordi vi legger den inn i lageret og henter den ut
        />
      </label>
      <button type="submit">{loading ? 'Sender...' : 'Send'}</button>
      {success ? <p>Kommentar sendt</p> : null}
    </form>
  )
}
