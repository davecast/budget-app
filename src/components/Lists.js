import React, { Fragment } from "react";
import styled from "styled-components";

/*COMPONENTS*/
import Expense from "./Expense";

const ListContainer = styled.ul`
  min-height: 250px;
  padding: 25px;
  max-height: 300px;
  border-bottom: 1px solid var(--inputsBorder);
  list-style: none;
  padding: 0;
  margin: 0 0 25px;
  overflow-y: auto;
`;

const Lists = ({ expenses }) => {
  return (
    <Fragment>
      <ListContainer>
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </ListContainer>
    </Fragment>
  );
};

export default Lists;
