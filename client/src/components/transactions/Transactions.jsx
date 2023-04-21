// SWR
import useSWR from "swr";

import "./style.scss";
import { useEffect } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Transactions = ({ setBalance }) => {
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/transaction",
    fetcher
  );
  useEffect(() => {
    if (data) {
      let total = 0;
      data.forEach((item) => {
        total += item.price;
      });
      setBalance(total);
    }
  }, [data]);

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