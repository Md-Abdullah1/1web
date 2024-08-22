import { Card, CardBody, Container, Row } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import {
  BillingDetails,
  Checkouts,
  MarketplaceText,
} from "../../../../utils/Constant";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import ProductCheckout from "./ProductCheckout/ProductCheckout";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";

const CheckoutContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Checkouts} parent={MarketplaceText} />
      <Container fluid>
        <Card>
          <CommonCardHeader title={BillingDetails} headClass="pb-0" />
          <CardBody>
            <Row>
              <CheckoutForm />
              <ProductCheckout />
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CheckoutContainer;
