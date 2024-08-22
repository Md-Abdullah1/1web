import { useState } from "react";
import { Container, Row, Col, Label } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import NewAddon from "./NewAddon";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import Country from "../../../CommonInput/Country";
import State from "../../../CommonInput/State";
import City from "../../../CommonInput/City";
import Branches from "../../../CommonInput/Branches";
import TextCounter from "../../../CommonInput/TextCounter";

function AddonCategoriesForm(props: any) {
  const { errors, submitErrors, setSubmitError, values } = props;

  const [newFormCount, setNewFormCount] = useState(["1"]);

  const addFormHandler = (arrayHelpers: any) => {
    const value = newFormCount.length + 1;
    arrayHelpers.push({
      addOnOption: "",
      addOnExtraPrice: "",
      addOnQuantity: "",
    });
    setNewFormCount((oldArray) => [...oldArray, value.toString()]);
  };

  const removeFormHandler = (
    value: string,
    arrayHelpers: any,
    index: number
  ) => {
    const updatedFormCount = newFormCount.filter((item) => item !== value);
    setNewFormCount(updatedFormCount);
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
            placeholder="Select country"
            isMulti={false}
            className={`${
              submitErrors &&
              `${errors.country ? "is-invalid" : "is-valid"}`
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
          <State name="state" isMulti={false} placeholder="Select state" />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>City</Label>
          <City name="city" isMulti={false} placeholder="Select city" />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Branch <span className="txt-danger">*</span>
          </Label>
          <Branches
            name="branch"
            placeholder="Select branch"
            className={`${
              submitErrors && `${errors.branch ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="branch"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Products <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="products"
            className={`form-control ${
              submitErrors && `${errors.products ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please select products</option>
            <option value={"1"}>Products</option>
          </Field>
          <ErrorMessage
            name="products"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Addon Category <span className="txt-danger">*</span>
          </Label>
          <Field
            name="addonCategory"
            type="text"
            placeholder="Addon Category"
            maxLength='140'
            className={`form-control ${
              submitErrors &&
              `${errors.addonCategory ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.addonCategory?.length} totalLength='140' />
          <ErrorMessage
            name="addonCategory"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Addon Category Description</Label>
          <Field
            name="addonCategoryDescription"
            as="textarea"
            placeholder="Addon Category Description"
            className="form-control"
            maxLength='300'
          />
          <TextCounter length={values?.addonCategoryDescription?.length} totalLength='300' />
        </Col>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Required Selection
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="requiredSelection"
                  color={"primary"}
                  className={`${
                    submitErrors &&
                    `${errors.requiredSelection ? "danger" : "primary"}`
                  }`}
                  defaultChecked
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <div className="">
            <Label className="col-form-label m-r-10" check>
              Multiple Selection
            </Label>
            <br />
            <div className="d-flex">
              <div className="flex-shrink-0  text-end icon-state switch-outline">
                <CommonSwitchSpan
                  name="multipleSelection"
                  color={"primary"}
                  className={`${
                    submitErrors &&
                    `${errors.multipleSelection ? "danger" : "primary"}`
                  }`}
                  defaultChecked
                />
              </div>
              <Label className="m-l-10" check></Label>
            </div>
          </div>
        </Col>
      </Row>
      <FieldArray
        name="addons"
        render={(arrayHelpers) => {
          return (
            <>
              {newFormCount.map((item, index) => (
                <Container
                  className="p-5 mb-4"
                  id={`prize-container-${item}`}
                  key={index}
                  style={{ border: "1px solid #ccc" }}
                >
                  <Row>
                    <Col md={10} className="mb-3">
                      <h4>Addon {index + 1}</h4>
                    </Col>
                    <Col md={2} className="mb-3">
                      {newFormCount.length !== 1 && (
                        <span
                          className="btn btn-outline-danger"
                          onClick={() =>
                            removeFormHandler(item, arrayHelpers, index)
                          }
                        >
                          <i className="icofont icofont-ui-delete"></i>
                        </span>
                      )} 
                      {newFormCount.length === (index + 1) && (
                      <span
                        className="btn btn-outline-dark ms-2"
                        onClick={() => addFormHandler(arrayHelpers)}
                      >
                        <i className="fa fa-plus"></i>
                      </span>
                      )}
                    </Col>
                  </Row>
                  <NewAddon
                    errors={errors}
                    index={index}
                    submitErrors={submitErrors}
                    values={values}
                  />
                </Container>
              ))}
            </>
          );
        }}
      />

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

export default AddonCategoriesForm;
