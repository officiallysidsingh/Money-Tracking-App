import "./style.scss";

const EditForm = ({ openEdit, setOpenEdit }) => {
  return (
    <div className={`editFormCard ${openEdit ? "show" : ""}`}>
      <form>
        {/* <form onSubmit={addNewTransaction}> */}
        <div className="basic">
          <input
            type="text"
            //   value={name}
            //   onChange={(e) => setName(e.target.value)}
            placeholder={"Samsung TV"}
          />
          <input
            type="text"
            //   value={price}
            //   onChange={(e) => setPrice(e.target.value)}
            placeholder={"200"}
          />
        </div>
        <div className="description">
          <input
            type="text"
            //   value={description}
            //   onChange={(e) => setDescription(e.target.value)}
            placeholder={"Bought A New TV"}
          />
        </div>
        <button type="submit">Edit Transaction</button>
        <button type="submit" onClick={() => setOpenEdit((prev) => !prev)}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
