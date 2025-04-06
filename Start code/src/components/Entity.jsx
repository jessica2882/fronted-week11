import React from "react"

function Entity({ health, name }) {
  return (
    <div className="entity">
      <h3>{name}</h3>
      <div className="health-bar">
        <div
          className="health-bar-inner"
          style={{ width: `${Math.max(0, Math.min(health, 100))}%` }}
        ></div>
      </div>
    </div>
  )
}

export default Entity
