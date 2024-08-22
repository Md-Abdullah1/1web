import { useState } from "react";
import { ErrorMessage, FieldArray, Form } from "formik";
import { Row, Col, Label } from "reactstrap";
import { Btn } from "../../../../../AbstractElements";
import Country from "../../../../CommonInput/Country";
import State from "../../../../CommonInput/State";
import City from "../../../../CommonInput/City";
import Branches from "../../../../CommonInput/Branches";
import PhoneField from "./PhoneField";
import EmailField from "./EmailField";
import "./BranchPublicContact.css";
import {
  phoneValue,
  emailValue,
} from "../../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";
import MultiDatePicker from "../../../../CommonInput/MultiDatePicker";
const AddBranchPublicContactForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values, setFieldValue } = props;

  const [phoneFieldCount, setPhoneFieldCount] = useState(["1"]);
  const [emailFieldCount, setEmailFieldCount] = useState(["1"]);

  const addPhoneFieldCountHandler = (arrayHelpers: any) => {
    const value = phoneFieldCount.length + 1;
    setPhoneFieldCount((oldArray) => [...oldArray, value.toString()]);
    arrayHelpers.push(phoneValue);
  };

  const addEmailFieldCountHandler = (arrayHelpers: any) => {
    const value = emailFieldCount.length + 1;
    setEmailFieldCount((oldArray) => [...oldArray, value.toString()]);
    arrayHelpers.push(emailValue);
  };

  const removePhoneFieldHandler = (
    value: string,
    arrayHelpers: any,
    index: number
  ) => {
    const updatedFormCount = phoneFieldCount.filter((item) => item !== value);
    setPhoneFieldCount(updatedFormCount);
    arrayHelpers.remove(index);
  };

  const removeEmailFieldHandler = (
    value: string,
    arrayHelpers: any,
    index: number
  ) => {
    const updatedFormCount = emailFieldCount.filter((item) => item !== value);
    setEmailFieldCount(updatedFormCount);
    arrayHelpers.remove(index);
  };

  return (
    <Form className="form-wizard">
      <Row>
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
        <Col sm="4" className="mb-3">
          <Label check>State</Label>
          <State name="state" isMulti={true} placeholder="Select state..." />
        </Col>
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
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Branches <span className="txt-danger">*</span>
          </Label>
          <Branches
            name="branches"
            placeholder="Select branches..."
            isMulti={true}
            className={`${
              submitErrors && `${errors.branches ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="branches"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Multi Date
          </Label>
          <MultiDatePicker name='multiDate' value={values?.multiDate} setFieldValue={setFieldValue} />
        </Col>
      </Row>
      <Row>
        <FieldArray
          name="phones"
          render={(arrayHelpers) => {
            return (
              <>
                {phoneFieldCount.map((item, index) => (
                  <>
                    <PhoneField
                      key={index}
                      submitErrors={submitErrors}
                      errors={errors}
                      item={item}
                      index={index}
                    />
                    {item !== "1" && (
                      <Col sm="1" className="mb-3 icon-top-margin">
                        <span
                          onClick={() =>
                            removePhoneFieldHandler(item, arrayHelpers, index)
                          }
                          className="badge b-ln-height badge-danger"
                        >
                          <i className="fa fa-minus"></i>
                        </span>
                      </Col>
                    )}
                  </>
                ))}
                {phoneFieldCount.length < 3 && (
                  <Col sm="1" className="mb-3 icon-top-margin">
                    <span
                      onClick={() => addPhoneFieldCountHandler(arrayHelpers)}
                      className="badge b-ln-height badge-dark"
                    >
                      <i className="fa fa-plus"></i>
                    </span>
                  </Col>
                )}
              </>
            );
          }}
        />
      </Row>
      <Row>
        <FieldArray
          name="emails"
          render={(arrayHelpers) => {
            return (
              <>
                {emailFieldCount.map((item, index) => (
                  <>
                    <EmailField
                      key={index}
                      submitErrors={submitErrors}
                      errors={errors}
                      index={index}
                      item={item}
                    />
                    {item !== "1" && (
                      <Col sm="1" className="mb-3 icon-top-margin">
                        <span
                          onClick={() =>
                            removeEmailFieldHandler(item, arrayHelpers, index)
                          }
                          className="badge b-ln-height badge-danger"
                        >
                          <i className="fa fa-minus"></i>
                        </span>
                      </Col>
                    )}
                  </>
                ))}

                {emailFieldCount.length < 3 && (
                  <Col sm="1" className="mb-3 icon-top-margin">
                    <span
                      onClick={() => addEmailFieldCountHandler(arrayHelpers)}
                      className="badge b-ln-height badge-dark"
                    >
                      <i className="fa fa-plus"></i>
                    </span>
                  </Col>
                )}
              </>
            );
          }}
        />
      </Row>
      <Row>
        <Col sm="auto" className="mb-3">
          <Btn
            color="primary"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            Save Changes
          </Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default AddBranchPublicContactForm;
