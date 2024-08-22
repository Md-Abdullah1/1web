import { useState } from "react";
import { Formik } from "formik";
import AddDeliveryWorkersForm from "./AddDeliveryWorkersForm";
import {
  DeliveryWorkerFormValidationProp,
  deliveryWorkerFormInitialValue,
  deliveryWorkerFormValidationSchema,
} from "../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";

function DeliveryWorkersMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: DeliveryWorkerFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={deliveryWorkerFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={deliveryWorkerFormValidationSchema}
    >
      {({ errors }) => (
        <AddDeliveryWorkersForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
        />
      )}
    </Formik>
  );
}

export default DeliveryWorkersMain;
