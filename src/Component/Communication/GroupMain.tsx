import { useState } from "react";
import { Formik } from "formik";
import AddGroupForm from "./AddGroupForm";
import {
  GroupFormValidationProp,
  groupFormInitialValue,
  groupFormValidationSchema,
} from "../../Data/Communication/FormControlValidation";

function GroupMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: GroupFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <Formik
      initialValues={groupFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={groupFormValidationSchema}
    >
      {({ errors, values }) => (
        <AddGroupForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
          values={values}
        />
      )}
    </Formik>
  );
}

export default GroupMain;
