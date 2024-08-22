import { Row, Col, Label } from "reactstrap";
import { ErrorMessage, Field } from "formik";

function TimeslotForm(props: any) {
  const { index, title, errors, submitErrors, value, removeFormHandler, arrayHelpers } = props; 
  const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = errors;

  let timeSlotError = [];
  if(title.toLowerCase() === 'monday'){
    timeSlotError = monday?.length && monday[index];
  }else if(title.toLowerCase() === 'tuesday'){
    timeSlotError = tuesday?.length && tuesday[index];
  }else if(title.toLowerCase() === 'wednesday'){
    timeSlotError = wednesday?.length && wednesday[index];
  }else if(title.toLowerCase() === 'thursday'){
    timeSlotError = thursday?.length && thursday[index];
  }else if(title.toLowerCase() === 'friday'){
    timeSlotError = friday?.length && friday[index];
  }else if(title.toLowerCase() === 'saturday'){
    timeSlotError = saturday?.length && saturday[index];
  }else if(title.toLowerCase() === 'sunday'){
    timeSlotError = sunday?.length && sunday[index];
  }  

  return (
    <Row>
      <Col sm="5" className="mb-3">
        <Label check>Opening Time</Label>
        <Field
          name={`${title.toLowerCase()}.${index}.openingTime`}
          type="time"
          placeholder="Enter Opening Time"
          className={`form-control ${
            submitErrors &&
            `${timeSlotError?.openingTime ? "is-invalid" : "is-valid"}`
          }`}
        />
        <ErrorMessage
            name={`${title.toLowerCase()}.${index}.openingTime`}
            component="span"
            className="invalid-feedback"
          />
      </Col>
      <Col sm="5" className="mb-3">
        <Label check>
          Closing Time
          <span className="txt-danger">*</span>
        </Label>
        <Field
          name={`${title.toLowerCase()}.${index}.closingTime`}
          type="time"
          placeholder="Enter Closing Time"
          className={`form-control ${
            submitErrors &&
            `${timeSlotError?.closingTime ? "is-invalid" : "is-valid"}`
          }`}
        />
        <ErrorMessage
            name={`${title.toLowerCase()}.${index}.closingTime`}
            component="span"
            className="invalid-feedback"
          />
      </Col>
      <Col sm="2" className="mb-3 pt-4">
        <Label check></Label>
        <span className="btn btn-outline-danger" style={{margin:'5px'}} onClick={() => removeFormHandler(value,arrayHelpers,index)}>
          <i className="fa fa-trash-o"></i>
        </span>
      </Col>
    </Row>
  );
}

export default TimeslotForm;
