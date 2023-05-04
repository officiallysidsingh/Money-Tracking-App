//React Hooks
import { useState } from "react";

// React Hot Toast
import Toaster from "react-hot-toast";

// Stylesheet
import "./App.scss";

// Custom Components
import FormComponent from "./components/formComponent/FormComponent";
import Transactions from "./components/transactions/Transactions";

function App() {
  const [balance, setBalance] = useState(0);
  const [openEdit, setOpenEdit] = useState(false);

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

      <FormComponent openEdit={openEdit} />

      <Transactions
        setBalance={setBalance}
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
      />
    </div>
  );
}

export default App;
