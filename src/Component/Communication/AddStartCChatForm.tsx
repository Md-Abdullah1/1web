import { useState } from "react";
import { Row, Col, Label, FormGroup } from "reactstrap";
import { Btn } from "../../AbstractElements";
import CommonModal from "../Ui-Kits/Modal/Common/CommonModal";
import { H3 } from "../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import InviteContactMain from "./InviteContactMain";
import GroupMain from "./GroupMain";
import TextCounter from "../CommonInput/TextCounter";
import TagsInput from "../CommonInput/TagsInput";

const AddStartCChatForm = (props: any) => {
  const {
    errors,
    submitErrors,
    setSubmitError,
    onChangeHandler,
    values,
    setFieldValue,
  } = props;

  // Input To popup
  const [openToModal, setOpenToModal] = useState(false);
  const openToModalToggle = () => {
    setOpenToModal(!openToModal);
  };

  // Input From popup
  const [openFromModal, setOpenFromModal] = useState(false);
  const openFromModalToggle = () => setOpenFromModal(!openFromModal);

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Converstion Type <span className="txt-danger">*</span>
          </Label>
          <FormGroup className="ms-4" check>
            <Field
              id="converstionType-1"
              name="converstionType"
              type="radio"
              className="form-check-input"
              value="Private C-Chat"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${errors.converstionType ? "text-danger" : "text-success"}`
              }`}
              for="converstionType-1"
              check
            >
              Private C-Chat
            </Label>
          </FormGroup>
          <FormGroup className="ms-4" check>
            <Field
              id="converstionType-2"
              name="converstionType"
              type="radio"
              className="form-check-input"
              value="Event or a project with quests or colleagues"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${errors.converstionType ? "text-danger" : "text-success"}`
              }`}
              for="converstionType-2"
              check
            >
              Event or a project with quests or colleagues
            </Label>
          </FormGroup>
          <FormGroup className="ms-4" check>
            <Field
              id="converstionType-3"
              name="converstionType"
              type="radio"
              className="form-check-input"
              value="Forum.. start a public discussion"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${errors.converstionType ? "text-danger" : "text-success"}`
              }`}
              for="converstionType-3"
              check
            >
              Forum.. start a public discussion
            </Label>
          </FormGroup>
          <FormGroup className="ms-4" check>
            <Field
              id="converstionType-4"
              name="converstionType"
              type="radio"
              className="form-check-input"
              value="Make a Wish of a Product or a Service"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${errors.converstionType ? "text-danger" : "text-success"}`
              }`}
              for="converstionType-4"
              check
            >
              Make a Wish of a Product or a Service
            </Label>
          </FormGroup>
          <FormGroup className="ms-4" check>
            <Field
              id="converstionType-5"
              name="converstionType"
              type="radio"
              className="form-check-input"
              value="Job Opening: hire job seekers"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${errors.converstionType ? "text-danger" : "text-success"}`
              }`}
              for="converstionType-5"
              check
            >
              Job Opening: hire job seekers
            </Label>
          </FormGroup>
          <FormGroup className="ms-4" check>
            <Field
              id="converstionType-6"
              name="converstionType"
              type="radio"
              className="form-check-input"
              value="Notification Screen on My Media Center"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${errors.converstionType ? "text-danger" : "text-success"}`
              }`}
              for="converstionType-6"
              check
            >
              Notification Screen on My Media Center
            </Label>
          </FormGroup>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Subject <span className="txt-danger">*</span>
          </Label>
          <Field
            type="text"
            name="subject"
            placeholder="Subject"
            maxLength="140"
            className={`form-control ${
              submitErrors && `${errors.subject ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.subject?.length} totalLength="140" />
          <ErrorMessage
            name="subject"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            To <span className="txt-danger">*</span>
          </Label>
          <FormGroup>
            <Field
              as="select"
              name="to"
              className={`form-control ${
                submitErrors && `${errors.to ? "is-invalid" : "is-valid"}`
              }`}
            >
              <option>Please select</option>
              <option value="1">To</option>
            </Field>
            <ErrorMessage
              name="to"
              component="span"
              className="invalid-feedback"
            />
            <span className="mt-3 btn btn-primary" onClick={openToModalToggle}>
              <i className="icofont icofont-user-alt-7"></i>
            </span>
          </FormGroup>
          <CommonModal
            isOpen={openToModal}
            toggle={openToModalToggle}
            heading="Invite a Contact"
            size="lg"
          >
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
              <H3 className="modal-header justify-content-center border-0">
                Invite a Contact
              </H3>
              <InviteContactMain />
            </div>
          </CommonModal>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            From <span className="txt-danger">*</span>
          </Label>
          <FormGroup>
            <Field
              as="select"
              name="from"
              className={`form-control ${
                submitErrors && `${errors.from ? "is-invalid" : "is-valid"}`
              }`}
            >
              <option>Please select</option>
              <option value="1">from</option>
            </Field>
            <ErrorMessage
              name="from"
              component="span"
              className="invalid-feedback"
            />
            <span
              className="mt-3 btn btn-primary"
              onClick={openFromModalToggle}
            >
              <i className="icofont icofont-users"></i>
            </span>
          </FormGroup>
          <CommonModal
            isOpen={openFromModal}
            toggle={openFromModalToggle}
            heading="Add a Group"
            size="lg"
          >
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
              <H3 className="modal-header justify-content-center border-0">
                Add a Group
              </H3>
              <GroupMain />
            </div>
          </CommonModal>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Converstion Description <span className="txt-danger">*</span>
          </Label>
          <Field
            type="textarea"
            name="converstionDescription"
            placeholder="Converstion Description"
            maxLength="140"
            className={`form-control ${
              submitErrors &&
              `${errors.converstionDescription ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter
            length={values?.converstionDescription?.length}
            totalLength="140"
          />
          <ErrorMessage
            name="converstionDescription"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Keyword <span className="txt-danger">*</span>
          </Label>
          <TagsInput
            name="keyword"
            placeholder="Enter keyword"
            setFieldValue={setFieldValue}
            className={`${
              submitErrors && `${errors.keyword ? "is-invalid" : "is-valid"}`
            }`}
          /> 
          <ErrorMessage
            name="keyword"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="auto" className="mb-3">
          <Btn
            color="primary me-3"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            Save
          </Btn>
          <span
            className="btn btn-light btn-air-light "
            onClick={onChangeHandler}
          >
            <i className="icofont icofont-ui-delete"></i> Discard
          </span>
        </Col>
      </Row>
    </Form>
  );
};
export default AddStartCChatForm;
