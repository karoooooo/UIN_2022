import { useState } from 'react'
import Board from './components/Board'
import BoardHistory from './components/BoardHistory'
import Form from './components/Form'
import Winner from './components/Winner'

// Inneholder liste over kombinasjonene som gjør at man vinner
// const winningCombinations = [x, y]

// Funksjon brukt til å sjekke om brukeren vinner
// Tar i mot board som er selve oversikten over hvilke ruter som er klikket på

const winningCombinations = [
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

const calculateWinner = (board) => {
  for (const combination of winningCombinations) {
    // Deconstructer ut verdiene fra en gitt kombinasjon og gir de variabelnavnet first, second og third
    // ex. [0, 1, 2] som er første kombinasjon gir oss
    // const first = 0;
    // const second = 1;
    // const third = 2;
    const [first, second, third] = combination

    // Sjekker om board verdiene har samme navn i den kombinasjonen som gir seier
    if (
      board[first] &&
      board[first] === board[second] &&
      board[first] === board[third]
    ) {
      // Hvis kombinasjonen matcher returneres et objekt med winner: 'navnet', winningSquares: 'liste med verdiene som gir seier
      return {
        winner: board[first],
        winningSquares: [first, second, third],
      }
    }
  }

  return {
    winner: null,
    winningSquares: [],
  }
}

const initialBoard = Array(9).fill(null)
//* det betyr [null, null, null.. 9 stk] *//

const App = () => {
  const [player, setPlayer] = useState(null)
  const [players, setPlayers] = useState({ playerOne: '', playerTwo: '' })
  const [board, setBoard] = useState(initialBoard)
  // Trigger calculateWinner(board) hver gang App blir 'laget på nytt' som følge av at staten har endret seg
  const { winner, winningSquares } = calculateWinner(board)
  const [started, setStarted] = useState(false)
  const [history, setHistory] = useState([])

  const nextPlayer =
    player === players.playerOne ? players.playerTwo : players.playerOne

  const addPlayer = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    setPlayers((prev) => ({ ...prev, [inputName]: inputValue }))
  }

 

  const handleClick = (index) => {
    if (board[index] || winner) {
      console.log(board[index])
      return
    }
    const boardStatus = [...board]
    boardStatus[index] = player
    setBoard(boardStatus)
    setHistory((prev) => [...prev, { player, value: index }])
    setPlayer(nextPlayer)
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setStarted(true)
    setHistory([])
    setPlayer(Object.values(players)[Math.floor(Math.random(0, 1) * 2)])
  }

  const initGame = (event) => {
    event.preventDefault()
    resetGame()
  }

  return (
    <>
      {/* {JSON.stringify(players)} */}
      <Form
        started={started}
        initGame={initGame}
        players={players}
        addPlayer={addPlayer}
      />
      <section>
        <p>Current player {player}</p>
        <Board
          board={board}
          handleClick={handleClick}
          winningSquares={winningSquares}
        />
      </section>
      <Winner
        winner={winner}
        winningSquares={winningSquares}
        resetGame={resetGame}
      />
      <BoardHistory history={history} />
    </>
  )
}

export default App
