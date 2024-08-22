import { Col, Container, Row } from 'reactstrap'
import CardViewSidebar from '../Common/CardViewSidebar/CardViewSidebar'
import MainCard from './MainCard/MainCard'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { JobDetails, JobSearch } from '../../../../utils/Constant'

const JobDetailsContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={JobDetails} parent={JobSearch} />
      <Container fluid>
        <Row>
          <Col xxl="3" xl="4" className="box-col-4e">
            <div className="md-sidebar">
              <CardViewSidebar />
            </div>
          </Col>
          <Col xxl="9" xl="8" className="box-col-8">
            <MainCard />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default JobDetailsContainer