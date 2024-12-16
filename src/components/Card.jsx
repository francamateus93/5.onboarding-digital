import React from "react"

function Card({title, description, onNext}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onNext}>Next</button>
    </div>
  )
}

export default Card