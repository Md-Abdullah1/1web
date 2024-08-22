import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, ProductSalesHeading, Weekly, Yearly } from "../../../../utils/Constant";
import { H2 } from "../../../../AbstractElements";
import CommonProductSalesChart from "./CommonProductSalesChart";

const ProductSales = () => {
  return (
    <Col lg="4" md="12" sm="6" className="col-xl-5a box-col-6">
      <Card className="product-chart">
        <CommonCardHeader headClass="pb-0" title={ProductSalesHeading} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="p-0">
          <div className="d-flex mt-3 px-3"> 
            <H2 className="me-2">$12,000</H2>
            <span>(15,080 To Goal)</span>
          </div>
          <div>
            <CommonProductSalesChart height={220}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductSales;
