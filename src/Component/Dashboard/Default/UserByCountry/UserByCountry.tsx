import { Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, UserByCountryHeading, Weekly, Yearly } from "../../../../utils/Constant";
import { H2, H6, SVG } from "../../../../AbstractElements";
import CountriesMap from "./CountriesMap";
const UserByCountry = () => {
  return (
    <Col xl="4" lg="6" md="6">
      <Card className="user-country">
        <CommonCardHeader headClass="pb-0" title={UserByCountryHeading} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly}  />
        <CardBody>
          <div className="d-flex">
            <H2 className="me-2">216.459</H2>
            <span className="bg-light-success">
              <SVG iconId="up-arrow" />
            </span>
            <H6 className="font-success">+ 5.09%</H6>
          </div>
          <span>Increase than last month</span>
          <CountriesMap />
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserByCountry;
