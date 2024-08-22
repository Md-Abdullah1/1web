import { mobileAppData } from "../../../../Data/Dashboard/Project/Project";
import { Card, CardBody, Col } from "reactstrap";
import { H6, SVG } from "../../../../AbstractElements";
import ClientBudget from "../../../Dashboard/Project/MobileApp/ClientBudget";
import UserDetails from "../../../Dashboard/Project/MobileApp/UserDetails";

const MobileApp = () => {
  return (
    <>
      {mobileAppData.map((data, i) => (
        <Col xl="2" md="4" sm={i !== 2 ? "6" : "4"} className={`${i !== 2 ?"col-xl-25" : "finance"} `} key={i}>
          <Card className="mobile-app">
            <CardBody className={data.class}>
              <div className="app-design">
                <div className="d-flex">
                  <div className={`flex-shrink-0 bg-light-${data.color} me-2`}>
                    <SVG iconId={data.svgIcon} />
                  </div>
                  <div className="flex-grow-1">
                    <H6>{data.title}</H6>
                    <span>{data.email}</span>
                  </div>
                </div>
              </div>
              <ClientBudget data={data} />
              <UserDetails data={data} />
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MobileApp;
