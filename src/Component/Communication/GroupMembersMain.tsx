import { useState } from "react";
import { Formik } from "formik";
import AddGroupMemberForm from "./AddGroupMemberForm";
import {
  GroupMemberFormValidationProp,
  groupMemberFormInitialValue,
  groupMemberFormValidationSchema,
} from "../../Data/Communication/FormControlValidation";

function GroupMembersMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: GroupMemberFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };
  return (
    <Formik
      initialValues={groupMemberFormInitialValue}
      onSubmit={handleSubmit}
      validationSchema={groupMemberFormValidationSchema}
    >
      {({ errors, values}) => (
        <AddGroupMemberForm
          submitErrors={submitErrors}
          setSubmitError={setSubmitError}
          errors={errors}
          values={values}
        />
      )}
    </Formik>
  );
}

export default GroupMembersMain;
