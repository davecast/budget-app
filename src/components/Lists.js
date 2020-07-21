import React, { Fragment } from "react";
import styled from "styled-components";

/*COMPONENTS*/
import Expense from "./Expense";

const ListsHeader = styled.h3`
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 30px;
  color: var(--black);
  font-family: "PT Sans", sans-serif;
`;



const Lists = ({ expenses }) => {
  return (
    <Fragment>
      <ListsHeader>Listado</ListsHeader>
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </Fragment>
  );
};

export default Lists;
