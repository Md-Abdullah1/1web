import { Col, Row } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import { FeaturedTutorials } from '../../../../utils/Constant'
import FaqFeaturesTutorialDetail from './FaqFeaturesTutorialDetail'

const FAQFeaturesTutorial = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <H3 className="mb-0">{FeaturedTutorials}</H3>
      </div>
      <Row>
        <FaqFeaturesTutorialDetail />
      </Row>
    </Col>
  )
}

export default FAQFeaturesTutorial