// SWR
import { mutate } from "swr";

// Axios
import axios from "axios";

// Toast
import { toast } from "react-hot-toast";

// Stylesheet
import "./style.scss";

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

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
      const res = await axios.put(`${BASE_URL}/transaction/${id}`, {
        name,
        price: priceToNumber,
        description,
      });
      mutate(`${BASE_URL}/transaction`);
      setOpenEdit(false);
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
        <button type="submit" className="edit">
          Edit Transaction
        </button>
        <button type="button" className="cancel" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
