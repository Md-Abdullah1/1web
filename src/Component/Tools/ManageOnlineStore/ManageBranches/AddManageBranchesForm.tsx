import { useState } from "react";
import { ErrorMessage, Field, Form } from "formik";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import Country from "../../../CommonInput/Country";
import State from "../../../CommonInput/State";
import City from "../../../CommonInput/City";
import TextCounter from "../../../CommonInput/TextCounter";

const AddManageBranchesForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values } = props;

  const [hideButton, setHideButton] = useState(false);

  // when click on radio button button is hide/show
  const handleHoursDayRadio = (value: boolean) => {
    setHideButton(value);
  };

  // when click on the image file input.
  const uploadFileHandler = (event: any) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
  };

  return (
    <Form className="form-wizard">
      <Row style={{ textAlign: "right" }}>
        <Col sm="12" className="mb-3">
          <Btn
            color="primary"
            className="me-3"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            Save
          </Btn>
          <span className="btn btn-light btn-air-light">Undo Changes</span>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Branch Name <span className="txt-danger">*</span>
          </Label>
          <Field
            name="branchname"
            type="text"
            placeholder="Branch Name"
            maxLength="140"
            className={`form-control ${
              submitErrors && `${errors.branchname ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.branchname?.length} totalLength="140" />
          <ErrorMessage
            name="branchname"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Description</Label>
          <Field
            name="description"
            as="textarea"
            placeholder="Description"
            maxLength="300"
            className={`form-control`}
          />
          <TextCounter length={values?.description?.length} totalLength="300" />
        </Col>
        <Col sm="4" className="mb-3">
          <FormGroup>
            <Label check>Image</Label>
            <Field
              name="uploadimage"
              className="form-control"
              type="file"
              onChange={uploadFileHandler}
            />
            <span className="help-text text-muted">
              Image dimension 160x117
            </span>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Full Address <span className="txt-danger">*</span>
          </Label>
          <Field
            name="fulladdress"
            type="text"
            placeholder="Full Address of Company"
            maxLength="140"
            className={`form-control ${
              submitErrors &&
              `${errors.fulladdress ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.fulladdress?.length} totalLength="140" />
          <ErrorMessage
            name="fulladdress"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Branch Country <span className="txt-danger">*</span>
          </Label>
          <Country
            name="branchcountry"
            placeholder="Select branch country"
            isMulti={false}
            className={`${
              submitErrors &&
              `${errors.branchcountry ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="branchcountry"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>State</Label>
          <State
            name="branchstate"
            isMulti={false}
            placeholder="Select branch state"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            City <span className="txt-danger">*</span>
          </Label>
          <City
            name="branchcity"
            isMulti={false}
            placeholder="Select branch city"
            className={`${
              submitErrors &&
              `${errors.branchcountry ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="branchcity"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Pincode</Label>
          <Field
            name="pincode"
            type="text"
            placeholder="Pincode / Postcode / Zip Code of Store"
            className="form-control"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Landmark</Label>
          <Field
            name="landmark"
            type="text"
            placeholder="Any Near Landmark"
            className="form-control"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Latitude <span className="txt-danger">*</span>
          </Label>
          <Field
            name="latitude"
            type="text"
            placeholder="Latitude of the Store"
            className={`form-control ${
              submitErrors && `${errors.latitude ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="latitude"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Longitude <span className="txt-danger">*</span>
          </Label>
          <Field
            name="longitude"
            type="text"
            placeholder="Longitude of the Store"
            className={`form-control ${
              submitErrors && `${errors.longitude ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="longitude"
            component="span"
            className="invalid-feedback"
          />
          <span className="text-muted small">
            You can use services like:{" "}
            <a href="https://www.latlong.net/" rel="noreferrer" target="_blank">
              https://www.latlong.net/
            </a>
            <br />
            If you enter an invalid Latitude/Longitude the map system might
            crash with a white screen.
          </span>
        </Col>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Auto Accept Orders?
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="autoAcceptOrder"
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
            Notification Tone <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="notificationtone"
            className={`form-control ${
              submitErrors &&
              `${errors.notificationtone ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please select</option>
            <option value={"Alert-1"}>Alert-1</option>
            <option value={"Alert-2"}>Alert-2</option>
            <option value={"Alert-3"}>Alert-3</option>
            <option value={"Alert-4"}>Alert-4</option>
            <option value={"Alert-5"}>Alert-5</option>
            <option value={"Chime-1"}>Chime-1</option>
            <option value={"Chime-2"}>Chime-2</option>
            <option value={"Chime-3"}>Chime-3</option>
            <option value={"Chime-4"}>Chime-4</option>
            <option value={"Chime-5"}>Chime-5</option>
          </Field>
          <ErrorMessage
            name="notificationtone"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <strong>Shipment out of the City</strong>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Ship to states in your country</Label>
          <Country
            name="shipmentYourCountry"
            isMulti={true}
            placeholder="Select country"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Ship to other countries</Label>
          <Country
            name="shipOtherCountry"
            isMulti={true}
            placeholder="Select country"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            24 hours/7 Days (Online Store) <span className="txt-danger">*</span>
          </Label>
          <Row>
            <Col sm="auto ms-4">
              <FormGroup check>
                <Field
                  id="hoursDay1"
                  name="hoursday"
                  type="radio"
                  className="form-check-input"
                  onChange={() => handleHoursDayRadio(true)}
                  value={hideButton === true}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.hoursday ? "text-danger" : "text-success"}`
                  }`}
                  for="hoursDay1"
                  check
                >
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto ms-4">
              <FormGroup check>
                <Field
                  id="hoursDay2"
                  name="hoursday"
                  type="radio"
                  className="form-check-input"
                  onChange={() => handleHoursDayRadio(false)}
                  value={hideButton === false}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.hoursday ? "text-danger" : "text-success"}`
                  }`}
                  for="hoursDay2"
                  check
                >
                  No
                </Label>
              </FormGroup>
            </Col>
          </Row>
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
        {!hideButton && (
          <Col sm="auto" className="mb-3">
            <span className="btn btn-primary">Save and Add a Schedule</span>
          </Col>
        )}
      </Row>
    </Form>
  );
};

export default AddManageBranchesForm;
