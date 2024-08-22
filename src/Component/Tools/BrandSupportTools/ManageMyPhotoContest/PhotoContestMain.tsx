import { useState } from "react";
import { Formik } from "formik";
import PhotoContestForm from "./PhotoContestForm";
import {
  PhotoContestsFormValidationProp,
  photoContestsFormInitialValue,
  photoContestsFormValidationSchema,
} from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
function PhotoContestMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: PhotoContestsFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={photoContestsFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={photoContestsFormValidationSchema}
    >
      {({ errors, values, setFieldValue }) => (
        <PhotoContestForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
          values={values}
          setFieldValue={setFieldValue}
        />
      )}
    </Formik>
  );
}

export default PhotoContestMain;
