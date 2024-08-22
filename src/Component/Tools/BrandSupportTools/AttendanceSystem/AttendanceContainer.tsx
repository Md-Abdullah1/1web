import React, { useState } from "react";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";


import { Container } from "reactstrap";
import { Formik } from "formik";

import { AddAttendanceNewEvent, ManageAttendanceSystem } from "../../../../utils/Constant";
import { AddAttendanceNewEventInitialValues, AttendanceFormValidationProp, AttendanceNewEventFormValidationSchema } from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
import AddNewEvent from "./AddNewEvent";
import { useNavigate } from "react-router-dom";

const AttendanceContainer = () => {
  const navigate = useNavigate()
  const [submitErrors, setSubmitError] = useState<boolean>(false);
  const handleSubmit = (values: AttendanceFormValidationProp) => {
    console.log("activity values",values);
    // api call and response
    setSubmitError(false);
    // temperary to know the submission of form
    alert("form submitted")
    // navigate(`${process.env.PUBLIC_URL}/activities-meetings`) 
  };
  return (
    <div>
      <Breadcrumbs
        mainTitle={AddAttendanceNewEvent}
        parent={ManageAttendanceSystem}
      />
      <Container className="card p-4" fluid>
        {/* <Message message="Please add at least one branch first to be able to use this form." /> */}

        <Formik
          initialValues={AddAttendanceNewEventInitialValues}
          onSubmit={handleSubmit}
          validationSchema={AttendanceNewEventFormValidationSchema}
        >
          {({ errors,values,setFieldValue }) => (
            <AddNewEvent
              submitErrors={submitErrors}
              setSubmitError={setSubmitError}
              errors={errors}
              values={values}
              setFieldValue={setFieldValue}
            />
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default AttendanceContainer;
