import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { FloatingComment, FloatingCommentPlaceholder, FloatingEmail, FloatingPassword } from "../../../../../utils/Constant";

const FloatingEmailInputForm = () => {
  return (
    <>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingEmail}</Label>
          </Col>
          <Col sm="9">
            <FormGroup floating className="mb-0">
              <Input type="email" />
              <Label>{FloatingEmail}</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingPassword}</Label>
          </Col>
          <Col sm="9">
            <FormGroup floating className="mb-0">
              <Input type="password" autoComplete="" />
              <Label>{FloatingPassword}</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
      <FormGroup>
        <Row>
          <Col sm="3">
            <Label>{FloatingComment}</Label>
          </Col>
          <Col sm="9">
            <FormGroup floating className="mb-0">
              <Input
                type="textarea" 
                id="floatingTextarea2"
                style={{ height:"100px"}}
              />
              <Label for="floatingTextarea2">{FloatingCommentPlaceholder}</Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default FloatingEmailInputForm;
