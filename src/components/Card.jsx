import React from "react";

function Card({title, description, background, onNext}) {
  return (
    <div className="container">
      <img src={background} alt="img-card" />
      <h2 className="title-card">{title}</h2>
      <p className="description-card">{description}</p>
      <button className="btn-card" onClick={onNext}>&#8594;</button>
    </div>
  )
}

export default Card