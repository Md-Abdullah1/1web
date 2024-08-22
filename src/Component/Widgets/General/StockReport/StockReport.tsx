import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, StockReportHeading, Weekly, Yearly } from "../../../../utils/Constant";
import StockReportDetails from "../../../Dashboard/Ecommerce/StockReport/StockReportDetails";
import CommonStockReportChart from "../../../Dashboard/Ecommerce/StockReport/CommonStockReportChart";

const StockReport = () => {
  return (
    <Col xl="5" lg="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={StockReportHeading} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="p-0">
          <StockReportDetails />
          <CommonStockReportChart height={247} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StockReport;
