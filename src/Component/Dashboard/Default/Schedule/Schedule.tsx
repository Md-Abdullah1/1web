import { Card, CardBody, Col } from "reactstrap";
import { Monthly, Schedules, Weekly, Yearly } from "../../../../utils/Constant";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import moment from "moment";
import ReactCalendarTimeline from "react-calendar-timeline";
import { onlineTimelineGroup, onlineTimelineItems } from "../../../../Data/Dashboard/Default/Default";
const Schedule = () => {
  return (
    <Col xl="4">
      <Card className="schedule">
        <CommonCardHeader headClass="pb-0" title={Schedules} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody>
          <div className="timeline-calendar custom-scrollbar">
            <div className="custom-calendar" id="calendar-container">
              <div className="time-line" id="calendar">
                <ReactCalendarTimeline
                  groups={onlineTimelineGroup}
                  items={onlineTimelineItems}
                  defaultTimeStart={moment().add(-12, "hour")}
                  defaultTimeEnd={moment().add(12, "hour")}
                />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Schedule;
