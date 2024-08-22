import { Input, Label } from "reactstrap";
import { recentOrderBodyBodyData } from "../../../../Data/Dashboard/Default/Default";
import { Btn, H6, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";

const RecentOrderBody = () => {
  return (
    <>
      {recentOrderBodyBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="form-check">
              <Input className="form-check-input" type="checkbox" />
              <Label />
            </div>
          </td>
          <td>{data.no}</td>
          <td>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <Image src={dynamicImage(`dashboard/user/${data.image}`)} alt="product" />
              </div>
              <div className="flex-grow-1 ms-3">
                <Link to={Href}>
                  <H6>{data.customerName}</H6>
                </Link>
              </div>
            </div>
          </td>
          <td>#{data.id}</td>
          <td>{data.date}</td>
          <td>{data.city}</td>
          <td>
            <Btn color={data.color}>{data.status}</Btn>
          </td>
          <td>${data.amount}</td>
        </tr>
      ))}
    </>
  );
};

export default RecentOrderBody;
