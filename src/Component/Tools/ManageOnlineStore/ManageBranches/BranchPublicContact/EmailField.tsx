import { ErrorMessage, Field } from "formik";
import { Col, Label } from "reactstrap";

function EmailField(props: any) {
  
  const { submitErrors, errors, item, index } = props;

  const { emails } = errors;
  const emailError = emails?.length && emails[index];

  return (
    <Col sm={ item !== '1' ? '3' : '4' } className="mb-3">
      <Label check>Public Email</Label>
      <Field
        name={`emails.${index}.email`}
        type="email"
        placeholder="Pubic Email"
        className={`form-control ${
          submitErrors && `${emailError?.email ? "is-invalid" : "is-valid"}`
        }`}
      />
      <ErrorMessage
        name={`emails.${index}.email`}
        component="span"
        className="invalid-feedback"
      />
    </Col>
  );
}

export default EmailField;
