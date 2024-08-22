import { Card, Col, Container, Row } from 'reactstrap'
import { Gallery } from '../../../../utils/Constant'
import MasonryGalleryWithDescCardBody from './MasonryGalleryWithDescCardBody'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'

const MasonryImageDescContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={`Media`} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12" className="box-col-12">
            <Card>
              {/* <CardHeaderCommon title={MasonryGalleryDescriptionCap} /> */}
              <MasonryGalleryWithDescCardBody />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MasonryImageDescContainer