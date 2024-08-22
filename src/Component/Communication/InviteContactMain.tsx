import { useState } from "react";
import { Formik } from "formik";
import InviteContactForm from "./InviteContactForm";
import {
  InviteAContactFormValidationProp,
  inviteAContactFormInitialValue,
  inviteAContactFormValidationSchema,
} from "../../Data/Communication/FormControlValidation";

function InviteContactMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: InviteAContactFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={inviteAContactFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={inviteAContactFormValidationSchema}
    >
      {({ errors, values }) => (
        <InviteContactForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors} 
          values={values}
        />
      )}
    </Formik>
  ); 
}

export default InviteContactMain;
