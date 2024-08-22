import { Row, Col, Label, FormGroup } from "reactstrap";
import CommonSwitchSpan from "../../../../Component/Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import { ErrorMessage, Field } from "formik";

const TestOrQuizSettingsForm = (props: any) => {
  const { submitErrors, errors } = props;

  return (
    <>
      <Row>
        <Col className="mb-3">
          <h4>Test or Quiz Settings</h4>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Questions Count <span className="txt-danger">*</span>
          </Label>
          <Field
            type="text"
            name="questionsCount"
            placeholder="Questions Count"
            className={`form-control ${
              submitErrors &&
              `${errors.questionsCount ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="questionsCount"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Maximum Incorrect Answer (Optional)</Label>
          <Field
            type="text"
            name="maximum-incorrect-answer"
            placeholder="Maximum Incorrect Answer"
            className="form-control"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Negative Marking for Incorrect Answer for Obligator Questions
          </Label>
          <Row>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="zero2"
                  name="negativeMakingObligator"
                  type="radio"
                  className="form-check-input"
                />
                <Label className="mb-0" for="zero2" check>
                  Zero ( 0 )
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="negative-grade"
                  name="negativeMakingObligator"
                  type="radio"
                  className="form-check-input"
                  checked
                />
                <Label className="mb-0" for="negative-grade" check>
                  Negative Grade
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Negative Marking for Incorrect Answer for Optional Questions
            (Optional)
          </Label>
          <Row>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="zero1"
                  name="negativeMakingOptional"
                  type="radio"
                  className="form-check-input"
                />
                <Label className="mb-0" for="zero1" check>
                  Zero ( 0 )
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="negative-grade1"
                  name="negativeMakingOptional"
                  type="radio"
                  className="form-check-input"
                  checked
                />
                <Label className="mb-0" for="negative-grade1" check>
                  Negative Grade
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Show Explanation (Optional)</Label>
          <Row>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="show-explanation-no"
                  name="showExplanation"
                  type="radio"
                  className="form-check-input"
                />
                <Label className="mb-0" for="show-explanation-no" check>
                  No
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="show-explanation-yes"
                  name="showExplanation"
                  type="radio"
                  checked
                  className="form-check-input"
                />
                <Label className="mb-0" for="show-explanation-yes" check>
                  Yes
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Show Correct Answer (Optional)</Label>
          <Row>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="show-currect-answer-no"
                  name="showCurrectAnswer"
                  type="radio"
                  className="form-check-input"
                />
                <Label className="mb-0" for="show-currect-answer-no" check>
                  No
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="show-currect-answer-yes"
                  name="showCurrectAnswer"
                  type="radio"
                  checked
                  className="form-check-input"
                />
                <Label className="mb-0" for="show-currect-answer-yes" check>
                  Yes
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Show Final Score <span className="txt-danger">*</span>
          </Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="showFinalScore"
                className={`${submitErrors && `${errors.showFinalScore ? "danger" : "primary"}`}`}
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Allow Retaking <span className="txt-danger">*</span>
          </Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="allowRetaking"
                className={`${submitErrors && `${errors.allowRetaking ? "danger" : "primary"}`}`}
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default TestOrQuizSettingsForm;
