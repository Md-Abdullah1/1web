import { Row, Col, Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";

function OrderLimitForm(props: any) {

    const { submitErrors, errors, index } = props;

    const { orderlimits } = errors;
    const orderLimitError = orderlimits?.length && orderlimits[index];

  return (
    <Row>
      <Col sm="4" className="mb-3">
        <Label check>Minimum Order Total <span className="txt-danger">*</span></Label>
        <Field
            name={`orderlimits.${index}.minOrderTotal`}
            type="text"
            placeholder="Minimum Order Total"
            className={`form-control ${
              submitErrors && `${orderLimitError?.minOrderTotal ? "is-invalid" : "is-valid"}`
            }`}
          />
        <ErrorMessage
            name={`orderlimits.${index}.minOrderTotal`}
            component="span"
            className="invalid-feedback"
          />
      </Col>
      <Col sm="4" className="mb-3">
        <Label check>Maximum Order Total <span className="txt-danger">*</span></Label>
        <Field
            name={`orderlimits.${index}.maxOrderTotal`}
            type="text"
            placeholder="Maximum Order Total"
            className={`form-control ${
              submitErrors && `${orderLimitError?.maxOrderTotal ? "is-invalid" : "is-valid"}`
            }`}
          />
        <ErrorMessage
            name={`orderlimits.${index}.maxOrderTotal`}
            component="span"
            className="invalid-feedback"
          />
      </Col>
      <Col sm="4" className="mb-3">
        <Label check>Fixed Amount Discount <span className="txt-danger">*</span></Label>
        <Field
            name={`orderlimits.${index}.fixAmountDiscount`}
            type="text"
            placeholder="Fixed Amount Discount"
            className={`form-control ${
              submitErrors && `${orderLimitError?.fixAmountDiscount ? "is-invalid" : "is-valid"}`
            }`}
          />
        <ErrorMessage
            name={`orderlimits.${index}.fixAmountDiscount`}
            component="span"
            className="invalid-feedback"
          />
      </Col>
    </Row>
  );
}

export default OrderLimitForm;
