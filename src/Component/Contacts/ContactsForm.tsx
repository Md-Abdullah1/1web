import { Row, Col, Label, Input } from "reactstrap";
import { Btn } from "../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import TextCounter from "../CommonInput/TextCounter";

function ContactsForm(props: any) {
  const { errors, submitErrors, setSubmitError, values } = props;
  return (
    <>
      <div className="col-lg-12 py-5">
        <p className="lead text-muted mt-0">
          If you need help or have any questions, contact us.
        </p>
      </div>
      <Form className="form-wizard">
        <Row>
          <Col sm="4" className="mb-3">
            <Label check>
              Name <span className="txt-danger">*</span>
            </Label>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              maxLength='140'
              className={`form-control ${
                submitErrors &&
                `${errors.name ? "is-invalid" : "is-valid"}`
              }`}
            />
            <TextCounter length={values?.name?.length} totalLength='140'/>
            <ErrorMessage
              name="name"
              component="span"
              className="invalid-feedback"
            />
          </Col>
          <Col sm="4" className="mb-3">
            <Label check>
              Email <span className="txt-danger">*</span>
            </Label>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={`form-control ${
                submitErrors &&
                `${errors.email ? "is-invalid" : "is-valid"}`
              }`}
            />
            <ErrorMessage
            name="email"
            component="span"
            className="invalid-feedback"
          />
          </Col>
          <Col sm="4" className="mb-3">
            <Label check>
              Subject <span className="txt-danger">*</span>
            </Label>
            <Field
              name="subject"
              type="text"
              placeholder="Subject"
              maxLength='140'
              className={`form-control ${
                submitErrors &&
                `${errors.subject ? "is-invalid" : "is-valid"}`
              }`}
            />
            <TextCounter length={values?.subject?.length} totalLength='140' />
            <ErrorMessage
              name="subject"
              component="span"
              className="invalid-feedback"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="12" className="mb-3">
            <Label check>Message</Label>
            <Field
              name="message"
              as="textarea"
              placeholder="Message"
              className="form-control"
              maxLength='300'
            />
            <TextCounter length={values?.message?.length} totalLength='300' />
          </Col>
        </Row>
        <Row>
          <Col sm="auto" className="mb-3">
            <Btn color="primary" onClick={() => setSubmitError(true)} type="submit">Send</Btn>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default ContactsForm;
