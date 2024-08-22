import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, ProductValuationHeading, Weekly, Yearly } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { orderBarChartData, orderOverviewChartData } from "../../../../Data/Dashboard/DashboardChart/DashboardChart";

const ProductValuation = () => {
  return (
    <Col lg="8" md="7">
      <Card className="transaction-history">
        <CommonCardHeader headClass="pb-0" title={ProductValuationHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} mainTitle={true} />
        <CardBody className="pb-0">
          <div className="current-sale-container order-container">
            <div className="overview-wrapper" >
              <ReactApexChart options={orderOverviewChartData} series={orderOverviewChartData.series} height={250} type="line" />
            </div>
            <div className="back-bar-container">
              <ReactApexChart options={orderBarChartData} series={orderBarChartData.series} height={180} type="bar" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductValuation;
