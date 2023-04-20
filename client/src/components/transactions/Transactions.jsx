// SWR
import useSWR from "swr";

import "./style.scss";

const fetcher = (url) => fetch(url).then((res) => res.json());

// const expenseOrIncome = (data?.price) => {
//     const sign = data?.price.split("$")[0];
//     if(sign === "-") return "red";
//     return "green";
//   }

const Transactions = () => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/transaction",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <>
      {data?.map((item) => (
        <div className="transactions" key={item._id}>
          <div className="transaction">
            <div className="left">
              <div className="name">{item.name}</div>
              <div className="description">{item.description}</div>
            </div>
            <div className="right">
              <div
                className={`price ${
                  item?.price.split("$")[0] === "-" ? "red" : "green"
                }`}
              >
                {item.price}
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
