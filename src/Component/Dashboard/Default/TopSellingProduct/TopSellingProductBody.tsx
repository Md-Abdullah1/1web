import { H5, Image } from "../../../../AbstractElements";
import { topSellingProductBodyData } from "../../../../Data/Dashboard/Default/Default";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";

const TopSellingProductBody = () => {
  return (
    <>
      {topSellingProductBodyData.map((data, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex">
              <span className={`bg-light-${data.color}`}>
                <Image src={dynamicImage(`dashboard/product/${data.image}`)} alt="product" />
              </span>
              <div className="flex-grow-1 ms-2">
                <Link to={`${process.env.PUBLIC_URL}/ecommerce/productlist`}>
                  <span>{data.productName}</span>
                  <H5>{data.id}</H5>
                </Link>
              </div>
            </div>
          </td>
          <td>
            <span>Coupon code</span>
            <H5>{data.couponCode}</H5>
          </td>
          <td>
            <Image src={dynamicImage(`dashboard/flag/${data.flagImage}`)} alt="product" />
          </td>
          <td>
            <span>{data.percentage}%</span>
            <H5>${data.amount}</H5>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TopSellingProductBody;
