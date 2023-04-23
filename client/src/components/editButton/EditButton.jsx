// React Icons
import { MdEditNote } from "react-icons/md";

// Stylesheet
import "./style.scss";

const EditComponent = ({
  setOpenEdit,
  id,
  setFormId,
  name,
  setName,
  description,
  setDescription,
  price,
  setPrice,
}) => {
  const handleEdit = () => {
    setOpenEdit((prev) => !prev);
    setFormId(id);
    setName(name);
    setDescription(description);
    setPrice(price);
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
