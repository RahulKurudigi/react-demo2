import React from "react";
import "./Expense.css";
import Card from "./Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <Card>
      <div className="expense">
        {/* <ExpenseDate date={props.data} /> */}
        <div>
          <h2>{props.title}</h2>
          <div>${props.amount}</div>
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
