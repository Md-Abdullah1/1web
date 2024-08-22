import { useState } from "react"; 
import { Formik } from "formik";
import AddQuizMaterialForm from "./AddQuizMaterialForm";
import {
  QuizMaterialFormValidationProp,
  quizMaterialFormInitialValue,
  quizMaterialLessonFormValidationSchema,
} from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
const QuizMaterialMain = (props: any) => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: QuizMaterialFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={quizMaterialFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={quizMaterialLessonFormValidationSchema}
    >
      {({ errors, values, setFieldValue }) => (
        <AddQuizMaterialForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
          addQuestions={props.addQuestions}
          values={values}
          setFieldValue={setFieldValue}
        />
      )}
    </Formik>
  );
};

export default QuizMaterialMain;
