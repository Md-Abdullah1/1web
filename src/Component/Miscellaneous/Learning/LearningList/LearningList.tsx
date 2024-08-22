import { Col, Container, Row } from 'reactstrap'
import MainLearningCards from './MainLearningCards/MainLearningCards'
import SmallLearningCards from './SmallLearningCards/SmallLearningCards'
import CourseFilter from './CourseFilter/CourseFilter'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Learning, LearningList } from '../../../../utils/Constant'

const LearningListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={LearningList} parent={Learning} />
      <Container fluid>
        <Row className='learning-block'>
          <Col xxl="9" xl="8" className="box-col-8">
            <Row>
              <MainLearningCards />
              <SmallLearningCards />
            </Row>
          </Col>
          <Col xl="3" className="xl-40 box-col-12 learning-filter">
            <CourseFilter />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default LearningListContainer