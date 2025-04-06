import React, { useState } from "react";
import Entity from "./Entity";
import GameOver from "./GameOver";
import Log from "./Log";
// ----------------------------------------------------------------------------------------------------------
// HELPER FUNCTIONS
// ----------------------------------------------------------------------------------------------------------

// Generate a random values in the range {min, max}
function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Create an attack log
function createLogAttack(isPlayer, damage) {
  return {
    isPlayer: isPlayer,
    isDamage: true,
    text: ` takes ${damage} damages`,
  };
}

// Create a healing log
function createLogHeal(healing) {
  return {
    isPlayer: true,
    isDamage: false,
    text: ` heal ${healing} life points`,
  };
}

function Game() {const [playerHealth, setPlayerHealth] = useState(100);
  const [monsterHealth, setMonsterHealth] = useState(100);
  const [logs, setLogs] = useState([]);

  const gameOver = playerHealth <= 0 || monsterHealth <= 0;
  const winner = playerHealth <= 0 && monsterHealth <= 0
    ? "It’s a draw!"
    : playerHealth <= 0
    ? "Monster wins!"
    : "Player wins!";

  const attackHandler = () => {
    const playerDamage = getRandomValue(5, 12);
    const monsterDamage = getRandomValue(8, 15);
    setMonsterHealth((prev) => Math.max(prev - playerDamage, 0));
    setPlayerHealth((prev) => Math.max(prev - monsterDamage, 0));
    setLogs((prev) => [
      createLogAttack(true, playerDamage),
      createLogAttack(false, monsterDamage),
      ...prev,
    ]);
  };

  const healHandler = () => {
    const healValue = getRandomValue(8, 20);
    const monsterDamage = getRandomValue(8, 15);
    setPlayerHealth((prev) => Math.min(prev + healValue, 100) - monsterDamage);
    setLogs((prev) => [
      createLogHeal(healValue),
      createLogAttack(false, monsterDamage),
      ...prev,
    ]);
  };

  const restartGame = () => {
    setPlayerHealth(100);
    setMonsterHealth(100);
    setLogs([]);
  };

  return (
    <div className="game">
      <Entity name="Player" health={playerHealth} />
      <Entity name="Monster" health={monsterHealth} />

      {!gameOver ? (
        <div className="actions">
          <button onClick={attackHandler}>Attack</button>
          <button onClick={healHandler}>Heal</button>
        </div>
      ) : (
        <GameOver title={winner} restartGame={restartGame} />
      )}

      <Log logs={logs} />
    </div>
  );
}

  // ----------------------------------------------------------------------------------------------------------
  // STATES & VARIABLES
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------
  // BUTTONS EVENT FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------
  // JSX FUNCTIONS
  // ----------------------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------------------
  // MAIN  TEMPLATE
  // ----------------------------------------------------------------------------------------------------------


export default Game;
