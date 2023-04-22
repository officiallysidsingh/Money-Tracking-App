//Axios
import axios from "axios";

// Stylesheet
import "./style.scss";

const EditForm = ({ openEdit, setOpenEdit, formId, setFormId, data }) => {
  const handleEdit = async (e) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);

    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:3000/api/transaction/${id}`,
        {
          name,
          price,
          description,
        }
      );
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
      {data
        ?.filter((item) => (item._id === formId ? item : null))
        .map((item) => (
          <form onSubmit={handleEdit}>
            <div className="basic">
              <input
                type="text"
                value={item.name}
                onChange={(e) => setName(e.target.value)}
                placeholder={"Samsung TV"}
              />
              <input
                type="text"
                value={item.price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder={"200"}
              />
            </div>
            <div className="description">
              <input
                type="text"
                value={item.description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={"Bought A New TV"}
              />
            </div>
            <button type="submit">Edit Transaction</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        ))}
    </div>
  );
};

export default EditForm;
