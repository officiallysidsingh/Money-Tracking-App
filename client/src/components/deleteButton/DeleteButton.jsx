//Axios
import axios from "axios";

// SWR
import { mutate } from "swr";

// React Icons
import { MdDelete } from "react-icons/md";

// Stylesheet
import "./style.scss";

const DeleteComponent = ({ id }) => {
  //Handling Delete Request
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/transaction/${id}`);
    mutate("http://localhost:3000/api/transaction");
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
