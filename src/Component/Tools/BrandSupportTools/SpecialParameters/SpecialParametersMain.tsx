import { useState } from "react";
import { Formik } from "formik";
import AddSpecialParametersForm from "./AddSpecialParametersForm";
import {
  SpecialParametersFormValidationProp,
  specialParametersFormInitialValue,
  specialParametersFormValidationSchema,
} from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";

const SpecialParametersMain = () => {

    const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: SpecialParametersFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={specialParametersFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={specialParametersFormValidationSchema}
    >
      {({ errors, values, setFieldValue }) => (
        <AddSpecialParametersForm
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

export default SpecialParametersMain;
