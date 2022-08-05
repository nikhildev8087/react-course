import React, { useState } from "react";
import ExpenceDate from "../Expenses/ExpenceDate";
import Card from "../UI/Card";
import "./ExpenceItem.css";

function ExpenceItem(props) {
  // console.log(props);
  return (
    <Card className="expence-item">
      <ExpenceDate date={props.date} />
      <div className="expence-item_description">
        <h2>{props.title} </h2>
        <div className="expence-item_price">${props.amount}</div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </div>
    </Card>
  );
}

export default ExpenceItem;
