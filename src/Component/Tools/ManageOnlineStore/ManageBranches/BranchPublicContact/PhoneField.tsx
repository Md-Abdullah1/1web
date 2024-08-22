import { ErrorMessage, Field } from "formik";
import { Col, Label } from "reactstrap";

function PhoneField(props: any) {
  const { submitErrors, errors, item, index } = props;

  const { phones } = errors;
  const phoneError = phones?.length && phones[index];

  return (
    <Col sm={item !== '1' ? '3' : '4'} className="mb-3">
      <Label check>Public Phone Number</Label>
      <Field
        name={`phones.${index}.phone`}
        type="text"
        placeholder="Phone Number"
        className={`form-control ${
          submitErrors && `${phoneError?.phone ? "is-invalid" : "is-valid"}`
        }`}
      />
      <ErrorMessage
        name={`phones.${index}.phone`}
        component="span"
        className="invalid-feedback"
      />
    </Col>
  );
}

export default PhoneField;
