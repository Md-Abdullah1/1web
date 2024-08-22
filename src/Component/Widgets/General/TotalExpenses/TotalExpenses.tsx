import { Card, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, TotalExpensesHeading, Weekly, Yearly } from "../../../../utils/Constant";
import CommonCardEarning from "../../../Dashboard/Default/CommonCardEarning/CommonCardEarning";
import { expensesChartData } from "../../../../Data/Dashboard/DashboardChart/DashboardChart";

const TotalExpenses = () => {
  return (
    <Col xl="2" lg="4" sm="6" className="expenses-card">
      <Card className="earning-card">
        <CommonCardHeader
          title={TotalExpensesHeading}
          mainTitle={true}
          firstItem={Weekly}
          secondItem={Monthly}
          thirdItem={Yearly}
        />
        <CommonCardEarning
          chart={expensesChartData}
          amount={"$ 14,852"}
          percentage={"+ 60.09%"}
          icon={"up-arrow"}
        />
      </Card>
    </Col>
  );
};

export default TotalExpenses;
