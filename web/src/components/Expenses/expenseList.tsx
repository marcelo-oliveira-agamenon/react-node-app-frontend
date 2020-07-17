import React from "react";
import { Expense } from "../../ducks/expense";

export interface props {
  expense: Expense;
}

function ExpenseItem(props: props) {
  return (
    <div style={{ display: "inline-block" }}>
      <h3>{props.expense.expense_description}</h3>
    </div>
  );
}

export default ExpenseItem;
