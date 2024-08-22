import { Card, CardBody, Col, Container } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Carts, MarketplaceText } from "../../../../utils/Constant";
import CartData from "./CartData";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";

const CartContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Carts} parent={MarketplaceText} />
      <Container fluid>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={Carts} headClass="pb-0" />
            <CardBody>
              <CartData />
            </CardBody>
          </Card>
        </Col>
      </Container>
    </>
  );
};

export default CartContainer;
