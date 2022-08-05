import React from "react";
import ExpenceItem from "./ExpenceItem";


const ExpensesList = (props) =>{
let expensesContent = <p>No Expenses Found</p>

if(props.items.length > 0){
    expensesContent = props.items.map((expense)=>(
        <ExpenceItem
        key={expense.id}
        title={expense.title}
        amount = {expense.amount}
        date = {expense.date}
        />
    ))
}


return <ul className="expenses-list">
    {props.items.map((expense)=>(
         <ExpenceItem
         key={expense.id}
         title={expense.title}
         amount = {expense.amount}
         date = {expense.date}
         />
    ))}
</ul>

}

export default ExpensesList;