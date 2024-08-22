import { Col, Container, Row } from 'reactstrap'
import CourseFilter from '../LearningList/CourseFilter/CourseFilter'
import BlogSingle from './BlogSingle/BlogSingle'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { DetailedCourse, Learning } from '../../../../utils/Constant'

const DetailsCourseContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DetailedCourse} parent={Learning} />
      <Container fluid>
        <Row className='learning-block'>
          <Col xxl="9" xl="8" className="box-col-8">
            <BlogSingle />
          </Col>
          <Col xl="3" className="xl-40 box-col-12 learning-filter">
            <CourseFilter />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DetailsCourseContainer