import { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Modal, Row, Table } from "reactstrap";
import { Btn, H3, H4, LI, P, UL } from "../../../../AbstractElements";
import { Carousel } from "react-responsive-carousel";
import { AttendanceSystemData } from "../../../../Data/Tools/BrandSupportTools/ButtonActions";
import { AttendanceFormValidationProp } from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";

export interface ActivitiesModalInterface {
  value: boolean;
  setOpenModal: (value: boolean) => void;
  dataId: undefined | string;
}

const ActivityMeetingsModal = ({
  value,
  setOpenModal,
  dataId,
}: ActivitiesModalInterface) => {
  const [open, setOpen] = useState(value);

  const [singleActivity, setSingleActivity] = useState<
    AttendanceFormValidationProp | undefined | [] | any
  >([]);
  useEffect(() => {
    AttendanceSystemData?.forEach((activity) => {
      if (activity.referenceid === dataId) setSingleActivity(activity);
    });
  }, [AttendanceSystemData, dataId]);
  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };

  const handleRegister = ()=>{
    // temporary alert
    alert("registered")
    return console.log('registered')
  }
  return (
    <Modal
      wrapClassName="product-box"
      fade
      centered
      size="xl"
      isOpen={open}
      toggle={onCloseModal}
    >
      <div className="modal-header" onClick={onCloseModal}>
        {singleActivity?.activitytitle}
        <Btn className="py-0" close></Btn>
      </div>
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
                    <img src="../assets/images/ecommerce/01.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="../assets/images/ecommerce/02.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="../assets/images/ecommerce/03.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="../assets/images/ecommerce/04.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="../assets/images/ecommerce/05.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="../assets/images/ecommerce/06.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="../assets/images/ecommerce/07.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="../assets/images/ecommerce/08.jpg" alt="" />
                  </div>
                </Carousel>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card>
              <CardBody>
                <div className="product-page-details">
                  <H3>{`Activity Details`}</H3>
                </div>
                <>
                  <hr />
                  <div>
                    <H4>Title : {singleActivity?.activitytitle}</H4>
                    <P>Type : {singleActivity?.activitytype}</P>
                  </div>

                  <hr />
                  <P>Description: {singleActivity?.description}</P>
                  <hr />
                  <div>
                    <Table className="product-page-width">
                      <tbody>
                        <tr>
                          <td>
                            <b>category : </b>
                          </td>
                          <td>{singleActivity.subcategory}</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Duration :</b>
                          </td>
                          <td>{singleActivity?.duration} hrs</td>
                        </tr>
                        <tr>
                          <td>
                            <b>Who can Join : </b>
                          </td>
                          <td>{singleActivity?.publicactivity}</td>
                        </tr>

                        <tr>
                          <td>
                            <b>Keywords : </b>
                          </td>
                          <td>{singleActivity?.keywords?.join(", ")}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                  <hr />

                  <H4 className="product-title">
                    {`ShareIt`} :{" "}
                    {singleActivity?.meetingurl ||
                      singleActivity?.fulladdress ||
                      "Not Specified"}
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
                        <td>
                          {singleActivity.instructions || "Not Specified"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          A participant must Checkout/CheckIn when taking a
                          break
                        </td>
                        <td>{singleActivity.leavingactivity ? "Yes" : "No"}</td>
                      </tr>
                      <tr>
                        <td>
                          A participant must checkout before leaving the
                          activity
                        </td>
                        <td>{singleActivity.breakinactivity ? "Yes" : "No"}</td>
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
                          {singleActivity.activitylocation
                            ? "Offline "
                            : "Online"}
                        </td>
                      </tr>
                      <tr>
                        <td>Address / Platform</td>
                        <td>
                          {singleActivity?.fulladdress ||
                            singleActivity?.meetingplatform ||
                            "Not Specified"}
                        </td>
                      </tr>
                      <tr>
                        <td>Phone Number</td>
                        <td>{singleActivity.phonenumber || "Not Specified"}</td>
                      </tr>
                      <tr>
                        <td>Meeting URL</td>
                        <td>{singleActivity.meetingurl || "Not Specified"}</td>
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
                          {singleActivity.activityfrequency
                            ? "One Time"
                            : "Repeated"}
                        </td>
                      </tr>
                      <tr>
                        <td>Start Date</td>
                        <td>
                          {singleActivity?.startdates?.split("T")[0] ||
                            "Not Specified"}
                        </td>
                      </tr>
                      <tr>
                        <td>Expiry Date</td>
                        <td>
                          {singleActivity?.expirydate?.split("T")[0] ||
                            "Not Specified"}
                        </td>
                      </tr>
                      <tr>
                        <td> Date Ranges</td>
                        <td>{singleActivity?.dateranges || "Not Specified"}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Btn
            color="primary"
            type="button"
            onClick={handleRegister}>Register</Btn>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ActivityMeetingsModal;
