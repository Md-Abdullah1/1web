import { useState } from "react";
import { Row, Col, Label, Container, FormGroup } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import CommonSwitchSpan from "../../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import Timeslot from "./Timeslot";
import Country from "../../../../CommonInput/Country";
import State from "../../../../CommonInput/State";
import City from "../../../../CommonInput/City";
import Branches from "../../../../CommonInput/Branches";

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function SchedulesForm(props: any) {
  const { errors, submitErrors, setSubmitError } = props;

  const [autoSchedule, setAutoSchedule] = useState(false);

  const onChangeHandler = () => {
    setAutoSchedule((oldFlag) => !oldFlag);
  };

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Country <span className="txt-danger">*</span>
          </Label> 
          <Country name="country" isMulti={false} placeholder="Select country"  className={`${
              submitErrors && `${errors.country ? "is-invalid" : "is-valid"}`
            }`} />
          <ErrorMessage
            name="country"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>State</Label> 
          <State name='state' isMulti={false} placeholder="Select state..."/>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>City</Label>
          <City name='city' isMulti={false} placeholder='Select city...'/>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Branch</Label>
          <Branches name="branch" isMulti={true} placeholder="Select branches..."/>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Final Branch List <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="finalBranchList"
            className={`form-control ${
              submitErrors &&
              `${errors.finalBranchList ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Select final branch list</option>
            <option value={"final-branch"}>Final Branch</option>
          </Field>
          <ErrorMessage
            name="finalBranchList"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Auto Schedule?
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="autoSchedule"
                  onClick={onChangeHandler}
                  color={"primary"}
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
      </Row>
      {!autoSchedule && (
        <Container className="p-5 mb-4" style={{ border: "1px solid #ccc" }}>
          <Row>
            <Col sm={12} className="mb-3">
              <Label check>Time Format</Label>
              <FormGroup check>
                <Field
                  id="timeFormat"
                  name="timeFormat"
                  type="radio"
                  className="form-check-input"
                />
                <Label className={`mb-0`} for="timeFormat" check>
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm={12} className="mb-3">
              <span className="txt-danger">
                <small>
                  NOTE: Please add 2 digits for hours, then 2 digits for minutes
                  (Example: 24:00)
                </small>
              </span>
            </Col>
            <Col sm={12} className="mb-3">
              <span>COMPANY SCHEDULING TIMES</span>
            </Col>
          </Row>
          {WEEKDAYS.map((title, index) => {
            return (
              <Timeslot
                key={index}
                title={title}
                errors={errors}
                submitErrors={submitErrors}
              />
            );
          })}
        </Container>
      )}

      <Row>
        <Col sm="auto" className="mb-3">
          <Btn
            color="primary"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            Save
          </Btn>
        </Col>
      </Row>
    </Form>
  );
}

export default SchedulesForm;
