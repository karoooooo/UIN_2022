import { useState } from 'react'

// Inneholder liste over kombinasjonene som gjør at man vinner
// const winningCombinations = [x, y]

// Funksjon brukt til å sjekke om brukeren vinner
// Tar i mot board som er selve oversikten over hvilke ruter som er klikket på

const initialBoard = Array(9).fill(null);

const App = () => {
  const [players, setPlayers] = useState({ playerOne: '', playerTwo: '' });
  const [board, setBoard] = useState(initialBoard);
  
  const addPlayer = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setPlayers((prev) => ({ ...prev, [inputName]: inputValue }));
  };

  const handleClick = (index) => {
    console.log(index);
    }

  return (
    <>
    {JSON.stringify(players)}
      <form>
        <label htmlFor="playerOne">Add player one</label>
        <input
          name="playerOne"
          id="playerOne"
          type="text"
          value={players.playerOne}
          onChange={addPlayer}
        />
        <label htmlFor="playerTwo">Add player two</label>
        <input
          name="playerTwo"
          id="playerTwo"
          type="text"
          value={players.playerTwo}
          onChange={addPlayer}
        />
    </form>
    {board?.length > 0 ? (
       <ul id="board">
            {board.map((item, index) => (
                <li className="square" key= {index}>
                    <button className="" type="button" onClick={() => handleClick(index)}>
                        {item || index}
                    </button>
                </li>
            ))}
        </ul> 
    ) : null}       
    </>
  )
}

export default App
