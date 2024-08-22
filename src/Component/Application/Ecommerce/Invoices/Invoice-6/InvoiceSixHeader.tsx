import { Col, Row } from "reactstrap";
import { H3, Image, P } from "../../../../../AbstractElements";
import { Invoice, Crocs } from "../../../../../utils/Constant";
import CountUp from 'react-countup';
import { dynamicImage } from "../../../../../Service";

const InvoiceSixHeader = () => {
  return (
    <>
      <Row>
        <Col sm="6">
          <div className="d-flex">
            <div className="media-left">
              <Image className="media-object img-80 img-fluid for-light" src={dynamicImage("logo/logo-1.png")} alt="logo" />
              <Image className="media-object img-80 img-fluid for-dark" src={dynamicImage("logo/logo.png")} alt="logo" />
            </div>
            <div className="flex-grow-1 m-l-20 text-right">
              <H3 className="media-heading">{Crocs} </H3>
              <P>
                hello@Crocs.in
                <br />
                <span>289-335-6503</span>
              </P>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <H3>
              {Invoice} #<span className="counter"> <CountUp end={1069} duration={3} /></span>
            </H3>
            <P>
              Issued: May<span> 27, 2024</span>
              <br /> Payment Due: June <span>27, 2024</span>
            </P>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default InvoiceSixHeader;
