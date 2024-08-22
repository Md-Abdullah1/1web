import { useState } from "react";
import { Formik } from "formik";
import AddSurveyAndQuizzesForm from "./AddSurveyAndQuizzesForm";
import {
  SurveyAndQuizzesFormValidationProp,
  surveyAndQuizzesFormInitialValue,
  surveyAndQuizzesFormValidationSchema,
} from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
const SurveyAndQuizzesMain = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: SurveyAndQuizzesFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={surveyAndQuizzesFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={surveyAndQuizzesFormValidationSchema}
    >
      {({ errors, values, setFieldValue }) => (
        <AddSurveyAndQuizzesForm
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

export default SurveyAndQuizzesMain;
