import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: 'e1', title: 'Car Insurance', amount: 295, date: new Date(2023, 2, 15) },
    { id: 'e2',title: 'Bike Insurance', amount: 75, date: new Date(2023, 2, 15) },
    { id: 'e3',title: 'Scooty Insurance', amount: 45, date: new Date(2023, 2, 15) }
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        ></ExpenseItem>
      <ExpenseItem 
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        ></ExpenseItem>
      <ExpenseItem 
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        ></ExpenseItem>
    </div>
  );
}

export default App;
