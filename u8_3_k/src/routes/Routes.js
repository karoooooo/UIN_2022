import { Routes, Route } from 'react-router-dom'
import Home from '..pages/Home'
import Navigation from '../components/Navigation'

export default function PageRoutes() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="posts">
            <Route index element={<Posts />} />
            <Route path=":id" element={<Post />} />
          </Route>
      </Routes>
    </>
  )
}