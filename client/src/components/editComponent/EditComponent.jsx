// React Icons
import { MdEditNote } from "react-icons/md";

// Stylesheet
import "./style.scss";

const EditComponent = ({ id }) => {
  return (
    <>
      <button className="edit" onClick={() => handleDelete(id)}>
        <MdEditNote color="#ddd" />
      </button>
    </>
  );
};

export default EditComponent;
