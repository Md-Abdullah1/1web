import { Card, CardBody, Col } from "reactstrap";
import { H6, P } from "../../../../AbstractElements";
import { articleDataThird } from "../../../../Data/Miscellaneous/Faq/Faq";

const ArticleVideo3 = () => {
  return (
    <Col xl="4">
      {articleDataThird.map((item, i) => (
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

export default ArticleVideo3;
