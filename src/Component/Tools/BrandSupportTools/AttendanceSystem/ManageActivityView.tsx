import { Card, CardBody, Col, Row, Table } from "reactstrap";
import { H3, H4, P } from "../../../../AbstractElements";
import { Carousel } from "react-responsive-carousel";
// import ImageLogo from "../../../../../public/assets/images/logo/logo-1-1.png"
const ManageActivityView = ({ rowData }) => {
  console.log("view value", rowData);
  return (
    <div className="modal-body bg-light">
      <Row className="product-box">
        <Col lg="4" sm="12">
          <Card>
            <CardBody>
              <Carousel
                className="owl-carousel owl-theme"
                showStatus={false}
                showIndicators={false}
                showArrows={true}
                swipeable={true}
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={true}
              >
                <div className="item">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ecommerce/01.jpg`}
                    alt="Logo 1"
                  />
                </div>
                <div className="item">
                  <img src={rowData?.image} alt="activity  image" />
                </div>
                <div className="item">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ecommerce/01.jpg`}
                    alt="Logo 1"
                  />
                </div>
                <div className="item">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ecommerce/01.jpg`}
                    alt="Logo 1"
                  />
                </div>
                <div className="item">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ecommerce/01.jpg`}
                    alt="Logo 1"
                  />
                </div>
                <div className="item">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ecommerce/01.jpg`}
                    alt="Logo 1"
                  />
                </div>
                <div className="item">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/ecommerce/01.jpg`}
                    alt="Logo 1"
                  />
                </div>
              </Carousel>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardBody>
              <>
                <div>
                  <H4>Title : {rowData?.activitytitle}</H4>
                  <P>Type : {rowData?.activitytype}</P>
                </div>

                <hr />
                <P>Description: {rowData?.description}</P>
                <hr />
                <div>
                  <Table className="product-page-width">
                    <tbody>
                      
                      <tr>
                        <td>
                          <b>Duration :</b>
                        </td>
                        <td>{rowData?.duration} hrs</td>
                      </tr>
                     
                      <tr>
                        <td>
                          <b>category : </b>
                        </td>
                        <td>{rowData.subcategory || "Not Specified"}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Who can Join : </b>
                        </td>
                        <td>{rowData?.publicactivity}</td>
                      </tr>
                      <tr>
                        <td>
                          <b>KewWords : </b>
                        </td>
                        <td>{rowData?.keywords?.join(", ")}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <hr />

                <H4 className="product-title">
                  {`ShareIt`} : {rowData?.meetingurl || rowData?.fulladdress}
                </H4>
              </>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3 ">
        <Col>
          <Card>
            <CardBody className="mb-3">
              <div className="filter-block">
                <H4 className="mb-3 ">Requirments & Instructions</H4>

                <Table className="product-page-width">
                  <tbody>
                    <tr>
                      <td>Instructions</td>
                      <td>{rowData.instructions || "Not Specified"}</td>
                    </tr>
                    <tr>
                      <td>
                        A participant must Checkout/CheckIn when taking a break
                      </td>
                      <td>{rowData.leavingactivity ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                      <td>
                        A participant must checkout before leaving the activity
                      </td>
                      <td>{rowData.breakinactivity ? "Yes" : "No"}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
          <Row>
            <Col className="mb-3"></Col>
          </Row>
        </Col>
      </Row>
      <Row className="mb-3 ">
        <Col>
          <Card>
            <CardBody className="mb-3">
              <div className="filter-block">
                <H4 className="mb-3 ">Location & Platform</H4>

                <Table className="product-page-width">
                  <tbody>
                    <tr>
                      <td>Offline / Online</td>
                      <td>
                        {rowData.activitylocation ? "Offline " : "Online"}
                      </td>
                    </tr>
                    <tr>
                      <td>Address / Platform</td>
                      <td>
                        {rowData?.fulladdress ||
                          rowData?.meetingplatform ||
                          "Not Specified"}
                      </td>
                    </tr>
                    <tr>
                      <td>Phone Number</td>
                      <td>{rowData.phonenumber || "Not Specified"}</td>
                    </tr>
                    <tr>
                      <td>Meeting URL</td>
                      <td>{rowData.meetingurl || "Not Specified"}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3 ">
        <Col>
          <Card>
            <CardBody className="mb-3">
              <div className="filter-block">
                <H4 className="mb-3 ">Dates & Time</H4>

                <Table className="product-page-width">
                  <tbody>
                    <tr>
                      <td>Activity Frequency</td>
                      <td>
                        {" "}
                        {rowData.activityfrequency ? "One Time" : "Repeated"}
                      </td>
                    </tr>
                    <tr>
                      <td>Start Date</td>
                      <td>
                        {rowData?.startdates?.split("T")[0] || "Not Specified"}
                      </td>
                    </tr>
                    <tr>
                      <td>Expiry Date</td>
                      <td>
                        {rowData?.expirydate?.split("T")[0] || "Not Specified"}
                      </td>
                    </tr>
                    <tr>
                      <td> Date Ranges</td>
                      <td>{rowData?.dateranges || "Not Specified"}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ManageActivityView;
