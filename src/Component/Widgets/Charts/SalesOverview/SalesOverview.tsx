import { Card, CardBody, CardHeader, Col } from "reactstrap";
import ReactApexChart from "react-apexcharts";
import { salesOverview } from "../../../../Data/Widgets/WidgetsChartData";
import { H4 } from "../../../../AbstractElements";
import { SalesOverviews } from "../../../../utils/Constant";
import CardHeaderDropDown from "../../../../CommonElements/CommonCardHeader/CardHeaderDropDown";

const SalesOverview = () => {
  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
        <CardHeader>
          <H4>{SalesOverviews}</H4>
          <CardHeaderDropDown firstItem="Today" secondItem="Tomorrow" thirdItem="Yesterday" mainTitle={false} menuTitle={"Today"} />
        </CardHeader>
        <CardBody>
          <div className="chart-container progress-chart">
            <ReactApexChart options={salesOverview} series={salesOverview.series} height={320} type="line"> </ReactApexChart>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesOverview;
