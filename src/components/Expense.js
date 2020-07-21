import React from "react";
import styled from "styled-components";

const ExpenseStyled = styled.li`
  display: grid;
  grid-template: 1fr / 1fr 90px;
  grid-gap: 10px;
  background-color: #f3f3f3;
  border-radius: 5px;
  padding: 16px 20px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 600;
  color: var(--black);
  cursor: pointer;
  margin-bottom: 10px;
`;
const ExpenseName = styled.p`
  font-size: 18px;
`;
const ExpenseQuantity = styled.p`
  font-size: 18px;
  justify-self: center;
`;
const Expense = ({ expense }) => (
  <ExpenseStyled>
    <ExpenseName>{expense.name}</ExpenseName>
    <ExpenseQuantity>${expense.quality}</ExpenseQuantity>
  </ExpenseStyled>
);

export default Expense;
