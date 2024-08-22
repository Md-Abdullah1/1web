import { Card, CardBody, Col } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import { articleDataTwo } from "../../../../Data/Miscellaneous/Faq/Faq";

const ArticleVideo2 = () => {
  return (
    <Col xl="4" md="6">
      {articleDataTwo.map((item, i) => (
        <Card key={i}>
          <CardBody>
            <div className="d-flex">
              {item.iconClass}
              <div className="flex-grow-1">
                <H6 className="f-w-600 mb-2">{item.title}</H6>
                <P>{item.description}</P>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};

export default ArticleVideo2;
