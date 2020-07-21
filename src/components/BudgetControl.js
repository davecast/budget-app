import React, {Fragment} from 'react';
import {reviewBudget} from '../helpers';


const BudgetControl = ({ remaining, budget }) => {
  return (
    <Fragment>
      <div>
        Presupuesto: $ {budget}
      </div>
      <div className={reviewBudget(budget, remaining)}>
        Rstante: $ {remaining} 
      </div>
    </Fragment>
  );
}
 
export default BudgetControl;