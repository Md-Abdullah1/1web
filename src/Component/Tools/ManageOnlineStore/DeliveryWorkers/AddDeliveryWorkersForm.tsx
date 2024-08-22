import { Row, Col, Label } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import { ErrorMessage, Field, Form } from "formik";
import Country from "../../../CommonInput/Country";
import State from "../../../CommonInput/State";
import City from "../../../CommonInput/City";
import Branches from "../../../CommonInput/Branches";

const AddDeliveryWorkersForm = (props: any) => {
  const { errors, submitErrors, setSubmitError } = props;

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Delivery Worker's Username <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="deliveryWorkerUsername"
            className={`form-control ${
              submitErrors &&
              `${errors.deliveryWorkerUsername ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please select delivery workers username</option>
            <option value={"1"}>Workers Usersname</option>
          </Field>
          <ErrorMessage
            name="deliveryWorkerUsername"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Confirm User Email <span className="txt-danger">*</span>
          </Label>
          <Field
            name="confirmUserEmail"
            type="text"
            placeholder="Confirm User Email"
            className={`form-control ${
              submitErrors &&
              `${errors.confirmUserEmail ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="confirmUserEmail"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Allowed to Deliver
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="allowedToDeliver"
                  color={"primary"}
                  defaultChecked
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Vehicle’s Type <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="vehicleTypes"
            className={`form-control ${
              submitErrors &&
              `${errors.vehicleTypes ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please select Vehicle’s type</option>
            <option value={"1"}>Suv</option>
          </Field>
          <ErrorMessage
            name="vehicleTypes"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Country <span className="txt-danger">*</span>
          </Label>
          <Country
            name="country"
            isMulti={false}
            placeholder="Select country..."
            className={`${
              submitErrors && `${errors.country ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="country"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>State</Label>
          <State name="state" isMulti={false} placeholder="Select state..." />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            City <span className="txt-danger">*</span>
          </Label>
          <City
            name="city"
            isMulti={false}
            placeholder="Select city..."
            className={`${
              submitErrors && `${errors.city ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="city"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Branch</Label> 
          <Branches name="branch" isMulti={true} placeholder="Select branches..." />
        </Col>
      </Row>
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
};

export default AddDeliveryWorkersForm;
