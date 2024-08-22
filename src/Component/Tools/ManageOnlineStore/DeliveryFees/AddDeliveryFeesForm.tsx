import { Row, Col, Label } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import { ErrorMessage, Field, Form } from "formik";
import Country from "../../../CommonInput/Country";
import State from "../../../CommonInput/State";
import City from "../../../CommonInput/City";
import Branches from "../../../CommonInput/Branches";

const AddDeliveryFeesForm = (props: any) => {
  const { errors, submitErrors, setSubmitError } = props;

  return (
    <Form className="form-wizard">
      <Row>
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
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Branch <span className="txt-danger">*</span>
          </Label> 
          <Branches name="branch" isMulti={true} placeholder="Select branches" className={`${
              submitErrors && `${errors.branch ? "is-invalid" : "is-valid"}`
            }`} />
          <ErrorMessage
            name="branch"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Delivery Guy's Earning
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="deliveryGuyEarning"
                  color={"primary"}
                  defaultChecked
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Delivery Guy's Earning From <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="deliveryGuysEarningFrom"
            className={`form-control ${
              submitErrors &&
              `${errors.deliveryGuysEarningFrom ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please select</option>
            <option value={"1"}>Delivery</option>
          </Field>
          <ErrorMessage
            name="deliveryGuysEarningFrom"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Show Delivery Guy's COD Collection
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="showDeliveryGuyCodCollection"
                  color={"primary"}
                  defaultChecked
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Minimum Delivery Fee <span className="txt-danger">*</span>
          </Label>
          <Field
            name="minDeliveryFee"
            type="text"
            placeholder="Minimum Delivery Fee"
            className={`form-control ${
              submitErrors &&
              `${errors.minDeliveryFee ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="minDeliveryFee"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Fee per distance <span className="txt-danger">*</span>
          </Label>
          <Field
            name="feePerDistance"
            type="text"
            placeholder="Fee per distance"
            className={`form-control ${
              submitErrors &&
              `${errors.feePerDistance ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="feePerDistance"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Fee per weight <span className="txt-danger">*</span>
          </Label>
          <Field
            name="feePerWeight"
            type="text"
            placeholder="Fee per weight"
            className={`form-control ${
              submitErrors &&
              `${errors.feePerWeight ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="feePerWeight"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Maximum Distance to Deliver to <span className="txt-danger">*</span>
          </Label>
          <Field
            name="maxDistanceToDeliverTo"
            type="text"
            placeholder="Maximum Distance to Deliver to"
            className={`form-control ${
              submitErrors &&
              `${errors.maxDistanceToDeliverTo ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="maxDistanceToDeliverTo"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Maximum Delivery weight per order{" "}
            <span className="txt-danger">*</span>
          </Label>
          <Field
            name="maxDeliveryWeightPerOrder"
            type="text"
            placeholder="Maximum Delivery weight per order"
            className={`form-control ${
              submitErrors &&
              `${errors.maxDeliveryWeightPerOrder ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="maxDeliveryWeightPerOrder"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Default Commission Rate to Delivery Worker
            <span className="txt-danger">*</span>
          </Label>
          <Field
            name="commissionRateToDeliveryWork"
            type="text"
            placeholder="Default Commission Rate to Delivery Worker (from delivery’s fee)"
            className={`form-control ${
              submitErrors &&
              `${
                errors.commissionRateToDeliveryWork ? "is-invalid" : "is-valid"
              }`
            }`}
          />
          <ErrorMessage
            name="commissionRateToDeliveryWork"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Enable Delivery Tip Amount
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="enableDeliveryTipAmount"
                  color={"primary"}
                  defaultChecked
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Tip Amount
            <span className="txt-danger">*</span>
          </Label>
          <Field
            name="tipAmount"
            type="text"
            placeholder="Tip Amount"
            className={`form-control ${
              submitErrors && `${errors.tipAmount ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="tipAmount"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Enable Delivery Tip Percentage
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="enableDeliveryTipPercentage"
                  color={"primary"}
                  defaultChecked
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Tip Percentage
            <span className="txt-danger">*</span>
          </Label>
          <Field
            name="tipPercentage"
            type="text"
            placeholder="Tip Percentage"
            className={`form-control ${
              submitErrors &&
              `${errors.tipPercentage ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="tipPercentage"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Delivery Worker’s Tip Share
            <span className="txt-danger">*</span>
          </Label>
          <Field
            name="deliveryWorkersTipShare"
            type="text"
            placeholder="Delivery Worker’s Tip Share"
            className={`form-control ${
              submitErrors &&
              `${errors.deliveryWorkersTipShare ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="deliveryWorkersTipShare"
            component="span"
            className="invalid-feedback"
          />
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

export default AddDeliveryFeesForm;
