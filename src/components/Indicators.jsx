import React from "react";

function Indicators({tutorialData, step}) {
  return (
    <div className="indicators">
      {tutorialData.map((data) => (
      <div key={data.id} className={`indicator ${data.id - 1 === step ? "active" : ""}`}>
      </div>
    ))}
    </div>
  )
}

export default Indicators