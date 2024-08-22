import { Card, CardBody, Col } from 'reactstrap'
import { H3, P } from '../../../../AbstractElements'
import { articleData } from '../../../../Data/Miscellaneous/Faq/Faq'

const Article = () => {
  return (
    <>
      {articleData.map((item) => (
        <Col xl="4" sm={item.sm} className={`"box-col-${item.box}`} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
              <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <H3>{item.title}</H3>
                  <P>{item.paragraph}</P>
                </div>
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default Article