// Axios
import axios from "axios";

// SWR
import useSWR from "swr";

// React Hooks
import { useState, useEffect } from "react";

// Custom Components
import EditButton from "../editButton/EditButton";
import DeleteButton from "../deleteButton/DeleteButton";
import EditForm from "../editForm/EditForm";

// Stylesheet
import "./style.scss";

// getTransactions Fetcher Function to get all the transaction records
const getTransactions = (url) => axios.get(url).then((res) => res.data);

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const Transactions = ({ setBalance, openEdit, setOpenEdit }) => {
  const [formId, setFormId] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/transaction`,
    getTransactions,
    {
      onSuccess: (data) =>
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    }
  );

  useEffect(() => {
    if (data) {
      let total = 0;
      data.forEach((item) => {
        total += item.price;
      });
      setBalance(total);
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      <div className={`editFormContainer ${openEdit ? "" : "hide"}`}>
        <EditForm
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
          formId={formId}
          setFormId={setFormId}
          name={name}
          setName={setName}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
        />
      </div>
      {data?.map((item) => (
        <div
          className={`transactions ${openEdit ? "hide" : ""}`}
          key={item._id}
        >
          <div className="transaction">
            <div className="left">
              <div className="editComponent">
                <EditButton
                  setOpenEdit={setOpenEdit}
                  id={item._id}
                  setFormId={setFormId}
                  name={item.name}
                  setName={setName}
                  description={item.description}
                  setDescription={setDescription}
                  price={item.price}
                  setPrice={setPrice}
                />
              </div>
              <div className="name">{item.name}</div>
              <div className="description">{item.description}</div>
            </div>
            <div className="right">
              <div className="deleteComponent">
                <DeleteButton id={item._id} />
              </div>
              <div className={`price ${item.price > 0 ? "green" : "red"}`}>
                {item.price < 0 ? "-" : ""} &#8377;{Math.abs(item.price)}
              </div>
              <div className="datetime">
                {new Date(item.createdAt).toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Transactions;
