import { useState } from "react";
import { Formik } from "formik";
import SchedulesForm from "./SchedulesForm";
import { Container } from "reactstrap";
import {
  SchedulesFormValidationProp,
  scheduleFormInitialValue,
  scheduleFormValidationSchema,
} from "../../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ManageBranches, SchedulesTitle } from "../../../../../utils/Constant";
import Message from "../../../../CommonMessage/Message";
function SchedulesMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: SchedulesFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={SchedulesTitle} parent={ManageBranches} />
      <Container className="card p-4" fluid>
        <Message message="Please add at least one branch first to be able to use this form."/>
        <Formik
          initialValues={scheduleFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={scheduleFormValidationSchema}
        >
          {({ errors }) => (
            <SchedulesForm
              submitErrors={submitErrors}
              setSubmitError={setSubmitError}
              errors={errors}
            />
          )}
        </Formik>
      </Container>
    </div>
  );
}

export default SchedulesMain;
