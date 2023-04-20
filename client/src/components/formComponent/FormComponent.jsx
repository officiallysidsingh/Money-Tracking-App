import { useState } from "react";

import "./style.scss";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");

  function addNewTransaction(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={addNewTransaction}>
      <div className="basic">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={"+200 new samsung tv"}
        />
        <input
          type="datetime-local"
          value={datetime}
          onChange={(e) => setDatetime(e.target.value)}
        />
      </div>
      <div className="description">
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={"description"}
        />
      </div>
      <button type="submit">Add new transaction</button>
    </form>
  );
};

export default FormComponent;
