import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import { AddProductServiceList, ManageStore, ProductForm } from "../../../../utils/Constant";
import { H3 } from "../../../../AbstractElements";
import ProductBody from "./ProductBody/ProductBody";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";

const AddProductContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={AddProductServiceList} parent={ManageStore} />
      <Container fluid>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <H3>{ProductForm}</H3>
              </CardHeader>
              <CardBody>
                <ProductBody />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddProductContainer;
