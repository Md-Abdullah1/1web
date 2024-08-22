import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Btn, H5, Image, LI, SVG, UL } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import UserCardsFooter from "../../../Application/Users/UserCards/UserCardsFooter";
import { dynamicImage } from "../../../../Service";
import HeaderWithIcon from "../../../Application/SocialApp/TimelineTab/LeftSideBar/HeaderWithIcon";
import { LatestPhoto } from "../../../../utils/Constant";

export const userCardData = [
  {
    id: 1,
    avatar: "dashboard-8/profile.png",
    icon: "profile-check",
    name: "Brooklyn Simmons",
    email: "@brookly.simmons",
    totalPost: "1,908",
    follower: "34.0k",
    following: "897",
  },
  {
    id: 2,
    avatar: "avtar/3.jpg",
    icon: "profile-check",
    name: "Mark Jecno",
    email: "@mark.jeco",
    totalPost: "875",
    follower: "12.0k",
    following: "1400",
  },
];

export const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const FollowersData = () => {
  return (
    <Row>
      {userCardData.map((item) => (
        <Col xl="3" sm="6" xxl="3" className="col-ed-3 box-col-3" key={item.id}>
          <Card className="social-profile">
            <CardBody>
              <div
                className="w-100 "
                style={{
                  height: 100,
                  backgroundImage: `url(${dynamicImage(`faq/1.jpg`)})`,
                  backgroundSize: "cover",
                }}
              ></div>
              <div className="social-img-wrap" style={{ marginTop: "-8%" }}>
                <div className="social-img">
                  <Image src={dynamicImage(item.avatar)} alt="user" />
                </div>
                <div className="edit-icon">
                  <SVG iconId="profile-check" />
                </div>
              </div>
              <div className="social-details">
                <H5 className="mb-1">
                  <Link to={`${process.env.PUBLIC_URL}/app/socialapp`}>
                    {item.name}
                  </Link>
                </H5>
                <span className="f-light">{item.email}</span>

                <UserCardsFooter item={item} />
              </div>
              <Card className="pt-4">
                <H5>{LatestPhoto}</H5>
                {/* <HeaderWithIcon Heading={LatestPhoto} isOpen={isOpen} setIsOpen={setIsOpen}/> */}
                <Row className="pt-4 pb-4">
                  {numbers.map((data, index) => (
                    <Col key={index}>
                      <div className="latest-post">
                        <Image
                          className="img-fluid "
                          alt="user"
                          src={dynamicImage(`social-app/post-${data}.png`)}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
                <H5>{`Common Friends`}</H5>
                <Row className="pt-4">
                  {numbers.map((data, index) => (
                    <Col key={index}>
                      <div className="latest-post">
                        <Image
                          className="img-fluid rounded"
                          alt="user"
                          src={dynamicImage(`social-app/post-${data}.png`)}
                        />
                      </div>
                    </Col>
                  ))}
                </Row>
                <Row className="pt-4 ">
                  <Col md="12" sm="12" lg="12" className="justify-content-center">
                    {/* <div className="social-btngroup "> */}
                      <Btn
                        color="primary"
                        className="text-center"
                      >{`Follow`}</Btn>
                       <Btn
                        color="light"
                        className="text-center ms-2"
                      >{`Media Center`}</Btn>
                    {/* </div> */}
                  </Col>
                  {/* <Col md="5" sm="5">
                    <div className="social-btngroup ">
                     
                    </div>
                  </Col> */}
                </Row>
              </Card>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default FollowersData