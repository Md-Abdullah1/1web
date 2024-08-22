import { useState } from "react";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ManageContents, AddNewAlbums } from "../../../../utils/Constant"; 
import AddManageMyAlbumsForm from "../../../../Component/Tools/ManageContents/ManageMyAlbums/AddManageMyAlbumsForm";
import { Formik } from "formik";
import {
  ManageAlbumFormValidationProp,
  manageAlbumFormInitialValue,
  manageAlbumFormValidationSchema,
} from "../../../../Data/Tools/ManageContents/FormControlsValidation";

const AddManageMyAlbums = () => { 

  const [submitErrors, setSubmitError] = useState<boolean>(false);

  const handleSubmit = (
    values: ManageAlbumFormValidationProp,
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    setSubmitError(false);
    resetForm();
  };

  return (
    <div className="page-body">
      <Breadcrumbs mainTitle={AddNewAlbums} parent={ManageContents} />
      <Container className="card p-4" fluid>
        <Formik
          initialValues={manageAlbumFormInitialValue}
          onSubmit={handleSubmit}
          validationSchema={manageAlbumFormValidationSchema}
        >
          {({ errors, values, setFieldValue }) => (
            <AddManageMyAlbumsForm
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

export default AddManageMyAlbums;
