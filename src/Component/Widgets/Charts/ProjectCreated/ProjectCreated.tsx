import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { ProjectCreatedHeading } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { revenueGrowthChartData } from "../../../../Data/Widgets/WidgetsChartData";

const ProjectCreated = () => {
  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
        <CardHeader>
          <H4>{ProjectCreatedHeading}</H4>
        </CardHeader>
        <CardBody>
          <div className="chart-container skill-chart">
            <ReactApexChart options={revenueGrowthChartData} series={revenueGrowthChartData.series} height={revenueGrowthChartData.chart?.height} type={revenueGrowthChartData.chart?.type} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectCreated;
