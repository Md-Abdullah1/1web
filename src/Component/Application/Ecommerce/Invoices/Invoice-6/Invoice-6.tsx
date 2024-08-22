import { Card, CardBody, Col, Container, Row } from "reactstrap";
import InvoiceSixPrint from "./InvoiceSixPrint";
import InvoiceSixHeader from "./InvoiceSixHeader";
import UserDetails from "./UserDetails";
import InvoiceSixTable from "./InvoiceSixTable";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Tools, InvoiceSix } from "../../../../../utils/Constant";
import { useRef } from "react";

const InvoiceSixContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceSix} parent={Tools} />
      <Container>
        <div ref={componentRef}>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <div className="invoice">
                    <div>
                      <InvoiceSixHeader />
                      <hr />
                      <UserDetails />
                      <InvoiceSixTable />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <InvoiceSixPrint componentRef={componentRef} />
      </Container>
    </>
  );
};

export default InvoiceSixContainer;
