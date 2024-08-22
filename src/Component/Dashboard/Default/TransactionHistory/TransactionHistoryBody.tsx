import { H5, SVG } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { transactionHistoryBodyData } from "../../../../Data/Dashboard/Default/Default";

const TransactionHistoryBody = () => {
  return (
    <>
      {transactionHistoryBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex">
              <span className={`bg-light-${data.color} history`}>
                <SVG iconId={data.icon} />
              </span>
              <div className="flex-grow-1 ms-2">
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/productlist`}>
                  <span>{data.title}</span>
                  <H5>{data.date}</H5>
                </Link>
              </div>
            </div>
          </td>
          <td>{data.status}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </>
  );
};

export default TransactionHistoryBody;
