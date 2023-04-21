// React Hooks
import { useEffect } from "react";

// Stylesheet
import "./style.scss";

const Transactions = ({ allData, isLoading, error }) => {
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      {allData?.map((item) => (
        <div className="transactions" key={item._id}>
          <div className="transaction">
            <div className="left">
              <div className="name">{item.name}</div>
              <div className="description">{item.description}</div>
            </div>
            <div className="right">
              <div className={`price ${item.price > 0 ? "green" : "red"}`}>
                {item.price < 0 ? "-" : ""} &#8377;{Math.abs(item.price)}
              </div>
              <div className="datetime">{item.createdAt}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Transactions;
