import React from "react";
import styled from "styled-components"

const IndicatorsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: start;
`;

const Indicator = styled.div`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#2a2a2a" : "#999")};
  cursor: pointer;
  transition: background-color 0.5s ease;
`;

function Indicators({tutorialData, step, indicatorClick}) {
  return (
    <IndicatorsContainer>
      {tutorialData.map((data) => (
        <Indicator 
        key={data.id} 
        active={data.id - 1 === step} 
        onClick={() => indicatorClick(data.id)}
        />
    ))}
    </IndicatorsContainer>
  )
}

export default Indicators