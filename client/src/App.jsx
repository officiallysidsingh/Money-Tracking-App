//React Hooks
import { useState } from "react";

// Stylesheet
import "./App.scss";

// Custom Components
import FormComponent from "./components/formComponent/FormComponent";
import Transactions from "./components/transactions/Transactions";

function App() {
  const [balance, setBalance] = useState(0);
  let balanceRupees = Math.floor(Math.abs(balance));
  let balancePaise = (Math.abs(balance) - balanceRupees) * 100;

  return (
    <div className="app">
      <h1>
        <span className="symbol">{balance < 0 ? "-" : ""}&#8377;</span>
        <span className="amount">{balanceRupees}</span>
        <span className="paise">
          {Math.round(balancePaise) > 0 ? Math.round(balancePaise) : null}
        </span>
      </h1>

      <FormComponent />

      <Transactions setBalance={setBalance} />
    </div>
  );
}

export default App;
