import ExpenceItem from './components/ExpenceItem';
import Card from './components/Card';
import './App.css';

function App() {

  const expences = [
    { id:'e1', date:new Date(2022,3,4), title:'car Insurance', amount:234.21},
    { id:'e2', date:new Date(2021,12,14), title:'Home loan', amount:200000},
    { id:'e3', date:new Date(2018,7,1), title:'TV', amount:10000},
    { id:'e4', date:new Date(2020,5,8), title:'foods', amount:800}

  ]
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenceItem title={expences[0].title} amount={expences[0].amount} date={expences[0].date}/>
      <ExpenceItem title={expences[1].title} amount={expences[1].amount} date={expences[1].date}/>
      <ExpenceItem title={expences[2].title} amount={expences[2].amount} date={expences[2].date}/>
      <ExpenceItem title={expences[3].title} amount={expences[3].amount} date={expences[3].date}/>
   
    </div>
  );
}

export default App;
