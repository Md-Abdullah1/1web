import { useState } from "react";
import { Formik } from "formik";
import AddonCategoriesForm from "./AddonCategoriesForm";
import {
  AddonCategoriesFormValidationProp,
  addonCategoriesFormInitialValue,
  addonCategoriesFormValidationSchema,
} from "../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";

function AddonCategoriesMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: AddonCategoriesFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={addonCategoriesFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={addonCategoriesFormValidationSchema}
    >
      {({ errors, values }) => (
        <AddonCategoriesForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
          values={values}
        />
      )}
    </Formik>
  );
}

export default AddonCategoriesMain;
