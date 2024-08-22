import { Card, CardBody, Col } from 'reactstrap'
import { tourProfileData, userCardData } from '../../../../Data/Application/SocialApp/SocialApp'
import { H3, H5, Image, LI, SVG, UL } from '../../../../AbstractElements'
import { dynamicImage } from '../../../../Service'
import { Link } from 'react-router-dom'
import { Followers, Following, Href, Posts } from '../../../../utils/Constant'

const FriendsCard = () => {
  return (
    <>
      {userCardData.slice(0,6).map((item) => (
        <Col sm="12" lg="6" md="6" xl="4" className="box-col-4" key={item.id}>
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <Image src={dynamicImage(item.avatar)} alt="user"/>
                </div>
                <div className="edit-icon">
                  <SVG iconId={item.icon}/>
                </div>
              </div>
              <div className="social-details">
                <H5 className="mb-1">
                  <Link to={Href}>{item.name}</Link>
                </H5>
                <span className="f-light">{item.email}</span>
                <UL className="card-social simple-list flex-row">
                  {tourProfileData.map((item, index) => (
                    <LI className="list-inline-item" key={index}>
                      <Link to={item.link} target="_blank" rel="noreferrer">
                        <i className={`${item.icon} font-primary`} />
                      </Link>
                    </LI>
                  ))}
                </UL>
                <UL className="social-follow simple-list flex-row">
                  <LI>
                    <H3 className="mb-0">{item.totalPost}</H3>
                    <span className="f-light">{Posts}</span>
                  </LI>
                  <LI>
                    <H3 className="mb-0">{item.follower}</H3>
                    <span className="f-light">{Followers}</span>
                  </LI>
                  <LI>
                    <H3 className="mb-0">{item.following}</H3>
                    <span className="f-light">{Following}</span>
                  </LI>
                </UL>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default FriendsCard