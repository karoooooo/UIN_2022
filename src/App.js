import Header from './components/Header.js'
import Display from './components/Display.js'
import Actions from './components/Actions.js'
import { useState } from 'react'


function App() {
  const [button, useButton] = useState(false);
  const [text, hideText] = useState({default});

  const changeView = (event) => {hideText.target.value};
 
  return (
    <main>
      <Actions hideText={hideText} useButton={useButton} />
      <Header button={button} />
      <Display text={text} />
    </main>
  )
}

export default App
