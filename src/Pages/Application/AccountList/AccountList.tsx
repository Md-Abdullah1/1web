import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { dynamicImage } from "../../../Service";
import { Btn, H5, Image, SVG } from "../../../AbstractElements";

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

const AccountList = () => {
  return (
    <div className='page-body'>
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

                
              </div>
              <Card className="pt-4">   
                <Btn className={`btn btn-primary`}>{`Choose`}</Btn>
              </Card>

            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  )
}

export default AccountList