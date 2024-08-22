import { useState } from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs"; 
import {
  BrandSupportTools,
  AddMangeExternalLinks,
} from "../../../../utils/Constant"; 
import AddManageExternalLinkForm from "../../../../Component/Tools/BrandSupportTools/ManageExternalLink/AddManageExternalLinkForm";
import { Formik } from "formik";
import {
  ManageExternalLinkFormValidationProp,
  manageExternalLinkFormInitialValue,
  manageExternalLinkFormValidationSchema,
} from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";

const AddManageMyExternalLink = () => { 

  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (values: ManageExternalLinkFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={AddMangeExternalLinks}
        parent={BrandSupportTools}
      />
      <Container className="card p-4" fluid>
        <Formik
          initialValues={manageExternalLinkFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={manageExternalLinkFormValidationSchema}
        >
          {({ errors, values, setFieldValue }) => (
            <AddManageExternalLinkForm
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

export default AddManageMyExternalLink;
