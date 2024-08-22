import { useState } from "react";
import { Formik } from "formik";
import ContactsForm from "./ContactsForm";
import {
  ContactUsFormValidationProp,
  contactUsFormInitialValue,
  contactUsFormValidationSchema,
} from "../../Data/Contacts/FormControlsValidation";

function ContactsMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: ContactUsFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={contactUsFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={contactUsFormValidationSchema}
    >
      {({ errors, values }) => (
        <ContactsForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
          values={values}
        />
      )}
    </Formik>
  );
}

export default ContactsMain;
