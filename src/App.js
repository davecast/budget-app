import React, { Fragment, useState, useEffect } from "react";

/*COMPONENTS*/
import Header from "./components/Header";
import Hero from "./components/Hero";
import Expenses from "./components/Expenses";

function App() {
  const [showHero, setHero] = useState(true);

  //Nuestro Presupuesto
  const [budget, setBudget] = useState(0);
  //Nuestro Remanente
  const [remaining, setRemaining] = useState(0);

  //Cuando agreguemos nuevo expenses
  const [expenses, setExpenses] = useState([]);

  //Obtenemos gasto
  const [expense, setExpense] = useState({});

  //FlagExpense
  const [flagExpense, setFlagExpense] = useState(false);

  //UseEffect que actualiza el restante
  useEffect(() => {
    if(flagExpense) {
      //Agrega el nuevo presupuesto
      setExpenses([...expenses, expense]);

      //Resta del presuuesto actual
      const budgetRemaining = remaining - expense.quality;
      setRemaining(budgetRemaining)
      setFlagExpense(false)
    } 
  }, [expense, expenses, flagExpense, remaining])

  return (
    <Fragment>
      <Header />
      {showHero ? (
        <Hero
          setHero={setHero}
          setBudget={setBudget}
          setRemaining={setRemaining}
        />
      ) : (
        <Expenses
          remaining={remaining}
          budget={budget}
          setExpense={setExpense}
          setFlagExpense={setFlagExpense}
          expenses={expenses}
        />
      )}
    </Fragment>
  );
}

export default App;
