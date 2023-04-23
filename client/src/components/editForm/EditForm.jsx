// React Hooks
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Stylesheet
import "./style.scss";

const EditForm = ({
  openEdit,
  setOpenEdit,
  formId,
  setFormId,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
}) => {
  const handleEdit = async (e) => {
    e.preventDefault();

    // Setting Id To Send To Server For PUT Request
    const id = formId;

    // Converting Price To Number
    let priceToNumber = Number(price);

    try {
      const res = await axios.put(
        `http://localhost:3000/api/transaction/${id}`,
        {
          name,
          price: priceToNumber,
          description,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancel = () => {
    setOpenEdit((prev) => !prev);
    setFormId("");
  };

  return (
    <div className={`editFormCard ${openEdit ? "show" : ""}`}>
      <form onSubmit={handleEdit}>
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
        <button type="submit">Edit Transaction</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
