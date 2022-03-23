import { Route, Routes } from 'react-router-dom'
import Quizzes from './pages/Quizzes'
import Quiz from './pages/Quiz'
import Layout from './layout/Layout'

export default function App() {
  // Write JavaScript, use Hooks, add state and more
  return (
    <Routes>
      {/* Gir konsistent layout på alle ruter} */}
      <Route element={<Layout />}>
      {/* /quiz */}
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
