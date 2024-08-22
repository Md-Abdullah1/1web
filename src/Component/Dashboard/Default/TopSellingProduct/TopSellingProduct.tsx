import { Card, CardBody, Col, Table } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, TopSellingProductHeading, Weekly, Yearly } from "../../../../utils/Constant";
import TopSellingProductBody from "./TopSellingProductBody";

const TopSellingProduct = () => {
  return (
    <Col xl="4" md="7" className="col-xl-40 box-col-5e">
      <Card className="selling-product">
        <CommonCardHeader headClass="pb-0" title={TopSellingProductHeading} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody>
          <div className="custom-scrollbar table-responsive">
            <Table  className="display" style={{ width: "100%" }}>
              <tbody>
                <TopSellingProductBody />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TopSellingProduct;
