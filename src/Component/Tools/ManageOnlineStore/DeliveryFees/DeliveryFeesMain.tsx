import { useState } from "react";
import { Formik } from "formik";
import AddDeliveryFeesForm from "./AddDeliveryFeesForm";
import {
  DeliveryFeesFormValidationProp,
  deliveryFeesFormInitialValue,
  deliveryFeesFormValidationSchema,
} from "../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";

const DeliveryFeesMain = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: DeliveryFeesFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={deliveryFeesFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={deliveryFeesFormValidationSchema}
    >
      {({ errors }) => (
        <AddDeliveryFeesForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
        />
      )}
    </Formik>
  );
};

export default DeliveryFeesMain;
