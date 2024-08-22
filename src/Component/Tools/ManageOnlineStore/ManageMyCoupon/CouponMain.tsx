import { useState } from "react";
import { Formik } from "formik";
import AddCouponForm from "./AddCouponForm";
import {
  CouponFormValidationProp,
  couponFormInitialValue,
  couponFormValidationSchema,
} from "../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";

const CouponMain = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: CouponFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={couponFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={couponFormValidationSchema}
    >
      {({ errors, values, setFieldValue }) => (
        <AddCouponForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
          values={values}
          setFieldValue={setFieldValue}
        />
      )}
    </Formik>
  );
};

export default CouponMain;
