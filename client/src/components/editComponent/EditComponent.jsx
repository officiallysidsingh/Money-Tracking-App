//Axios
import axios from "axios";

// React Icons
import { MdEditNote } from "react-icons/md";

// Stylesheet
import "./style.scss";

const EditComponent = ({ id }) => {
  const handleEdit = (id) => {
    // axios.put(`http://localhost:3000/api/transaction/${id}`);
    console.log(`Edit ${id}`);
  };

  return (
    <>
      <button className="edit" onClick={() => handleEdit(id)}>
        <MdEditNote color="#ddd" />
      </button>
    </>
  );
};

export default EditComponent;
