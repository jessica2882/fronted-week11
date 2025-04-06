import React from "react"

function GameOver({ title, restartGame }) {
  return (
    <div className="game-over">
      <h3>{title}</h3>
      <button onClick={restartGame}>Start New Game</button>
    </div>
  )
}

export default GameOver
