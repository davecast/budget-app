import React, { Fragment } from "react";
import styled from "styled-components";

/*COMPONENTS*/
import Expense from "./Expense";

const ListContainer = styled.ul`
  min-height: 250px;
  padding: 25px;
  max-height: 350px;
  border-bottom: 1px solid var(--inputsBorder);
  margin-bottom: 25px;
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
