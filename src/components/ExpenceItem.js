import ExpenceDate from "./ExpenceDate";
import Card from "./Card";
import "./ExpenceItem.css";

function ExpenceItem(props) {
  
  console.log(props);
  return (
      <Card className="expence-item">
       <ExpenceDate date={props.date}/>
        <div className="expence-item_description">
          <h2>{props.title} </h2>
        </div>
        <div className="expence-item_price">{props.amount}</div>
      </Card>
    
  );
}

export default ExpenceItem;
