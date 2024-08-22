import { Row, Col, Label, FormGroup } from "reactstrap";
import CommonSwitchSpan from "../../../../Component/Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import { ErrorMessage, Field } from "formik";

function GameSettingsForm(props: any) {
  const { submitErrors, errors, setFieldValue } = props;

  const formTypeHandler = (name: string, flag: string) => {
    setFieldValue(name, flag);
  };

  return (
    <>
      <Row>
        <Col className="mb-3">
          <h4>Game Settings</h4>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Player Type <span className="txt-danger">*</span></Label>
          <Field
            as="select"
            name="playerType"
            className={`mb-2 form-control ${
              submitErrors &&
              `${errors.specialParameters ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Select player type</option>
            <option value={"1"}>Anyone</option>
            <option value={"2"}>Only Followers</option>
          </Field>
          <ErrorMessage
            name="playerType"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Pin Number to access the game</Label>
          <Row>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="gamePinToAccess1"
                  name="gamePinToAccess"
                  type="radio"
                  value="yes"
                  onChange={() => formTypeHandler("gamePinToAccess", "yes")}
                  className="form-check-input"
                />
                <Label className="mb-0" for="gamePinToAccess1" check>
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="gamePinToAccess2"
                  name="gamePinToAccess"
                  type="radio"
                  value="no"
                  onChange={() => formTypeHandler("gamePinToAccess", "no")}
                  className="form-check-input"
                />
                <Label className="mb-0" for="gamePinToAccess2" check>
                  No
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Shuffle and Mix Questions</Label>
          <Row>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="shuffelAndMixQuestions1"
                  name="shuffelAndMixQuestions"
                  type="radio"
                  value="yes"
                  onChange={() =>
                    formTypeHandler("shuffelAndMixQuestions", "yes")
                  }
                  className="form-check-input"
                />
                <Label className="mb-0" for="shuffelAndMixQuestions1" check>
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="shuffelAndMixQuestions2"
                  name="shuffelAndMixQuestions"
                  type="radio"
                  value="no"
                  onChange={() =>
                    formTypeHandler("shuffelAndMixQuestions", "no")
                  }
                  className="form-check-input"
                />
                <Label className="mb-0" for="shuffelAndMixQuestions2" check>
                  No
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default GameSettingsForm;
