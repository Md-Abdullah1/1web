import { Card, CardBody, Col } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import { articleDataOne } from "../../../../Data/Miscellaneous/Faq/Faq";

const ArticleVideo1 = () => {
  return (
    <Col xl="4" md="6">
      {articleDataOne.map((item, i) => (
        <Card key={i}>
          <CardBody>
            <div className="d-flex">
              {item.iconClass}
              <div className="flex-grow-1">
                <H6 className="f-w-600">{item.title}</H6>
                <P>{item.description}</P>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </Col>
  );
};

export default ArticleVideo1;
