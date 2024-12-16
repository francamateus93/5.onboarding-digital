import { useState } from 'react';
import Card from "./components/Card"
import './App.css'

const tutorialData = [
  {},
  ...];
  
  function App() {
    const [step, setStep] = useState(0);
    step = 0;

  return (
    <>
      <h1>Vite + React</h1>
      <Card />
    </>
  )
}

export default App
