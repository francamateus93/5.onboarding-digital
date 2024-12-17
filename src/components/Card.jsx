import React from "react";

function Card({title, description, image, backgroundColor, onNext, prevStep, step, allSteps}) {
  return (
    <>
    <div className="container">
      <div className="image-container" style={{backgroundColor: backgroundColor}}>
        <img src={image} alt="img-card" />
      </div>
      <div className="text-container">
        <h2 className="title-card">{title}</h2>
        <p className="description-card">{description}</p>
      <div className="btn-container"> 
        {(step > 0) && (<button className="btn-prev" onClick={prevStep}>&#8592;</button>)}
        {(step < allSteps - 1) && (<button className="btn-next" onClick={onNext}>&#8594;</button>)}
        </div>
      </div>
    </div>
    </>
  )
}

export default Card