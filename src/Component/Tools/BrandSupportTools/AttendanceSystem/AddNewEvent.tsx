import { ErrorMessage, Field, Form, useField, useFormikContext } from "formik";
import React, { useEffect, useState } from "react";
import { Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import Country from "../../../CommonInput/Country";
import City from "../../../CommonInput/City";
import State from "../../../CommonInput/State";
import { Btn, H3 } from "../../../../AbstractElements";
import TextCounter from "../../../CommonInput/TextCounter";
import TagsInput from "../../../CommonInput/TagsInput";
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import Timeslot from "../../ManageOnlineStore/ManageBranches/Schedules/Timeslot";
import MultiDatePicker from "../../../CommonInput/MultiDatePicker";
import { DateObject } from "react-multi-date-picker";




const AddNewEvent = (props: any) => {
  const { errors, submitErrors, setSubmitError, values, setFieldValue } = props;
  const [activityType, setActivityType] = useState("");
  const [publicActivity, setPublicActivity] = useState("");
  const [autoSchedule, setAutoSchedule] = useState(false);
  const [activityLocation, setActivityLocation] = useState(false);
  const [activityFrequency, setActivityFrequency] = useState(false);
  const [leavingActivity, setLeavingActivity] = useState(true);
  const [breakinActivity, setBreakinActivity] = useState(true);
  const [supervisorConfirm, setSupervisorConfirm] = useState(true);
  const [manualCheck, setManualCheck] = useState(true);
  const [isAppointment, setIsAppointment] = useState(false);
  const WEEKDAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    if (activityType === "appointment") {
      setFieldValue("activitylocation", activityLocation);
    } else {
      setFieldValue("activitylocation", undefined);
    }
  }, [activityType, activityLocation, setFieldValue]);

  const handleActivityType = (event: any) => {
    const value = event.target.value;
    setActivityType(value);
    if (value === "appointment") {
      setIsAppointment(true);
    } else {
      setIsAppointment(false);
      setActivityLocation(false);
    }
  };
  const handlePublicActivity = (event: any) => {
    const value = event.target.value;
    setPublicActivity(value);
    console.log(`public ${publicActivity}`);
  };

  const handleLeavingActivityChange = (event: any) => {
    const value = event.target.value === "true";
    setLeavingActivity(value);
    // console.log("online/offline", value);
  };

  const handleBreakinActivityChange = (event: any) => {
    const value = event.target.value === "true";
    setBreakinActivity(value);
    // console.log("online/offline", value);
  };
  const handleActivityLocationChange = (event: any) => {
    const value = event.target.value === "true";
    setActivityLocation(value);
    // console.log("online/offline", value);
  };
  const handleManualCheckChange = (event: any) => {
    const value = event.target.value === "true";
    setManualCheck(value);
    // console.log("online/offline", value);
  };
  const handleSupervisorConfirmChange = (event: any) => {
    const value = event.target.value === "true";
    setSupervisorConfirm(value);
    console.log("online/offline", value);
  };
  const handleActivityFrequency = (event: any) => {
    const value = event.target.value === "true";
    setActivityFrequency(value);
    // console.log("online/offline", value);
  };

  const handleSchedule = () => {
    setAutoSchedule(!autoSchedule);
  };
  const handleScheduleDates = (event: any) => {
    console.log(`dates ,${event.target}`);
  };

  return (
    <Form className="form-wizard ">
      <Row>
        <Col className="mb-3">
          <H3 className="">General Info</H3>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="4" className="mb-3">
          <Label check>
            Reference ID of a Previous Activity{" "}
            <span className="txt-danger">*</span>
          </Label>

          <Field
            // as="select"
            type="text"
            name="referenceid"
            maxLength={"300"}
            placeholder="Enter a Reference Id of a Previous Activity"
            className={`form-control ${
              submitErrors &&
              `${errors.referenceid ? "is-invalid" : "is-valid"}`
            }`}
          />
          {/* <option value={""}>Please select your reference ID</option>
            <option value={"ReferenceId-1"}>ReferenceId-1</option>
            <option value={"ReferenceId-2"}>ReferenceId-2</option>
            <option value={"ReferenceId-3"}>ReferenceId-3</option>
            <option value={"ReferenceId-4"}>ReferenceId-4</option> */}
          {/* </Field> */}
          <ErrorMessage
            name="referenceid"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3 d-flex flex-column p-2  ">
          <Label check>
            Activity Type <span className="txt-danger">*</span>
          </Label>
          <Row className="  ">
            <Col sm="auto" className="mx-4">
              <FormGroup check>
                <Field
                  id="appointment"
                  name="activitytype"
                  value="appointment"
                  type="radio"
                  checked={activityType == "appointment"}
                  className="form-check-input"
                  onChange={(event: any) => {
                    handleActivityType(event); // Updated to call handleActivityType
                    setFieldValue("activitytype", event.target.value); // Updated to use setFieldValue
                  }}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.activitytype ? "text-danger" : "text-success"}`
                  }`}
                  for="appointment"
                  check
                >
                  Appointment
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-4">
              <FormGroup check>
                <Field
                  id="classroom"
                  name="activitytype"
                  value="classroom"
                  checked={activityType == "classroom"}
                  type="radio"
                  className="form-check-input"
                  onChange={(event: any) => {
                    handleActivityType(event); // Updated to call handleActivityType
                    setFieldValue("activitytype", event.target.value); // Updated to use setFieldValue
                  }}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.activitytype ? "text-danger" : "text-success"}`
                  }`}
                  for="classroom"
                  check
                >
                  Class Room
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-4">
              <FormGroup check>
                <Field
                  id="event"
                  name="activitytype"
                  value="event"
                  type="radio"
                  checked={activityType == "event"}
                  className="form-check-input"
                  onChange={(event: any) => {
                    handleActivityType(event); // Updated to call handleActivityType
                    setFieldValue("activitytype", event.target.value); // Updated to use setFieldValue
                  }}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.activitytype ? "text-danger" : "text-success"}`
                  }`}
                  for="event"
                  check
                >
                  Event
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-4">
              <FormGroup check>
                <Field
                  id="workshift"
                  name="activitytype"
                  value="workshift"
                  checked={activityType == "workshift"}
                  type="radio"
                  className="form-check-input"
                  onChange={(event: any) => {
                    handleActivityType(event); // Updated to call handleActivityType
                    setFieldValue("activitytype", event.target.value); // Updated to use setFieldValue
                  }}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.activitytype ? "text-danger" : "text-success"}`
                  }`}
                  for="workshift"
                  check
                >
                  Work Shift
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Activity Title <span className="txt-danger">*</span>
          </Label>
          <Field
            name="activitytitle"
            type="text"
            placeholder="enter a title for the activity"
            className={`form-control ${
              submitErrors &&
              `${errors.activitytitle ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter
            length={values?.activitytitle?.length}
            totalLength={"300"}
          />
          <ErrorMessage
            name="activitytitle"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="4" className="mb-3">
          <Label check>
            Description <span className="txt-danger">*</span>
          </Label>
          <Field
            name="description"
            as="textarea"
            placeholder="activity description"
            maxLength={"300"}
            className={`form-control ${
              submitErrors &&
              `${errors.description ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter
            length={values?.description?.length}
            totalLength={"300"}
          />

          <ErrorMessage
            name="description"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Category</Label>

          <Field
            as="select"
            name="category"
            className={`form-control ${
              submitErrors && `${errors.category ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please select sub category</option>
            <option value={"category-1"}>category-1</option>
            <option value={"category-2"}>category-2</option>
          </Field>
          <ErrorMessage
            name="category"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className=" mb-3">
          <Label check>Duration </Label>
          <Field
            type="text"
            name="duration"
            placeholder="Duration must be a whole number"
            className={`form-control ${
              submitErrors && `${errors.duration ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="duration"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>

      <Row className="mb-3">
        <Col sm="4">
          <Label check>Keywords (optional)</Label>
          <TagsInput
            name="keywords"
            placeholder="Add keywords"
            setFieldValue={setFieldValue}
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Image</Label>
          <FormGroup>
            <Field
              className={`form-control ${
                submitErrors && `${errors.image ? "is-invalid" : "is-valid"}`
              }`}
              name="image"
              type="file"
            />
            <ErrorMessage
              name="image"
              component="span"
              className="invalid-feedback"
            />
          </FormGroup>
        </Col>
        <Col sm="4" className="mb-3 ">
          <Label check>Public Activity</Label>
          <Row className="mb-3 mx-2">
            <Col sm="auto">
              <FormGroup check>
                <Field
                  id="openforanyperson"
                  name="publicactivity"
                  value="openforanyperson"
                  type="radio"
                  checked={publicActivity === "openforanyperson"}
                  className="form-check-input"
                  onChange={handlePublicActivity}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.publicactivity ? "text-danger" : "text-success"}`
                  }`}
                  for="openforanyperson"
                  check
                >
                  Open For Any person
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-sm-2 mx-md-0 mx-lg-4">
              <FormGroup check>
                <Field
                  id="forfollowersonly"
                  name="publicactivity"
                  value="forfollowersonly"
                  type="radio"
                  checked={publicActivity === "forfollowersonly"}
                  className="form-check-input"
                  onChange={handlePublicActivity}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.publicactivity ? "text-danger" : "text-success"}`
                  }`}
                  for="forfollowersonly"
                  check
                >
                  For Followers Only
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="">
              <FormGroup check>
                <Field
                  id="whohastheeventurlonly"
                  name="publicactivity"
                  value="whohastheeventurlonly"
                  type="radio"
                  checked={publicActivity === "whohastheeventurlonly"}
                  className="form-check-input"
                  onChange={handlePublicActivity}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.publicactivity ? "text-danger" : "text-success"}`
                  }`}
                  for="whohastheeventurlonly"
                  check
                >
                  Who has the event url only
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-md-0 mx-lg-2">
              <FormGroup check>
                <Field
                  id="invitedusersonly"
                  name="publicactivity"
                  value="invitedusersonly"
                  type="radio"
                  checked={publicActivity === "invitedusersonly"}
                  className="form-check-input"
                  onChange={handlePublicActivity}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.publicactivity ? "text-danger" : "text-success"}`
                  }`}
                  for="invitedusersonly"
                  check
                >
                  Invited Users only
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <H3>Requirements & Instructions</H3>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Instructions & Requirements (Optional)</Label>
          <Field
            name="instructions"
            as="textarea"
            placeholder="activity description"
            maxLength={"300"}
            className={`form-control ${
              submitErrors &&
              `${errors.instructions ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter
            length={values?.instructions?.length}
            totalLength={"300"}
          />

          <ErrorMessage
            name="instructions"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3 ">
          <Label check>
            A participant must Checkout/CheckIn when taking a break
            <span className="txt-danger">*</span>
          </Label>
          <Row className="mb-3 mx-2">
            <Col sm="auto">
              <FormGroup check>
                <Field
                  id="yes"
                  name="breakinactivity"
                  value="true"
                  type="radio"
                  checked={breakinActivity === true}
                  className="form-check-input"
                  onChange={handleBreakinActivityChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.breakinactivity ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="appointment"
                  check
                >
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-sm-2 mx-lg-4">
              <FormGroup check>
                <Field
                  id="no"
                  name="breakinactivity"
                  value="false"
                  type="radio"
                  checked={breakinActivity === false}
                  className="form-check-input"
                  onChange={handleBreakinActivityChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.breakinactivity ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="no"
                  check
                >
                  No
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm="4" className="mb-3 ">
          <Label check>
            A participant must checkout before leaving the activity
            <span className="txt-danger">*</span>
          </Label>
          <Row className="mb-3 mx-2">
            <Col sm="auto">
              <FormGroup check>
                <Field
                  id="yes"
                  name="leavingactivity"
                  value="true"
                  type="radio"
                  checked={leavingActivity === true}
                  className="form-check-input"
                  onChange={handleLeavingActivityChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.leavingactivity ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="appointment"
                  check
                >
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-sm-2 mx-lg-4">
              <FormGroup check>
                <Field
                  id="no"
                  name="leavingactivity"
                  value="false"
                  type="radio"
                  checked={leavingActivity === false}
                  className="form-check-input"
                  onChange={handleLeavingActivityChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.leavingactivity ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="no"
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
        <Col className="mb-3">
          <H3>Management Settings</H3>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="4" className="mb-3">
          <Label check>Mark as “ Late Arrival” after (number of minutes)</Label>

          <Field
            // as="select"
            type="number"
            name="latearrival"
            maxLength={"300"}
            placeholder="enter minutes"
            className={`form-control ${
              submitErrors &&
              `${errors.latearrival ? "is-invalid" : "is-valid"}`
            }`}
          />

          <ErrorMessage
            name="latearrival"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3 ">
          <Label check>
            Event Supervisor must click “confirm” for each attendance
          </Label>
          <Row className="mb-3 mx-2">
            <Col sm="auto">
              <FormGroup check>
                <Field
                  id="yes"
                  name="supervisorconfirm"
                  value="true"
                  type="radio"
                  checked={supervisorConfirm === true}
                  className="form-check-input"
                  onChange={handleSupervisorConfirmChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.supervisorconfirm ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="yes"
                  check
                >
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-sm-2 mx-lg-4">
              <FormGroup check>
                <Field
                  id="no"
                  name="supervisorconfirm"
                  value="false"
                  type="radio"
                  checked={supervisorConfirm === false}
                  className="form-check-input"
                  onChange={handleSupervisorConfirmChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.supervisorconfirm ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="no"
                  check
                >
                  No
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Event Supervisor UserName</Label>

          <Field
            // as="select"
            type="text"
            name="supervisorname"
            maxLength={"300"}
            placeholder="Enter Supervisor UserName"
            className={`form-control ${
              submitErrors &&
              `${errors.supervisorname ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter
            length={values?.supervisorname?.length}
            totalLength={"300"}
          />

          <ErrorMessage
            name="supervisorname"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4">
          <Label check>Invite Users</Label>
          <TagsInput
            name="keywords"
            placeholder="Add users"
            setFieldValue={setFieldValue}
          />
        </Col>
        <Col sm="4" className="mb-3 ">
          <Label check>Allow Manual Check In</Label>
          <Row className="mb-3 mx-2">
            <Col sm="auto">
              <FormGroup check>
                <Field
                  id="yes"
                  name="manualcheck"
                  value="true"
                  type="radio"
                  checked={manualCheck === true}
                  className="form-check-input"
                  onChange={handleManualCheckChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.manualcheck ? "text-danger" : "text-success"}`
                  }`}
                  for="yes"
                  check
                >
                  Yes
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-sm-2 mx-lg-4">
              <FormGroup check>
                <Field
                  id="no"
                  name="manualcheck"
                  value="false"
                  type="radio"
                  checked={manualCheck === false}
                  className="form-check-input"
                  onChange={handleManualCheckChange}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.manualcheck ? "text-danger" : "text-success"}`
                  }`}
                  for="no"
                  check
                >
                  No
                </Label>
              </FormGroup>
            </Col>
          </Row>
          <span className="text-muted small">
          The event Supervisor can enter the data manually, when no internet access available.
          </span>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <H3>Activity's Location</H3>
        </Col>
      </Row>
      <Row>
        {isAppointment && (
          <Col sm="4" className="mb-3 ">
            <Label check>
              Activity's Location <span className="txt-danger">*</span>
            </Label>
            <Row className="mb-3 mx-2">
              <Col sm="auto">
                <FormGroup check>
                  <Field
                    id="physicaladdress"
                    name="activitylocation"
                    value="true"
                    type="radio"
                    checked={activityLocation === true}
                    className="form-check-input"
                    onChange={handleActivityLocationChange}
                  />
                  <Label
                    className={`mb-0 ${
                      submitErrors &&
                      ` ${
                        errors.activitylocation ? "text-danger" : "text-success"
                      }`
                    }`}
                    for="appointment"
                    check
                  >
                    Physical Address
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="auto" className=" mx-sm-2 mx-lg-4">
                <FormGroup check>
                  <Field
                    id="online"
                    name="activitylocation"
                    value="false"
                    type="radio"
                    checked={activityLocation === false}
                    className="form-check-input"
                    onChange={handleActivityLocationChange}
                  />
                  <Label
                    className={`mb-0 ${
                      submitErrors &&
                      ` ${
                        errors.activitylocation ? "text-danger" : "text-success"
                      }`
                    }`}
                    for="online"
                    check
                  >
                    Online
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        )}
        {isAppointment && !activityLocation && (
          <Row className="mb-3">
            <Col sm="4" className="mb-3">
              <Label check>Online Meeting URL </Label>

              <Field
                type="text"
                as={Input}
                name="meetingurl"
                placeholder="Enter meeting URL"
                className={`form-control ${
                  submitErrors &&
                  `${errors.meetingurl ? "is-invalid" : "is-valid"}`
                }`}
              />
              <ErrorMessage
                name="meetingurl"
                component="span"
                className="invalid-feedback"
              />
            </Col>
            <Col sm="4" className="mb-3">
              <Label check>Phone Number </Label>

              <Field
                type="text"
                name="phonenumber"
                placeholder="Enter phone number"
                className={`form-control ${
                  submitErrors &&
                  `${errors.phonenumber ? "is-invalid" : "is-valid"}`
                }`}
              />
              <ErrorMessage
                name="phonenumber"
                component="span"
                className="invalid-feedback"
              />
            </Col>
            <Col sm="4" className="mb-3">
              <Label check>Other Meeting Platform </Label>

              <Field
                as="textarea"
                name="meetingplatform"
                maxLength={"300"}
                placeholder="Enter meeting platform name"
                className={`form-control ${
                  submitErrors &&
                  `${errors.meetingplatform ? "is-invalid" : "is-valid"}`
                }`}
              />
              <ErrorMessage
                name="meetingplatform"
                component="span"
                className="invalid-feedback"
              />
            </Col>
          </Row>
        )}

        {(activityType !== "appointment" ||
          (activityType === "appointment" && activityLocation)) && (
          <Col sm="4" className="mb-3">
            <Label check>
              Country <span className="txt-danger">*</span>
            </Label>
            <Country
              name="country"
              isMulti={true}
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
        )}
        {(activityType !== "appointment" ||
          (activityType === "appointment" && activityLocation)) && (
          <Col sm="4" className="mb-3">
            <Label check>State</Label>
            <State name="state" isMulti={true} placeholder="Select state..." />
          </Col>
        )}
        {(activityType !== "appointment" ||
          (activityType === "appointment" && activityLocation)) && (
          <Col sm="4" className="mb-3">
            <Label check>
              City <span className="txt-danger">*</span>
            </Label>
            <City
              name="city"
              isMulti={true}
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
        )}

        {(activityType !== "appointment" ||
          (activityType === "appointment" && activityLocation)) && (
          <Col sm="4" className="mb-3">
            <Label check>
              Full Address <span className="txt-danger">*</span>
            </Label>
            <Field
              name="fulladdress"
              type="text"
              placeholder="Full Address of Event"
              className={`form-control ${
                submitErrors &&
                `${errors.fulladdress ? "is-invalid" : "is-valid"}`
              }`}
            />
            <ErrorMessage
              name="fulladdress"
              component="span"
              className="invalid-feedback"
            />
          </Col>
        )}
      </Row>
      <Row>
        <H3 className="textAlign-left mb-3">Dates & Time </H3>
        <Col sm="4" className="mb-3 ">
          <Label check>Activity's Frequency</Label>
          <Row className="mb-3 mx-2">
            <Col sm="auto">
              <FormGroup check>
                <Field
                  id="onetime"
                  name="activityfrequency"
                  value="true"
                  type="radio"
                  checked={activityFrequency === true}
                  className="form-check-input"
                  onChange={handleActivityFrequency}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.activityfrequency ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="onetime"
                  check
                >
                  One Time
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mx-sm-2 mx-lg-4">
              <FormGroup check>
                <Field
                  id="repeatedactivity"
                  name="activityfrequency"
                  value="false"
                  type="radio"
                  checked={activityFrequency === false}
                  className="form-check-input"
                  onChange={handleActivityFrequency}
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${
                      errors.activityfrequency ? "text-danger" : "text-success"
                    }`
                  }`}
                  for="repeatedactivity"
                  check
                >
                  Repeated Activity
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
{

  (!activityFrequency) &&    ( 
  <>
  <Col sm="4" className="mb-3">
          <Label check>Start Date</Label>

          <Field
            name="activitydates"
            type="date"
            placeholder="Expiry Date"
            className={`form-control  `}
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Expiry Date</Label>
          <Field
            name="expiryDate"
            type="date"
            placeholder="Expiry Date"
            className="form-control"
          />
        </Col>
        </>)
}
        {activityFrequency && !isAppointment && (
          <Col sm="4" className="mb-3">
            <Label>Date Ranges (Optional)</Label>
            <MultiDatePicker
              name="multiDate"
              className="multiDate"
              value={values?.multiDate}
              setFieldValue={setFieldValue}
            />
          </Col>
        )}
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
                  onClick={handleSchedule}
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
              <span className="txt-danger">
                <small>
                  NOTE: Please add 2 digits for hours, then 2 digits for minutes
                  (Example: 24:00)
                </small>
              </span>
            </Col>
            <Col sm={12} className="mb-3">
              <span>  ACTIVITY SCHEDULING TIMES</span>
            </Col>
          </Row>
          {values.multiDate &&  values?.multiDate?.split(",").map((date:any, index:number) => {
            return (
              <Timeslot
                key={index}
                title={date}
                errors={errors}
                submitErrors={submitErrors}
              />
            );
          })}
        </Container>
      )}
      <Row>
        <Col sm="auto" className="mb-3 ">
          <Btn
            color="primary"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            Submit
          </Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default AddNewEvent;
