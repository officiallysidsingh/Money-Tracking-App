//Axios
import axios from "axios";

// SWR
import { mutate } from "swr";

// React Icons
import { MdDelete } from "react-icons/md";

// Stylesheet
import "./style.scss";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

const DeleteComponent = ({ id }) => {
  //Handling Delete Request
  const handleDelete = async (id) => {
    await axios.delete(`${BASE_URL}/transaction/${id}`);
    mutate(`${BASE_URL}/transaction`);
  };
  return (
    <>
      <button className="delete" onClick={() => handleDelete(id)}>
        <MdDelete color="#ddd" />
      </button>
    </>
  );
};

export default DeleteComponent;
