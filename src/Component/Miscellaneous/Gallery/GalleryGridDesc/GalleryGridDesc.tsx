import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { Gallery, GalleryGridWithDescriptionCap, GalleryGridWithDescriptions } from '../../../../utils/Constant'
import DescriptionMyGallery from './DescriptionMyGallery'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const GalleryGridDescContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={GalleryGridWithDescriptions} parent={Gallery} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeaderCommon title={GalleryGridWithDescriptionCap} />
              <CardBody className="my-gallery gallery-with-description">
                <Row>
                  <DescriptionMyGallery />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default GalleryGridDescContainer