// React Icons
import { MdEditNote } from "react-icons/md";

// Stylesheet
import "./style.scss";

const EditComponent = ({ setOpenEdit, id, setFormId }) => {
  const handleEdit = () => {
    setOpenEdit((prev) => !prev);
    setFormId(id);
  };
  return (
    <>
      <button className="edit" onClick={handleEdit}>
        <MdEditNote color="#ddd" />
      </button>
    </>
  );
};

export default EditComponent;
