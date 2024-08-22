import { useState } from "react"; 
import { Formik } from "formik";
import {
  StudyMaterialLessonFormValidationProp,
  studyMaterialLessonFormInitialValue,
  studyMaterialLessonFormValidationSchema,
} from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
import AddStudyMaterialLessonForm from "./AddStudyMaterialLessonForm";

const StudyMaterialLessonMain = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: StudyMaterialLessonFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={studyMaterialLessonFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={studyMaterialLessonFormValidationSchema}
    >
      {({ errors, values, setFieldValue }) => (
        <AddStudyMaterialLessonForm
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

export default StudyMaterialLessonMain;
