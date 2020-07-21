import React, { useState } from "react";
import styled from "styled-components";

/*LAYOUTS*/
import Title from "../layouts/Title";

/*COMPONENTS*/
import Error from "./Error";

const QuestionStyled = styled.aside`
  background-color: #f1f7fc;
  padding: 35px 40px;
  border-radius: 30px;
  box-shadow: 0 25px 50px rgba(132, 132, 132, 0.2);
`;

const Form = styled.form``;
const FormControl = styled.div`
  margin-bottom: 25px;
`
const Input = styled.input`
  height: 60px;
  width: 100%;
  outline: none;
  padding: 0 20px;
  background-color: var(--inputsBack);
  border: 2px solid var(--inputsBorder);
  border-radius: 5px;
  box-shadow: none;
  transition: all 0.3s ease-in-out;
  ::placeholder {
    color: var(--grey);
    font-family: "Roboto", sans-serif;
  }
  :focus::placeholder {
    color: var(--orange);
    font-weight: bold;
  }
  :focus {
    border: 2px solid var(--orange);
  }
`;
const Button = styled.button`
  width: 100%;
  height: 60px;
  background-color: var(--orange);
  color: var(--white);
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  :hover {
    opacity: 0.75;
  }
`;
const Question = ({ setBudget, setRemaining, setHero }) => {
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
    setHero(false);
  };

  return (
    <QuestionStyled>
      <Title>Coloca tu presupuesto</Title>

      <Form onSubmit={addBunget}>
        <FormControl>
          <Input
            onChange={defineBudget}
            type="number"
            placeholder="Monto de presupuesto"
          />
          {error ? <Error message="El presupuesto es incorreto" /> : null}
        </FormControl>

        <Button type="submit">Definir Presupuesto</Button>
      </Form>
    </QuestionStyled>
  );
};

export default Question;
