import { useState } from "react";
import AddQuestionsForm from "./AddQuestionsForm";
import { Formik } from "formik";
import {
  QuestionFormValidationProp,
  questionFormValidationSchema,
  questionFormInitialValue,
} from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
const AddQuestionsMain = (props: any) => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: QuestionFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return(
    <Formik
          initialValues={questionFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={questionFormValidationSchema}
        >
          {({ errors, values }) => (
            <AddQuestionsForm
              submitErrors={submitErrors}
              setSubmitError={setSubmitError}
              errors={errors}
              addQuestions={true}
              values={values}
              addQuizMaterial={props.addQuizMaterial}
            />
          )}
        </Formik> 
  );
};

export default AddQuestionsMain;
