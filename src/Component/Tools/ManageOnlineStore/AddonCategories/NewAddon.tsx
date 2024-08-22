import { Row, Col, Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";
import TextCounter from "../../../CommonInput/TextCounter";

const NewAddon = (props: any) => {

  const { errors, submitErrors, index, values } = props;  
  const { addons } = errors; 
  const addonError = addons?.length && addons[index];
  const currentValue = values?.addons?.length && values?.addons[index];

  return (
    <>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Addon Option <span className="txt-danger">*</span>
          </Label>
          <Field 
            name={`addons.${index}.addOnOption`}
            type="text"
            placeholder="Addon Option"
            maxLength='140'
            className={`form-control ${
              submitErrors && `${addonError?.addOnOption ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={currentValue?.addOnOption?.length} totalLength='140'/>
          <ErrorMessage
            name={`addons.${index}.addOnOption`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Addon Extra Price <span className="txt-danger">*</span>
          </Label>
          <Field 
            name={`addons.${index}.addOnExtraPrice`}
            type="text"
            placeholder="Addon Extra Price"
            className={`form-control ${
              submitErrors && `${addonError?.addOnExtraPrice ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name={`addons.${index}.addOnExtraPrice`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Addon Quantity <span className="txt-danger">*</span>
          </Label>
          <Field 
            name={`addons.${index}.addOnQuantity`}
            type="text"
            placeholder="Addon Quantity"
            className={`form-control ${
              submitErrors && `${addonError?.addOnQuantity ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name={`addons.${index}.addOnQuantity`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
    </>
  );
};

export default NewAddon;
