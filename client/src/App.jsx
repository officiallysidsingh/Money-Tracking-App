//React Hooks
import { useState } from "react";

// Stylesheet
import "./App.scss";

// Custom Components
import FormComponent from "./components/formComponent/FormComponent";
import Transactions from "./components/transactions/Transactions";

function App() {
  const [balance, setBalance] = useState(0);
  const [allData, setAllData] = useState(null);

  return (
    <div className="app">
      <h1>
        Your Balance:
        <br />
        {balance < 0 ? "-" : ""}&#8377;{Math.abs(balance)}
        <span>.00</span>
      </h1>

      <FormComponent allData={allData} />

      <Transactions setBalance={setBalance} setAllData={setAllData} />
    </div>
  );
}

export default App;
