import React, { useState } from "react";
import { Formik } from "formik";
import { AttendanceSystemDataType } from "../../../../Data/Tools/BrandSupportTools/ButtonActions";
import { Container } from "reactstrap";
import AddNewEvent from "../../../../Component/Tools/BrandSupportTools/AttendanceSystem/AddNewEvent";
import { AttendanceFormValidationProp, AttendanceNewEventFormValidationSchema } from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";

const ManageActivityEdit = ({ rowData }:any) => {
  const [submitErrors, setSubmitError] = useState(false);

  const handleSubmit = (values: AttendanceFormValidationProp) => {
    console.log("activity values",values);
    // api call and response
    setSubmitError(false);
    // temperary alert to know form submission
    alert('we got your values ')
    // navigate(`${process.env.PUBLIC_URL}/activities-meetings`) 
  };
  console.log("value", rowData);
  return (
    <div className="page-body">
      
      <Container className="card p-4" fluid>
        <Formik
          initialValues={rowData}
          onSubmit={handleSubmit}
          validationSchema={AttendanceNewEventFormValidationSchema}
        >
          {({ errors, values, setFieldValue }) => (
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

export default ManageActivityEdit;
