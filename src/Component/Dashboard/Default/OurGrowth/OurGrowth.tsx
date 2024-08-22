import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, OurGrowthHeading, Weekly, Yearly } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { growthChartData } from "../../../../Data/Dashboard/DashboardChart/DashboardChart";

const OurGrowth = () => {
  return (
    <Col lg="5" className="box-col-5">
      <Card>
        <CommonCardHeader headClass="pb-0" title={OurGrowthHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} mainTitle={true} />
        <CardBody className="pt-0">
          <ReactApexChart options={growthChartData} series={growthChartData.series} height={315} type="area"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OurGrowth;
