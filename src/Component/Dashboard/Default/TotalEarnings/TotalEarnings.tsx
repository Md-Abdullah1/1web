import { Card, Col } from "reactstrap";
import { Monthly, TotalEarningsHeading, Weekly, Yearly } from "../../../../utils/Constant";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { earningsChartData } from "../../../../Data/Dashboard/DashboardChart/DashboardChart";
import CommonCardEarning from "../CommonCardEarning/CommonCardEarning";

const TotalEarnings = () => {
  return (
    <Col xl="2" md="5" sm="6" className="col-xl-25 box-col-3">
      <Card className="earning-card">
        <CommonCardHeader title={TotalEarningsHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} mainTitle={true}/>
        <CommonCardEarning chart={earningsChartData} amount={"$ 12,463"} percentage={"+ 20.08%"} icon={"down-arrow"}/>
      </Card>
    </Col>
  );
};

export default TotalEarnings;
