import React from "react";
import { reviewBudget } from "../helpers";
import styled from "styled-components";

const ControlStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Budget = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--white);
  background-color: var(--orange);
  padding: 5px 10px;
  border-radius: 3px;
`;
const Remaining = styled.div`
  display: flex;
  align-items: flex-end;
`;
const RemainingHeader = styled.h4`
  font-size: 48px;
  font-weight: 700;
`;
const RemainingSpan = styled.span`
  font-size: 12px;
  line-height: 30px;
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  color: var(--black);
`;
const BudgetControl = ({ remaining, budget }) => {
  return (
    <ControlStyled>
      <Budget>Presupuesto: $ {budget}</Budget>
      <Remaining>
        <RemainingSpan>Disponemos:</RemainingSpan>
        <RemainingHeader className={reviewBudget(budget, remaining)}>
          ${remaining}
        </RemainingHeader>
      </Remaining>
    </ControlStyled>
  );
};

export default BudgetControl;
