import { useState } from 'react';
import Card from "./components/Card";
import './App.css'
import Background1 from './assets/time_managment.svg';
import Background2 from './assets/programming.svg';
import Background3 from './assets/meditation.svg';


function App() {

    const tutorialData = [
      { title: "Dedica moltes hores",
      description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaàs una millora ràpidament.",
      image: Background1,
      backgroundColor: "#4da2a9"
    },
      { title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propris, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      image: Background2,
      backgroundColor: "#d3d4d9"
       },
      { title: "Procura descansar",
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Millotatàs la teva concentració i consolidaràs el teu aprenentatge.", 
      image: Background3,
      backgroundColor: "#ffd167"
       },
    ];

    // Actualiza el status
    const [step, setStep] = useState(0);
    const data = tutorialData[step];

    // Permite avanzar
    const nextStep = () => {
      setStep(step => step + 1)
    }

    // Permite retroceder
    const prevStep = () => {
      setStep(step => step - 1)
    }
    
  return (
    <div>
      <Card
        image={data.image}
        backgroundColor={data.backgroundColor}
        title={data.title}
        description={data.description}
        onNext={nextStep}
        prevStep={prevStep}/>
    </div>
  )
}

export default App
