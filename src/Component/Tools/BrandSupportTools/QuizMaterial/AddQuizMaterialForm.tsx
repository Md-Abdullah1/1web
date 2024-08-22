import { useState } from "react";
import { Row, Col, Label, FormGroup } from "reactstrap";
import { Btn, H3 } from "../../../../AbstractElements";
import SubCategory from "../../ManageOnlineStore/SubCategory";
import CommonModal from "../../../Ui-Kits/Modal/Common/CommonModal";
import { ErrorMessage, Field, Form } from "formik";
import AddQuestionsMain from "../Questions/AddQuestionsMain";
import TagsInput from "../../../CommonInput/TagsInput";
import TextCounter from "../../../CommonInput/TextCounter";

const AddQuizMaterialForm = (props: any) => {
  
  // Questions popup
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);

  const { errors, submitErrors, setSubmitError, addQuestions, values, setFieldValue } = props;

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <SubCategory className={`form-control ${
              submitErrors && `${errors.subcategory ? "is-invalid" : "is-valid"}`
            }`}/>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Title <span className="txt-danger">*</span>
          </Label>
          <Field type="text" name="title" placeholder="Title" maxLength='140' className={`form-control ${
              submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`
            }`}/>
            <TextCounter length={values?.title?.length} totalLength={'140'} />
            <ErrorMessage
              name="title"
              component="span"
              className="invalid-feedback"
            />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Material Text <span className="txt-danger">*</span>
          </Label>
          <Field
            as="textarea"
            name="materialText"
            placeholder="Material Text"
            maxLength='300'
            className={`form-control ${
              submitErrors && `${errors.materialText ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.materialText?.length} totalLength={'300'} />
          <ErrorMessage
              name="materialText"
              component="span"
              className="invalid-feedback"
            />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Attachment (Optional)</Label>
          <FormGroup>
            <Field name="attachement" type="file" className='form-control' />
            <span className="txt-danger">
              Only pdf, mp3, jpg, jpeg, gif, png, webp allowed.
            </span>
          </FormGroup>
        </Col>
        {addQuestions && (
          <Col sm="4" className="mb-3">
            <Label check>Questions (Optional)</Label>
            <FormGroup>
              <span className="btn btn-primary" onClick={openModalToggle}> 
                <i className="fa fa-plus-circle"></i> Add a Question
              </span>
            </FormGroup>
            <CommonModal
                isOpen={openModal}
                toggle={openModalToggle}
                heading="Login"
                size="xl"
              >
                <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
                  <H3 className="modal-header justify-content-center border-0">
                    Add a Question
                  </H3> 
                  <AddQuestionsMain addQuizMaterial={false}/>
                </div>
              </CommonModal>
          </Col>
        )}

        <Col sm="4" className="mb-3">
          <Label check>Keywords (Optional)</Label> 
          <TagsInput name="keywords" placeholder="Select keywords" setFieldValue={setFieldValue} />
        </Col>
      </Row>
      <Row>
        <Col sm="auto" className="mb-3">
          <Btn color="primary" type="submit" onClick={() => setSubmitError(true)}>Save</Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default AddQuizMaterialForm;
