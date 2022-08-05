import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenceItem from './ExpenceItem'
import ExpensesList from './ExpensesList'

function Expenses(props) {

    const [filteredyear, setFiltedYear] =  useState('2020');

    const filterChangeHandler = (selectedYear)=>{
        setFiltedYear(selectedYear);
    }

 return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};


export default Expenses
