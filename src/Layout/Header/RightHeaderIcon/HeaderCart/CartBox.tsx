import { Link } from "react-router-dom";
import { H5, H6, Image, LI, UL } from "../../../../AbstractElements";
import { cartsData } from "../../../../Data/LayoutData/HeaderData";
import { dynamicImage } from "../../../../Service";
import { Checkout, Href } from "../../../../utils/Constant";

const CartBox = () => {
  return (
    <UL className="simple-list">
      {cartsData.map((data, i) => (
        <LI key={i}>
          <div className="d-flex">
            <Image className="img-fluid b-r-5 img-60" src={dynamicImage(`ecommerce/${data.img}`)} alt="cart" />
            <div className="flex-grow-1">
              <span>{data.userName}</span>
              <H6>${data.amount}</H6>
            </div>
            <div className="close-circle">
              <Link to={Href}>
                <i className="fa fa-times" />
              </Link>
            </div>
          </div>
          <hr/>
        </LI>
        
      ))}
      <LI className="total border-bottom">
        <H5 className="mb-0">
          Subtotal : <span className="f-right">$299.00</span>
        </H5>
      </LI>
      <hr/>
      <LI>
      {/* `${process.env.PUBLIC_URL}/ecommerce/cart` */}
        <Link className="view-cart" to={Href} >
          {"View Cart"}
        </Link>
        {/* `${process.env.PUBLIC_URL}/ecommerce/checkout` */}
        <Link className="view-checkout f-right" to={Href}>
          {Checkout}
        </Link>
      </LI>
      
    </UL>
  );
};

export default CartBox;
