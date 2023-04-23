//SWR
import { mutate } from "swr";

//Axios
import axios from "axios";

// React Hooks
import { useState } from "react";

// Stylesheet
import "./style.scss";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const FormComponent = ({ openEdit }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  async function addNewTransaction(e) {
    e.preventDefault();

    let priceToNumber = Number(price);

    //Post the data to the server
    await axios.post(`${BASE_URL}/transaction`, {
      name: name,
      price: priceToNumber,
      description: description,
    });
    mutate(`${BASE_URL}/transaction`);
    setName("");
    setPrice("");
    setDescription("");
  }

  return (
    <form onSubmit={addNewTransaction} className={openEdit ? "hide" : ""}>
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
