import React, { useState } from "react";

/*LAYOUTS*/
import Wrapper from "./layouts/Wrapper";

/*COMPONENTS*/
import Question from "./components/Question";

function App() {
  //Definir el state
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <Wrapper>
      <h1>Presupuesto</h1>
      <div className="contenido-principal contenido">
        <Question setBudget={setBudget} setRemaining={setRemaining} />
      </div>
    </Wrapper>
  );
}

export default App;
