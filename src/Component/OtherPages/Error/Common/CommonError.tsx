import { Col, Container } from "reactstrap";
import { Btn, H3, P } from "../../../../AbstractElements";
import { BackToHomePage } from "../../../../utils/Constant";
import { CommonErrorPageType } from "../../../../Types/OtherPages/OtherPages";

const CommonError: React.FC<CommonErrorPageType> = ({ src }) => {
  return (
    <div className="page-wrapper compact-wrapper">
      <div className="error-wrapper">
        <Container>
          <div className="svg-wrraper">
            {src}
          </div>
          <Col md="8" className="offset-md-2">
            <H3>Page Not Found</H3>
            <P className="sub-content">
              {
                "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved."
              }
            </P>
            <Btn
              tag="a"
              color={`primary`}
              href={`${process.env.PUBLIC_URL}/dashboard/user-dashboard`}
            >
              {BackToHomePage}
            </Btn>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default CommonError;
