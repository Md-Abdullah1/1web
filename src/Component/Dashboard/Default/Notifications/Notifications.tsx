import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, NotificationsHeading, Weekly, Yearly } from "../../../../utils/Constant";
import NotificationsTab from "./NotificationsTab";
import { useState } from "react";
import NotificationsFirstTabContent from "./NotificationsFirstTabContent";
import NotificationsTwoTabContent from "./NotificationsTwoTabContent";
import NotificationsThreeTabContent from "./NotificationsThreeTabContent";

const Notifications = () => {
  const [navId,setNavId] = useState(1)
  return (
    <Col xl="4" lg="6" md="6">
      <Card className="notifications-tabs">
        <CommonCardHeader headClass="pb-0" title={NotificationsHeading} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly}/>
        <CardBody>
          <NotificationsTab setNavId={setNavId} navId={navId}/>
          <NotificationsFirstTabContent navId={navId}/>
          <NotificationsTwoTabContent navId={navId}/>
          <NotificationsThreeTabContent navId={navId}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Notifications;
