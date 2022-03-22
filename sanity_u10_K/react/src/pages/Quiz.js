import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuiz } from '../../../../sanity_live/src/lib/services/quiz'

export default function Quiz() {
  const [content, setContent] = useState(null)
  const { slug } = useParams()
  useEffect(() => {
    getQuiz = async () => {
      const data = await getQuizBySlug(slug)
      setContent(data)
    }
    getQuiz()
  }, [])

  return <h1>Quiz</h1>
}
