//Axios
import axios from "axios";

// SWR
import { mutate } from "swr";

const DeleteComponent = ({ id }) => {
  //Handling Delete Request
  const handleDelete = async (e) => {
    let id = e;
    await axios.delete(`http://localhost:3000/api/transaction/${id}`);
    mutate("http://localhost:3000/api/transaction");
  };
  return (
    <div>
      <div className="delete" onClick={() => handleDelete(id)}>
        Delete
      </div>
    </div>
  );
};

export default DeleteComponent;
