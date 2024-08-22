import { Col, Row } from 'reactstrap'
import { LatestArticles } from '../../../../utils/Constant'
import { H3 } from '../../../../AbstractElements'
import ArticleVideo1 from './ArticleVideo1'
import ArticleVideo2 from './ArticleVideo2'
import ArticleVideo3 from './ArticleVideo3'

const ArticleVideo = () => {
  return (
    <Col lg="12" className='faq-articles'>
      <div className="header-faq">
        <H3 className="mb-0">{LatestArticles}</H3>
      </div>
      <Row>
        <ArticleVideo1 />
        <ArticleVideo2 />
        <ArticleVideo3 />
      </Row>
    </Col>
  )
}

export default ArticleVideo