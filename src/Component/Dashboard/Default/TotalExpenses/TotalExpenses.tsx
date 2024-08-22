import { Card, Col } from "reactstrap";
import { Monthly, TotalExpensesHeading, Weekly, Yearly } from "../../../../utils/Constant";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { expensesChartData } from "../../../../Data/Dashboard/DashboardChart/DashboardChart";
import CommonCardEarning from "../CommonCardEarning/CommonCardEarning";

const TotalExpenses = () => {
  return (
    <Col xl="2" md="5" sm="6" className="expenses-card">
      <Card className="earning-card">
        <CommonCardHeader title={TotalExpensesHeading} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CommonCardEarning chart={expensesChartData} amount={"$ 14,852"} percentage={"+ 60.09%"} icon={"up-arrow"}/>
      </Card>
    </Col>
  );
};

export default TotalExpenses;
