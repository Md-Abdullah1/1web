import { Card, CardBody, Col } from "reactstrap";
import { H1, Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { GoPremium } from "../../../../utils/Constant";
import ClockBox from "./ClockBox";

const WelcomeCard = () => {
  return (
    <Col lg="4" md="7" className="box-col-4">
      <Card className="welcome-card">
        <CardBody>
          <div className="d-flex"> 
            <div className="flex-grow-1">
              <H1>Hello,Anna Miller.</H1>
              <P>
                Welcome to the Admin clan! We appreciate your interest in our
                dashboard.
              </P>
              <Link className="btn" to={`${process.env.PUBLIC_URL}/ecommerce/productlist`}>{GoPremium}</Link>
            </div>
            <div className="flex-shrink-0"> 
              <Image src={dynamicImage("dashboard/welcome.png")} alt="welcomeCard" />
            </div>
            <ClockBox />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WelcomeCard;
