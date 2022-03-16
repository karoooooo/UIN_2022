import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// TODO: Kommenter ut om du ønsker å bruke .scss
// import './styles/scss/main.scss'

// TODO: Kommenter ut om du ikke ønsker å bruke tailwind
import './styles/css/main.css'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
