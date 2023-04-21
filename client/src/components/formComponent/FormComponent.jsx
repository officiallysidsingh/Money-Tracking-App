// SWR
import { mutate } from "swr";

// React Hooks
import { useState } from "react";

// Stylesheet
import "./style.scss";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addNewTransaction(e) {
    e.preventDefault();

    let priceToNumber = Number(price);

    // Mutating the data
    mutate();

    //Post the data to the server
    await fetch("http://localhost:3000/api/transaction", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        price: priceToNumber,
        description: description,
      }),
    });
  }
  return (
    <form onSubmit={addNewTransaction}>
      <div className="basic">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"Samsung TV"}
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder={"200"}
        />
      </div>
      <div className="description">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={"Bought A New TV"}
        />
      </div>
      <button type="submit">Add new transaction</button>
    </form>
  );
};

export default FormComponent;
