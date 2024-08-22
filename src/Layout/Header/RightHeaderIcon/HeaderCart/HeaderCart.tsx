import { H3, H5, H6, Image, LI, SVG, UL } from "../../../../AbstractElements";
import CommonModal from "../../../../Component/Ui-Kits/Modal/Common/CommonModal";
import { Cart, Checkout, Href } from "../../../../utils/Constant";
import CartBox from "./CartBox";
import { useState } from "react";
import { cartsData } from "../../../../Data/LayoutData/HeaderData";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

const HeaderCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModalToggle = () => setIsOpen(!isOpen);
  return (
    <LI
      className="cart-nav onhover-dropdown"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="cart-box">
        <FontAwesomeIcon icon={fas.faCartShopping} />
      </div>
      <CommonModal
        isOpen={isOpen}
        toggle={openModalToggle}
        modalBodyClassName="p-0"
        heading="Login"
        size="lg"
      >
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <H3 className="modal-header justify-content-center border-0">
            {Cart}
          </H3>
          <hr />
          <div className="cart-dropdown modal-body px-2">
            <UL className="simple-list">
              {cartsData.map((data, i) => (
                <LI key={i}>
                  <div className="d-flex">
                    <Image
                      className="img-fluid b-r-5 img-60"
                      src={dynamicImage(`ecommerce/${data.img}`)}
                      alt="cart"
                    />
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
                  <hr />
                </LI>
              ))}
              <LI className="total border-bottom">
                <H5 className="mb-0">
                  Subtotal : <span className="f-right">$299.00</span>
                </H5>
              </LI>
              <hr />
              <LI>
                <Link
                  className="view-cart"
                  to={`${process.env.PUBLIC_URL}/ecommerce/cart`}
                  onClick={openModalToggle}
                >
                  {"View Cart"}
                </Link>
                <Link
                  className="view-checkout f-right"
                  to={`${process.env.PUBLIC_URL}/ecommerce/checkout`}
                  onClick={openModalToggle}
                >
                  {Checkout}
                </Link>
              </LI>
            </UL>
          </div>
        </div>
      </CommonModal>
    </LI>
  );
};

export default HeaderCart;
