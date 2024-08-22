import { Col, Row } from 'reactstrap'
import LeftSideBar from '../TimelineTab/LeftSideBar/LeftSideBar'
import { PeopleKnow, ViewedYourProfile } from '../../../../utils/Constant'
import RightSideBar from '../TimelineTab/RightSideBar/RightSideBar'
import PeopleYouMayKnow from './PeopleYouMayKnow/PeopleYouMayKnow'
import HobbiesAndInterests from './HobbiesAndInterests/HobbiesAndInterests'
import EducationAndEmployment from './EducationAndEmployment/EducationAndEmployment'
import ActivityLog from './ActivityLog/ActivityLog'

const AboutTab = () => {
  return (
    <Row>
      <Col className='col-xl-3 xl-40 col-lg-12 col-md-5 box-col-4'>
        <div className="default-according style-1 faq-accordion">
          <LeftSideBar />
        </div>
      </Col>
      <Col className='col-xl-6 xl-60 col-lg-12 col-md-8 box-col-8e'>
        <Row>
          <PeopleYouMayKnow Heading={PeopleKnow} />
          <HobbiesAndInterests />
          <EducationAndEmployment />
          <PeopleYouMayKnow Heading={ViewedYourProfile} />
          <ActivityLog />
        </Row>
      </Col>
      <Col className='col-xl-3 xl-100 box-col-12'>
        <div className="default-according style-1 faq-accordion job-accordion">
          <Row>
            <RightSideBar />
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default AboutTab