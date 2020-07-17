import React, { Fragment, useState } from "react";

import Error from "./Error";

const Question = ({ setBudget, setRemaining }) => {
  //Definir el state
  const [quality, setQuality] = useState(0);
  const [error, setError] = useState(false);

  //Function que lee el presupuesto
  const defineBudget = (e) => {
    console.log(parseInt(e.target.value));
    setQuality(parseInt(e.target.value, 10));
  };

  //Submit para definir el presupuesto
  const addBunget = (e) => {
    e.preventDefault();

    //Validar
    if (quality < 1 || isNaN(quality)) {
      setError(true);
      return;
    }

    //Enviar si pasa validacion
    setError(false);
    setBudget(quality);
    setRemaining(quality);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>

      {error ? <Error message="El presupuesto es incorreto"  /> : null}

      <form onSubmit={addBunget}>
        <input
          onChange={defineBudget}
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Question;
