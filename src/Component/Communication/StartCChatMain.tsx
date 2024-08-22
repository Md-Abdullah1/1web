import { useState } from "react";
import { Formik } from "formik";
import CommonModal from "../Ui-Kits/Modal/Common/CommonModal";
import { H3 } from "../../AbstractElements";
import AddStartCChatForm from "./AddStartCChatForm";
import { Row, Col } from "reactstrap";
import { StartIChatTitle } from "../../utils/Constant";
import {
  StartCChatFormValidationProp,
  startCChatFormInitialValue,
  startCChatFormValidationSchema,
} from "../../Data/Communication/FormControlValidation";

function StartCChatMain() {
  const [submitErrors, setSubmitError] = useState<boolean>(false);

  // Start C-Chat popup
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => {
    !openModal && setSubmitError(false);
    setOpenModal(!openModal)
  }; 

  const handleSubmit = (values: StartCChatFormValidationProp) => {
    console.log(values);
    setSubmitError(false);
  };

  return (
    <>
      <Row>
        <Col sm={3}>
          <span className="btn btn-primary" onClick={openModalToggle}>
            <i className="fa fa-plus-circle"></i> {StartIChatTitle}
          </span>
        </Col>
      </Row>

      <CommonModal
        isOpen={openModal}
        toggle={openModalToggle}
        heading="Login"
        size="xl"
      >
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <H3 className="modal-header justify-content-center border-0">
            {StartIChatTitle}
          </H3>
          <Formik
            initialValues={startCChatFormInitialValue}
            onSubmit={handleSubmit}
            validationSchema={startCChatFormValidationSchema}
          >
            {({ errors, values, setFieldValue}) => (
              <AddStartCChatForm
                submitErrors={submitErrors}
                setSubmitError={setSubmitError}
                errors={errors}
                onChangeHandler={openModalToggle}
                values={values}
                setFieldValue={setFieldValue}
              />
            )}
          </Formik>
        </div>
      </CommonModal>
    </>
  );
}

export default StartCChatMain;
