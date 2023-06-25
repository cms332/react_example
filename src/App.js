import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(false);
  const [historyCnt, sethistoryCnt] = useState(0)

  const checkMate = (squares) => {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    for(let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    
    return null;
  }

  let status;
  const winner = checkMate(squares);
  if(winner) {
    status = `Winner ${winner}`;
  } else {
    status = `Next player ${xIsNext ? 'O' : 'X'}`;
  }

  const handleClick = (i) => {
    if(squares[i] || checkMate(squares)) {
      return;
    }
    const newSquares = squares.slice();
    xIsNext? newSquares[i] = 'O': newSquares[i] = 'X';
    stackHistory(newSquares);
    setSquares(newSquares); // <- re-render
    setXIsNext(!xIsNext);
  }


  let moves;
  // let historyStackCnt = 0;

  const stackHistory = (newSquares) => {
    const newHistory = history.slice(0,historyCnt+1);
    newHistory.push(newSquares);
    setHistory(newHistory);
    // console.log(historyCnt);
    sethistoryCnt(historyCnt+1);
  }

  const jumpTo = (i) => {
    //console.log(`점프!!: ${i}`+history[i]);
    setSquares(history[i]);
    sethistoryCnt(i)
    // console.log(historyCnt);
    setXIsNext(i % 2 !== 0 ? true: false);
  }
  console.log(xIsNext);
  moves = history.map((step, move) => {
    const desc = move ?
    'Go to move #' + move :
    'Go to game start';

    return(
      <li key={move}>
        <button className="move-button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    )
  });
  //console.log(moves);

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} status={status} handleClick={handleClick}/>
      </div>
      <div className="game-info">
        <ol style={{ listStyle: 'none' }}>{moves}</ol>
      </div>
    </div>
  );
}

export default App;
