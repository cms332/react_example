import React from 'react'
import Square from './Square'
import "./Board.css";

// let curPlayer = false;
// let cnt = 0;
const Board = ({squares, status, handleClick}) => {
  const renderSquare = (i) => {
    return <Square value={squares[i]} clickHandler={() => handleClick(i)} />
  }

  return (
    <div className='board-wrapper'>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className='status'>{status}</div> 
    </div>
  )
}

export default Board;