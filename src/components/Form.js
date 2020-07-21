import React, { useState } from "react";
import styled from "styled-components";
import shortid from "shortid";

/*LAYOUTS*/
import Title from "../layouts/Title";

/*COMPONENTS*/
import Error from "./Error";

const FormStyled = styled.section``;
const FormContent = styled.form``;

const FormControl = styled.div`
  margin-bottom: 25px;
`;
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
const Form = ({ setExpense, setFlagExpense }) => {
  //Inicializamos los presupuetos
  const [budget, setBudget] = useState({
    name: "",
    quality: "",
  });
  const [error, setError] = useState(false);

  //Declaramos variables
  const { name, quality } = budget;

  //Funcion para llenar campos
  const handleChange = (e) => {
    setBudget({
      ...budget,
      [e.target.name]: e.target.value,
    });
  };
  //Agregar gastos
  const addExpenses = (e) => {
    e.preventDefault();

    //Validar
    if (quality < 1 || isNaN(quality) || name.trim() === "") {
      setError(true);
      return;
    }

    //Menejamos el error
    setError(false);

    //Agregamos id
    budget.id = shortid.generate();

    //Pasar el gasto al componente principal
    setExpense(budget);
    setFlagExpense(true);

    //Resetear el Form
    setBudget({
      name: "",
      quality: "",
    });
  };

  return (
    <FormStyled onSubmit={addExpenses}>
      <Title>Agrega tus gastos</Title>
      <FormContent>
        <FormControl>
          <Input
            type="text"
            placeholder="Ej. Transporte"
            name="name"
            value={name}
            onChange={handleChange}
          />
          {error && name === "" ? (
            <Error message="Este camo es requerido" />
          ) : null}
        </FormControl>
        <FormControl>
          <Input
            type="number"
            name="quality"
            placeholder="Ej. 300"
            value={quality}
            onChange={handleChange}
          />
          {error && (quality < 1 || isNaN(quality)) ? (
            <Error message="Este camo es requerido" />
          ) : null}
        </FormControl>
        <Button type="submit">Agregar Gasto</Button>
      </FormContent>
    </FormStyled>
  );
};

export default Form;
