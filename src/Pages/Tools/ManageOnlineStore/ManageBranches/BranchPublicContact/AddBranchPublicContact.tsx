import { useState } from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import {
  ManageBranches,
  AddNewBranchPublicContact,
} from "../../../../../utils/Constant";
import AddBranchPublicContactForm from "../../../../../Component/Tools/ManageOnlineStore/ManageBranches/BranchPublicContact/AddBranchPublicContactForm";
import { Formik } from "formik";
import {
  BranchPublicContactFormValidationProp,
  branchPublicContactFormInitialValue,
  branchPublicContactFormValidationSchema,
} from "../../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";
import Message from "../../../../../Component/CommonMessage/Message";

const AddBranchPublicContact = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: BranchPublicContactFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={AddNewBranchPublicContact}
        parent={ManageBranches}
      />
      <Container className="card p-4" fluid>
        <Message message="Please add at least one branch first to be able to use this form."/>
        <Formik
          initialValues={branchPublicContactFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={branchPublicContactFormValidationSchema}
        >
          {({ errors, values, setFieldValue }) => (
            <AddBranchPublicContactForm
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

export default AddBranchPublicContact;
