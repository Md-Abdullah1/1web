import { Row, Col, Label } from "reactstrap";
import { Btn } from "../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import TextCounter from "../CommonInput/TextCounter";

const InviteContactForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values } = props;

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="6" className="mb-3">
          <Label check>
            Username <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="userName" 
            className={`form-control ${
              submitErrors && `${errors.userName ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please username</option>
            <option value={"1"}>username</option>
          </Field> 
          <ErrorMessage
            name="userName"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="6" className="mb-3">
          <Label check>
            Invitation Message <span className="txt-danger">*</span>
          </Label>
          <Field
            type="textarea"
            name="invitationMessage"
            placeholder="Invitation Message"
            maxLength='140'
            className={`form-control ${
              submitErrors &&
              `${errors.invitationMessage ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.invitationMessage?.length} totalLength='140'/>
          <ErrorMessage
            name="invitationMessage"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="auto" className="mb-3">
          <Btn
            color="primary me-3"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            Save Contact
          </Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default InviteContactForm;
