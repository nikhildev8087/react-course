import { useState } from 'react';
import ExpenceItem from './components/Expenses/ExpenceItem';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';

import './App.css';

const Dummy_Expences = [
  { id:'e1', date:new Date(2022,3,4), title:'car Insurance', amount:234.21},
  { id:'e2', date:new Date(2021,12,14), title:'Home loan', amount:200000},
  { id:'e3', date:new Date(2018,7,1), title:'TV', amount:10000},
  { id:'e4', date:new Date(2020,5,8), title:'foods', amount:800},

];

function App() {
const [expenses, setExpenses]= useState(Dummy_Expences);

  const addExpenseHandler = expense =>{
    console.log(expense);
    setExpenses((prevExpenses)=>{

      return[expense, ...expenses];
    })
  }
  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler}/>
      <ExpensesFilter />
      <ExpenceItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <ExpenceItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <ExpenceItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <ExpenceItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
   
    </div>
  );
}

export default App;
