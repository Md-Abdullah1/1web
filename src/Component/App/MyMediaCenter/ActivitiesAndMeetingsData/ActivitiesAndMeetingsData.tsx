import { Card, CardBody, Col, Row } from "reactstrap";
import { H4, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import SearchInput from "../../../Application/SearchResult/SearchInput/SearchInput";
import { useState } from "react";
import { items } from "../../CouponsData/CouponsData";
import { Carousel } from "react-responsive-carousel";
import ActivityMeetingsModal from "./ActivityMeetingsModal";
// import { AttendanceFormValidationProp } from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
import { AttendanceSystemData } from "../../../../Data/Tools/BrandSupportTools/ButtonActions";

export const randomData = [
  { id: 1, src: "masonry/1.jpg" },
  { id: 2, src: "masonry/2.jpg" },
  { id: 3, src: "masonry/3.jpg" },
  { id: 4, src: "masonry/4.jpg" },
];

const ActivitiesAndMeetingsData = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };

  const images_a = [
    "masonry/1.jpg",
    "masonry/1.jpg",
    "masonry/1.jpg",
    "masonry/1.jpg",
    "masonry/1.jpg",
  ];
  const images_b = [
    "masonry/2.jpg",
    "masonry/2.jpg",
    "masonry/2.jpg",
    "masonry/2.jpg",
    "masonry/2.jpg",
  ];

  const [dataId, setDataId] = useState<undefined | string>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handlePopupClick = (id: string) => {
    setDataId(id);
    setOpenModal(true);
  };

  return (
    <Card>
      <SearchInput />
      <CardBody className="pt-2 ">
        <Row>
          {AttendanceSystemData?.map((activity, index) => {
            return (
              <div id="gridId" className={`col-xl-3 col-sm-6 `} key={index}>
                <Card>
                  <div className="product-box border ">
                    <div className="product-img">
                      <Carousel
                        className="owl-carousel owl-theme"
                        showStatus={false}
                        showIndicators={false}
                        showArrows={true}
                        swipeable={false}
                        autoPlay={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        stopOnHover={true}
                        onClickItem={() =>
                          handlePopupClick(activity.referenceid)
                        }
                      >
                        {index % 2 == 0
                          ? images_a.map((image, index) => {
                              return (
                                <>
                                  <div className="item" key={index}>
                                    <img
                                      src={dynamicImage(`${image}`)}
                                      alt=""
                                    />
                                    <div className="product-hover">
                                      <UL className="simple-list flex-row">
                                        <LI>
                                          <Link to={``}>
                                            <i className="icon-eye"></i>
                                          </Link>
                                        </LI>
                                      </UL>
                                    </div>
                                  </div>
                                </>
                              );
                            })
                          : images_b.map((image, index) => {
                              return (
                                <>
                                  <div className="item" key={index}>
                                    <img
                                      src={dynamicImage(`${image}`)}
                                      alt=""
                                    />
                                    <div className="product-hover">
                                      <UL className="simple-list flex-row">
                                        <LI>
                                          <Link to={``}>
                                            <i className="icon-eye"></i>
                                          </Link>
                                        </LI>
                                      </UL>
                                    </div>
                                  </div>
                                </>
                              );
                            })}
                      </Carousel>
                    </div>
                    <div className="product-details">
                      <div className="d-flex border-0 border-bottom mb-0">
                        {/* <Image
                          className="img-50 rounded-circle m-r-15"
                          src={dynamicImage(`user/user.png`)}
                          alt="user"
                        /> */}
                        <div className={`social-status social-online`} />
                        <div className="flex-grow-1">
                          <span className="d-block">
                            {activity.activitytitle}
                          </span>
                        </div>
                      </div>
                      <div className="blog-box blog-grid text-center product-box border-0 border-bottom mb-1">
                        <div className="blog-details-main simple-list flex-row">
                          <UL className="blog-social  flex-row mt-0 mb-0">
                            <LI>{activity.startdates.split('T')[0]}</LI>
                            <LI> {activity.publicactivity}</LI>
                            {/* <LI>0 Hits</LI> */}
                          </UL>
                        </div>
                      </div>
                      <Link
                        to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}
                      >
                        {/* <H4>{`Name`}</H4> */}
                      </Link>
                      <P>{activity.description}</P>
                      {/* <div className="product-price"> */}
                      <div>
                        {/* {`$`}
                        {`50`}{" "} */}
                        {/* <del>
                          {`$`}
                          {`45.00`}
                        </del> */}
                        {activity.phonenumber ? activity.phonenumber : activity.fulladdress}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
          {openModal && (
            <ActivityMeetingsModal
              value={openModal}
              setOpenModal={setOpenModal}
              dataId={dataId}
            />
          )}
        </Row>
      </CardBody>
    </Card>
  );
};

export default ActivitiesAndMeetingsData;
