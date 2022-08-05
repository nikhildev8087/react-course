import React from 'react'
import '../Expenses/ExpensesFilter.css';

function ExpensesFilter(props) {
    const dropdownChangeHandler = (e) =>{
        props.onChangeFilter(e.target.value);
    };

  return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>

      <label>Filter year</label>
      <select value={props.selected} onChange={dropdownChangeHandler}>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
        </div>
    </div>
  )
}

export default ExpensesFilter