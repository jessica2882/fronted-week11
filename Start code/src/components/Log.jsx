import React from "react";

function Log({ logs }) {
  return (
    <ul className="log">
      {logs.map((log, index) => (
        <li key={index} className={`${log.isPlayer ? "player" : "monster"} ${log.isDamage ? "damage" : "heal"}`}>
          {log.isPlayer ? "Player" : "Monster"} {log.text}
        </li>
      ))}
    </ul>
  );
}

export default Log;