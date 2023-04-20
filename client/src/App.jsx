// Stylesheet
import "./App.scss";

// Custom Components
import FormComponent from "./components/formComponent/FormComponent";
import Transactions from "./components/transactions/Transactions";

function App() {
  return (
    <div className="app">
      <h1>
        $400<span>.00</span>
      </h1>

      <FormComponent />

      <Transactions />
    </div>
  );
}

export default App;
