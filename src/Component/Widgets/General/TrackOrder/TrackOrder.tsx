import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, TrackOrderHeading, Weekly, Yearly } from "../../../../utils/Constant";
import TrackOrderPlace from "../../../Dashboard/Ecommerce/TrackOrder/TrackOrderPlace";
import TrackOrderStatus from "../../../Dashboard/Ecommerce/TrackOrder/TrackOrderStatus";

const TrackOrder = () => {
  return (
    <Col xl="4" lg="6" md="6" className="box-col-6">
      <Card>
        <CommonCardHeader headClass="pb-0" title={TrackOrderHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} mainTitle={true} />
        <CardBody>
          <TrackOrderPlace />
          <TrackOrderStatus />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TrackOrder;
