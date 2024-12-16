import { useState } from 'react';
import Card from "./components/Card"
import './App.css'
import Background1 from './assets/time_managment.svg'
import background2 from './assets/'


function App() {

    const tutorialData = [
      { title: "Dedica moltes hores", description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaàs una millora ràpidament.",
      background: {Background1}
       },
      { title: "Programa projectes propis", description: "Més val 10 hores treballant en projectes propris, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.", background: ".\src\assets\programming.svg"      
       },
      { title: "Procura descansar", description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Millotatàs la teva concentració i consolidaràs el teu aprenentatge.", background: ".\src\assets\meditation.svg"
       },
    ];

    // Actualiza el status
    const [step, setStep] = useState(0);
    const data = tutorialData[step];

    // Incrementa el Step
    const nextStep = () => {
      setStep(step => step + 1)
    }
    
  return (
    <div>
      <Card
      img={data.background}
      title={data.title}
      description={data.description}
      onNext={nextStep}/>
    </div>
  )
}

export default App
