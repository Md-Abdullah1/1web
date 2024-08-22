import { Row, Col, Label, Input } from "reactstrap";
import { Btn } from "../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import TextCounter from "../CommonInput/TextCounter";

const AddGroupMemberForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values } = props;
  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Group <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="group"
            className={`form-control ${
              submitErrors && `${errors.group ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option>Select a group</option>
            <option value={'1'}>group</option>
          </Field>
          <ErrorMessage
            name="group"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Members <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="members"
            className={`form-control ${
              submitErrors && `${errors.members ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option>Select member</option>
            <option value={"1"}>member</option>
          </Field>
          <ErrorMessage
            name="members"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Invitation Note</Label>
          <Field
            type="textarea"
            name="invitationNote"
            placeholder="Invitation Note"
            className="form-control"
            maxLength='140'
          />
          <TextCounter length={values?.invitationNote?.length} totalLength='140' />
        </Col>
      </Row>
      <Row>
        <Col sm="auto" className="mb-3">
          <Btn
            color="primary me-3"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            <i className="icofont icofont-users"></i> Add Members
          </Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default AddGroupMemberForm;
