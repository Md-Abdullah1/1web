import { useState } from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ManageBranches, ManagesBranchesAdd } from "../../../../utils/Constant"; 
import { Formik } from "formik"; 
import {
  ManageBranchFormValidationProp,
  manageBranchFormInitialValue,
  manageBranchFormValidationSchema,
} from "../../../../Data/Tools/ManageOnlineStore/FormControlsValidation";
import AddManageBranchesForm from "../../../../Component/Tools/ManageOnlineStore/ManageBranches/AddManageBranchesForm";

const AddManageBranch = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: ManageBranchFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={ManagesBranchesAdd} parent={ManageBranches} />
      <Container className="card p-4" fluid>
        <Formik
          initialValues={manageBranchFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={manageBranchFormValidationSchema}
        >
          {({ errors, values }) => (
            <AddManageBranchesForm
              submitErrors={submitErrors}
              setSubmitError={setSubmitError}
              errors={errors}
              values={values}
            />
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default AddManageBranch;
