import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, ProjectDeliveriesHeading, Weekly, Yearly } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { companyViewChartData } from "../../../../Data/Dashboard/DashboardChart/DashboardChart";

const ProjectDeliveries = () => {
  return (
    <Col xl="3" lg="12" md="6" className="box-col-12">
      <Card>
        <CommonCardHeader headClass="pb-0" title={ProjectDeliveriesHeading} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="p-0">
          <ReactApexChart options={companyViewChartData} series={companyViewChartData.series} height={330} type="area" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectDeliveries;
