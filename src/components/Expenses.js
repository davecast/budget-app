import React from "react";
import styled from "styled-components";

/*LAYOUT*/
import Wrapper from "../layouts/Wrapper";
import Title from "../layouts/Title";

/*COMPONENTS*/
import Form from "./Form";
import Lists from "./Lists";
import BudgetControl from "./BudgetControl";

const ExpensesStyled = styled.section`
  padding: 35px 0 0;
`;
const Grid = styled.div`
  display: grid;
  grid-template: 1fr / repeat(12, 1fr);
  grid-template-areas: "left left left left left left right right right right right right";
  grid-gap: 30px;
`;
const GridLeft = styled.div`
  grid-area: left;
  align-self: center;
`;
const GridRight = styled.div`
  grid-area: right;
`;
const NoList = styled.div`
  border-bottom: 1px solid var(--inputsBorder);
  padding: 25px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  color: var(--grey);
`;

const Expenses = ({
  setExpense,
  setFlagExpense,
  expenses,
  remaining,
  budget,
}) => {
  return (
    <ExpensesStyled>
      <Wrapper>
        <Grid>
          <GridLeft>
            <Form setExpense={setExpense} setFlagExpense={setFlagExpense} />
          </GridLeft>
          <GridRight>
            <Title>Listado</Title>
            {expenses.length > 0 ? (
              <Lists expenses={expenses} />
            ) : (
              <NoList>No has colocado ningun gasto</NoList>
            )}
            <BudgetControl remaining={remaining} budget={budget} />
          </GridRight>
        </Grid>
      </Wrapper>
    </ExpensesStyled>
  );
};

export default Expenses;
