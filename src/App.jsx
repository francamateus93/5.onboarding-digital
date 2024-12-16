import { useState } from 'react';
import Card from "./components/Card"
import './App.css'


function App() {

  //Array con datos
    const tutorialData = [
      { title: "Dedica moltes hores", description: "Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores. Al principi sembla impossible, però notaàs una millora ràpidament." },
      { title: "Programa projectes propis", description: "Més val 10 hores treballant en projectes propris, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge." },
      { title: "Procura descansar", description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Millotatàs la teva concentració i consolidaràs el teu aprenentatge." },
    ];

    // Contador para el status atual
    const [step, setStep] = useState(0);
    const data = tutorialData[step];

  return (
    <div>
      <Card
      title={data.title}
      description={data.description}/>
    </div>
  )
}

export default App
