import { useState } from "react";
import { Row, Col, Label, FormGroup } from "reactstrap";
import { Btn } from "../../AbstractElements";
import CommonModal from "../Ui-Kits/Modal/Common/CommonModal";
import { H3 } from "../../AbstractElements"; 
import { ErrorMessage, Field, Form } from "formik";
import GroupMembersMain from "./GroupMembersMain";
import TextCounter from "../CommonInput/TextCounter";

const AddGroupForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values} = props;

  // Add Group Members Popup
  const [openToModal, setOpenToModal] = useState(false);
  const openToModalToggle = () => setOpenToModal(!openToModal);

  return (
    <>
      <Form className="form-wizard">
        <Row>
          <Col sm="6" className="mb-3">
            <Label check>
              Group Name <span className="txt-danger">*</span>
            </Label>
            <Field
              type="text"
              name="groupName"
              placeholder="Group Name"
              maxLength='140'
              className={`form-control ${
                submitErrors &&
                `${errors.groupName ? "is-invalid" : "is-valid"}`
              }`}
            />
            <TextCounter length={values?.groupName?.length} totalLength='140' />
            <ErrorMessage
              name="groupName"
              component="span"
              className="invalid-feedback"
            />
          </Col>
          <Col sm="6" className="mb-3">
            <Label check>
              Group Description <span className="txt-danger">*</span>
            </Label>
            <Field
              type="textarea"
              name="groupDescription"
              placeholder="Group Description"
              maxLength='140'
              className={`form-control ${
                submitErrors &&
                `${errors.groupDescription ? "is-invalid" : "is-valid"}`
              }`}
            />
            <TextCounter length={values?.groupDescription?.length} totalLength='140' />
            <ErrorMessage
              name="groupDescription"
              component="span"
              className="invalid-feedback"
            />
          </Col>
        </Row>
        <Row>
          <Col sm="6" className="mb-3">
            <Label check>
              Members <span className="txt-danger">*</span>
            </Label>
            <Field
              as="select"
              name="members"
              className={`form-control ${
                submitErrors && `${errors.members ? "is-invalid" : "is-valid"}`
              }`}
            >
              <option value={""}>Please members</option>
              <option value={"1"}>Members</option>
            </Field>
            <ErrorMessage
              name="members"
              component="span"
              className="invalid-feedback"
            />
          </Col>
          <Col sm="6" className="mb-3">
            <Label check>Image</Label>
            <FormGroup>
              <Field name="upload-image" type="file" className="form-control" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="auto" className="mb-3">
            <Btn
              color="primary me-3 mb-3"
              type="submit"
              onClick={() => setSubmitError(true)}
            >
              <i className="icofont icofont-users"></i> Save Group
            </Btn>
            <span className="btn btn-primary mb-3" onClick={openToModalToggle}>
              <i className="icofont icofont-user-alt-7"></i> Add Group Members
              to Existing Group
            </span>
          </Col>
        </Row>
      </Form>
      <CommonModal
        isOpen={openToModal}
        toggle={openToModalToggle}
        heading="Add Group Members"
        size="lg"
      >
        <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
          <H3 className="modal-header justify-content-center border-0">
            Add Group Members
          </H3> 
          <GroupMembersMain/>
        </div>
      </CommonModal>
    </>
  );
};

export default AddGroupForm;
