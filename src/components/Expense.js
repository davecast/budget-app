import React from 'react';

const Expense = ({ expense }) => (
    <li>
      <p>
        {expense.name}
        <span>  
          {expense.quality}
        </span>
      </p>
    </li>
  );

 
export default Expense;