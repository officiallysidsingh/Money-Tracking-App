// SWR
import useSWR from "swr";

//React Hooks
import { useState, useEffect } from "react";

// Stylesheet
import "./App.scss";

// Custom Components
import FormComponent from "./components/formComponent/FormComponent";
import Transactions from "./components/transactions/Transactions";

// Fetcher Function
const fetcher = (url) => fetch(url).then((res) => res.json());

function App() {
  const [allData, setAllData] = useState(null);
  const [balance, setBalance] = useState(0);

  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/transaction",
    fetcher
  );

  useEffect(() => {
    if (data) {
      let total = 0;
      data.forEach((item) => {
        total += item.price;
      });
      setBalance(total);
      setAllData(data);
    }
  }, [data]);

  return (
    <div className="app">
      <h1>
        Your Balance:
        <br />
        {balance < 0 ? "-" : ""}&#8377;{Math.abs(balance)}
        <span>.00</span>
      </h1>

      <FormComponent />

      <Transactions allData={allData} isLoading={isLoading} error={error} />
    </div>
  );
}

export default App;
