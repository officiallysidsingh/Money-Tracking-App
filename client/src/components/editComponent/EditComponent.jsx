//Axios
import axios from "axios";

// React Icons
import { MdEditNote } from "react-icons/md";

// Stylesheet
import "./style.scss";

const EditComponent = ({ setOpenEdit }) => {
  return (
    <>
      <button className="edit" onClick={() => setOpenEdit((prev) => !prev)}>
        <MdEditNote color="#ddd" />
      </button>
    </>
  );
};

export default EditComponent;
