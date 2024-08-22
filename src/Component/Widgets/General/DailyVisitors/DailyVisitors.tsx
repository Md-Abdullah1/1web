import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { DailyVisitorsHeading, Monthly, Weekly, Yearly } from "../../../../utils/Constant";
import DailyVisitorsOrderDetails from "../../../Dashboard/Ecommerce/DailyVisitors/DailyVisitorsOrderDetails";
import CommonDailyVisitorsChart from "../../../Dashboard/Ecommerce/DailyVisitors/CommonDailyVisitorsChart";

const DailyVisitors = () => {
  return (
    <Col xl="6" md="8" className="box-col-6">
      <Card className="visitors">
        <CommonCardHeader
          headClass="pb-0"
          title={DailyVisitorsHeading}
          mainTitle={true}
          firstItem={Weekly}
          secondItem={Monthly}
          thirdItem={Yearly}
        />
        <CardBody className="pb-0">
          <Row>
            <CommonDailyVisitorsChart height={255} />
            <DailyVisitorsOrderDetails />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DailyVisitors;
