import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getQuizBySlug } from '../lib/services/quiz'

export default function Quiz() {
  const {current, setCurrent} = useState(0)
  const [content, setContent] = useState(null)
  // const [answers, setAnswers] = useState
  // const checkedAnswer = answers[current]
  // const isFail = !checkedAnswer?.correct
  const currentQuestion = content?.questions.[current]
  const { slug } = useParams();
  
  useEffect(() => {
    const getQuiz = async () => {
      const data = await getQuizBySlug(slug)
      setContent(data)
    };
    getQuiz();
  }, [slug])

// const 
// const progress = () => {
//   setCurrent((prev) => prev+1)
// }  

  return (
    <div>
      <h1>Quiz</h1>
      {JSON.stringify(content)}
    </div>
  )
}

/*




<section key={currentQuestion?._key}>
<Question title={currentQuestion?.title} />
{currentQuestion?.answeres?.map((answer) => (
  <Answer
    key={answer._key}
    title={answer.title}
    correct={answer.correct}
    updateAnswer={updateAnswer}
    checkedAnswer={checkedAnswer}
    isFail={isFail}
  />
))}
<button type="button" className='py-4 pz-2 text-white bg-orange-400' onclick={progress}>
</section>
*/