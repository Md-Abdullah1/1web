import { Col, Row } from 'reactstrap'
import LeftSideBar from './LeftSideBar/LeftSideBar'
import NewUserClass from './NewUserClass/NewUserClass'
import RightSideBar from './RightSideBar/RightSideBar'

const TimelineTab = () => {
  return (
    <Row>
      <Col className="col-xl-3 xl-40 col-lg-12 col-md-5 box-col-4">
        <div className="default-according style-1 faq-accordion job-accordion">
          <LeftSideBar />
        </div>
      </Col>
      <Col className="col-xl-6 xl-60 col-lg-12 col-md-7 box-col-8e">
        <NewUserClass /> 
      </Col>
      <Col className="col-xl-3 xl-100 box-col-12">
        <div className="default-according style-1 faq-accordion job-accordion" >
          <Row>
            <RightSideBar />
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default TimelineTab