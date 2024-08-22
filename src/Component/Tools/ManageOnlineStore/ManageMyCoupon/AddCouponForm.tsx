import { Row, Col, Label, FormGroup } from "reactstrap";
import { Btn, H3 } from "../../../../AbstractElements";
import { ErrorMessage, Field, FieldArray, Form } from "formik";
import TextCounter from "../../../CommonInput/TextCounter";
import Currency from "../../../CommonInput/Currency";
import OrderLimitForm from "./OrderLimitForm";
import { orderLimit } from "../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";
import { useEffect, useState } from "react";

const AddCouponForm = (props: any) => {
  const [discountType, setDiscountType] = useState("");
  const [orderLimitCount, setOrderLimitCount] = useState(["1"]);

  const { errors, submitErrors, setSubmitError, values, setFieldValue } = props;

  const addOrderLimitCountHandler = (arrayHelpers: any) => {
    const value = orderLimitCount.length + 1;
    setOrderLimitCount((oldArray) => [...oldArray, value.toString()]);
    arrayHelpers.push(orderLimit);
  };

  const removeOrderLimitHandler = (
    value: string,
    arrayHelpers: any,
    index: number
  ) => {
    const updatedFormCount = orderLimitCount.filter((item) => item !== value);
    setOrderLimitCount(updatedFormCount);
    arrayHelpers.remove(index);
  };

  const discountTypeHandle = (event: any) => {
    setDiscountType(event.target?.value);
    if (event.target?.value !== "amount") {
      setFieldValue("currency", "-1");
    }
    setFieldValue("discountType", event.target?.value);
  };

  const generateCouponCode = () => {
    return (Math.random() + 6).toString(36).substring(7);
  };

  useEffect(() => {
    setFieldValue('couponCode',generateCouponCode());
  },[setFieldValue]);
  
  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="8" className="mb-3">
          <H3>Coupon Info</H3>
        </Col>
        <Col sm="4" className="mb-3" style={{ textAlign: "right" }}>
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
          <Label check>Reference Coupon Plan ID (Optional)</Label>
          <Field as="select" className="form-control" name="reference-coupon">
            <option value={""}>Please reference coupon plan id</option>
          </Field>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <H3>General Info</H3>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Coupon Name <span className="txt-danger">*</span>
          </Label>
          <Field
            name="couponName"
            type="text"
            placeholder="Coupon Name"
            maxLength='140'
            className={`form-control ${
              submitErrors && `${errors.couponName ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.couponName?.length} totalLength='140' />
          <ErrorMessage
            name="couponName"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Coupon Code <span className="txt-danger">*</span>
          </Label>
          <Field
            name="couponCode"
            type="text"
            placeholder="Coupon Code"
            readOnly
            className={`form-control ${
              submitErrors && `${errors.couponCode ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="couponCode"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Coupon Description (Optional)</Label>
          <Field
            name="couponDescription"
            as="textarea"
            placeholder="Coupon Description"
            className="form-control"
            maxLength='300'
          />
          <TextCounter
            length={values?.couponDescription?.length}
            totalLength={"300"}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Image</Label>
          <FormGroup>
            <Field className="form-control" name="upload-image" type="file" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <H3>Usage Limit</H3>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Start Date <span className="txt-danger">*</span>
          </Label>
          <Field
            name="startDate"
            type="date"
            placeholder="Start Date"
            className={`form-control ${
              submitErrors && `${errors.startDate ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="startDate"
            component="span"
            className="invalid-feedback"
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
        <Col sm="4" className="mb-3">
          <Label check>Max number of total uses by all users (Optional)</Label>
          <Field
            name="maxNumberByAllUser"
            type="text"
            placeholder="Max number of total uses by all users"
            className="form-control"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Maximum number of use per user (Optional)</Label>
          <Field
            name="maxNumberByPerUser"
            type="text"
            placeholder="Maximum number of use per user"
            className="form-control"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Activation Condition <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="activationCondition"
            className={`form-control ${
              submitErrors &&
              `${errors.activationCondition ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Please activation condition</option>
            <option value={"1"}>Condition</option>
          </Field>
          <ErrorMessage
            name="activationCondition"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col className="mb-3">
          <H3>Order Limit</H3>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Discount Type <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="discountType"
            className={`form-control ${
              submitErrors &&
              `${errors.discountType ? "is-invalid" : "is-valid"}`
            }`}
            onChange={discountTypeHandle}
          >
            <option value={""}>Please discount type</option>
            <option value={"amount"}>Amount</option>
            <option value={"percentage"}>Percentage</option>
          </Field>
          <ErrorMessage
            name="discountType"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        {discountType === "amount" && (
          <Col sm="4" className="mb-3">
            <Label check>
              Currency <span className="txt-danger">*</span>
            </Label>
            <Currency
              name="currency"
              placeholder="Select currency"
              className={`${
                submitErrors && `${errors.currency ? "is-invalid" : "is-valid"}`
              }`}
            />
            <ErrorMessage
              name="currency"
              component="span"
              className="invalid-feedback"
            />
          </Col>
        )}
      </Row>
      {discountType !== "" && (
        <FieldArray
          name="orderlimits"
          render={(arrayHelpers) => {
            return (
              <>
                {orderLimitCount.map((item, index) => (
                  <>
                    <OrderLimitForm
                      key={index}
                      submitErrors={submitErrors}
                      errors={errors}
                      index={index}
                    />
                    <Col sm="1" className="mb-3">
                      {item !== "1" && (
                        <span
                          onClick={() =>
                            removeOrderLimitHandler(item, arrayHelpers, index)
                          }
                          className="badge b-ln-height badge-danger"
                        >
                          <i className="fa fa-minus"></i>
                        </span>
                      )}
                      {orderLimitCount.length === index + 1 && (
                        <span
                          onClick={() =>
                            addOrderLimitCountHandler(arrayHelpers)
                          }
                          className="badge b-ln-height badge-dark"
                        >
                          <i className="fa fa-plus"></i>
                        </span>
                      )}
                    </Col>
                  </>
                ))}
              </>
            );
          }}
        />
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
};

export default AddCouponForm;
