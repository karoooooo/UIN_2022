import { Route, Routes } from 'react-router-dom'
import { getQuizzes } from './lib/services/quiz'
import Quizzes from './pages/Quizzes'
import Quiz from './pages/Quiz'
import Layout from './layout/Layout'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  const getSanityData = () => {
    getQuizzes()
  }

  return (
    <Routes>
      {/* {quiz} */}
      <Route element={<Layout />}>
        <Route path="quiz">
          {/* {quiz} */}
          <Route index element={<Quizzes />} />
          {/* {quiz et eller annet} */}
          <Route path=":slug" element={<Quiz />} />
        </Route>
      </Route>
    </Routes>
  )
}
