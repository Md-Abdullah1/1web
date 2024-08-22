import { Card, CardHeader, Col, Row } from 'reactstrap'
import { BrowseArticles, KnowledgeArticle } from '../../../../utils/Constant'
import { H3 } from '../../../../AbstractElements'
import CategoryDataCardBody from './CategoryDataCardBody'

const CategoryData = () => {
  return (
    <Col sm="12">
      <div className="header-faq">
        <H3 className="mb-0">{KnowledgeArticle}</H3>
      </div>
      <Row>
        <Col sm="12">
          <Card>
            <CardHeader>
              <H3>{BrowseArticles}</H3>
            </CardHeader>
            <CategoryDataCardBody />
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default CategoryData