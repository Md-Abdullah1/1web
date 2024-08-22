import { useEffect, useState } from "react";
import { Row, Col, Label, FormGroup } from "reactstrap";
import { Btn, H3 } from "../../../../AbstractElements";
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import CommonModal from "../../../Ui-Kits/Modal/Common/CommonModal";
import TestOrQuizSettingsForm from "./TestOrQuizSettingsForm";
import { ErrorMessage, Field, Form } from "formik";
import SpecialParametersMain from "../SpecialParameters/SpecialParametersMain";
import QuizMaterialMain from "../QuizMaterial/QuizMaterialMain";
import TextCounter from "../../../CommonInput/TextCounter";
import TagsInput from "../../../CommonInput/TagsInput";
import GameSettingsForm from "./GameSettingsForm";

const AddSurveyAndQuizzesForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values, setFieldValue } = props;

  // Quiz Material popup
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);

  // Special Parameter popup
  const [openSPModal, setOpenSPModal] = useState(false);
  const openSPModalToggle = () => setOpenSPModal(!openSPModal);

  const formTypeHandler = (flag: string) => {
    setFieldValue("formType", flag);
  };

  return (
    <Form className="form-wizard">
      <Row>
        <Col className="mb-3">
          <h4>General Setting</h4>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Form Type
            <span className="txt-danger">*</span>
          </Label>
          <Row>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="formType1"
                  name="formType"
                  type="radio"
                  value="1"
                  onChange={() => formTypeHandler("1")}
                  className="form-check-input"
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.formType ? "text-danger" : "text-success"}`
                  }`}
                  for="formType1"
                  check
                >
                  Survey
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="formType2"
                  name="formType"
                  type="radio"
                  value="2"
                  onChange={() => formTypeHandler("2")}
                  className="form-check-input"
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.formType ? "text-danger" : "text-success"}`
                  }`}
                  for="formType2"
                  check
                >
                  Test or Quiz
                </Label>
              </FormGroup>
            </Col>
            <Col sm="auto" className="mb-3 ms-4">
              <FormGroup check>
                <Field
                  id="formType3"
                  name="formType"
                  type="radio"
                  value="3"
                  onChange={() => formTypeHandler("3")}
                  className="form-check-input"
                />
                <Label
                  className={`mb-0 ${
                    submitErrors &&
                    ` ${errors.formType ? "text-danger" : "text-success"}`
                  }`}
                  for="formType3"
                  check
                >
                  Educational Game
                </Label>
              </FormGroup>
            </Col>
          </Row>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Special Parameters <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="specialParameters"
            className={`me-2 mb-2 form-control ${
              submitErrors &&
              `${errors.specialParameters ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Select special parameter</option>
            <option value={"1"}>Parameter</option>
          </Field>
          <ErrorMessage
            name="specialParameters"
            component="span"
            className="invalid-feedback"
          />
          <span className="btn btn-primary" onClick={openSPModalToggle}>
            <i className="fa fa-plus-circle"></i> New Special Parameters
          </span>
          <CommonModal
            isOpen={openSPModal}
            toggle={openSPModalToggle}
            heading="Add a Special Parameter"
            size="xl"
          >
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
              <H3 className="modal-header justify-content-center border-0">
                Add a Special Parameter
              </H3>
              <SpecialParametersMain />
            </div>
          </CommonModal>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Quiz Materials <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="quizMaterial"
            className={`me-2 mb-2 form-control ${
              submitErrors &&
              `${errors.quizMaterial ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Select quiz material</option>
            <option value={"1"}>material</option>
          </Field>
          <ErrorMessage
            name="quizMaterial"
            component="span"
            className="invalid-feedback"
          />
          <span className="btn btn-primary" onClick={openModalToggle}>
            <i className="fa fa-plus-circle"></i> New Quiz Material
          </span>
          <CommonModal
            isOpen={openModal}
            toggle={openModalToggle}
            heading="Add a Quiz Material"
            size="xl"
          >
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
              <H3 className="modal-header justify-content-center border-0">
                Add a Quiz Material
              </H3>
              <QuizMaterialMain addQuestions={false} />
            </div>
          </CommonModal>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Title <span className="txt-danger">*</span>
          </Label>
          <Field
            type="text"
            name="title"
            placeholder="Title"
            maxLength="140"
            className={`form-control ${
              submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.title?.length} totalLength="140" />
          <ErrorMessage
            name="title"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Description <span className="txt-danger">*</span>
          </Label>
          <Field
            as="textarea"
            name="description"
            maxLength="300"
            placeholder="Description"
            className={`form-control ${
              submitErrors &&
              `${errors.description ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.description?.length} totalLength="300" />
          <ErrorMessage
            name="description"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        {values?.formType !== "3" && (
          <Col sm="4" className="mb-3">
            <Label check>
              Recipient Type
              <span className="txt-danger">*</span>
            </Label>
            <Row>
              <Col sm="auto" className="mb-3 ms-4">
                <FormGroup check>
                  <Field
                    id="recipient-1"
                    name="recipientType"
                    type="radio"
                    value={"Any"}
                    className="form-check-input"
                  />
                  <Label
                    className={`mb-0 ${
                      submitErrors &&
                      ` ${
                        errors.recipientType ? "text-danger" : "text-success"
                      }`
                    }`}
                    for="recipient-1"
                    check
                  >
                    Any
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="auto" className="mb-3 ms-4">
                <FormGroup check>
                  <Field
                    id="recipient-2"
                    name="recipientType"
                    type="radio"
                    className="form-check-input"
                    value={"Only Followers"}
                  />
                  <Label
                    className={`mb-0 ${
                      submitErrors &&
                      ` ${
                        errors.recipientType ? "text-danger" : "text-success"
                      }`
                    }`}
                    for="recipient-2"
                    check
                  >
                    Only Followers
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="auto" className="mb-3 ms-4">
                <FormGroup check>
                  <Field
                    id="recipient-3"
                    name="recipientType"
                    type="radio"
                    className="form-check-input"
                    value={"Only who has the link"}
                  />
                  <Label
                    className={`mb-0 ${
                      submitErrors &&
                      ` ${
                        errors.recipientType ? "text-danger" : "text-success"
                      }`
                    }`}
                    for="recipient-3"
                    check
                  >
                    Only who has the link
                  </Label>
                </FormGroup>
              </Col>
            </Row>
          </Col>
        )}
        <Col sm="4" className="mb-3">
          <Label check>Skip & Jump to Other Questions</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="otherQuestions"
                className={`form-control`}
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Enable Bookmark</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="enableBookmark"
                className={`form-control`}
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Pause Timer</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="pauseTimer"
                className={`form-control`}
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Keywords (Optional)</Label>
          <TagsInput
            name="keywords"
            placeholder="Enter keywords"
            setFieldValue={setFieldValue}
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Image (Optional)</Label>
          <FormGroup>
            <Field name="image" className={`form-control`} type="file" />
          </FormGroup>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Timezone <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="timezone"
            className={`me-2 mb-2 form-control ${
              submitErrors && ` ${errors.timezone ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Select Timezone</option>
            <option value={"1"}>Timezone</option>
          </Field>
          <ErrorMessage
            name="timezone"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        {values?.formType !== "3" && (
          <>
            <Col sm="4" className="mb-3">
              <Label check>Auto Publish Online</Label>
              <br />
              <div className="d-flex">
                <div className="flex-shrink-0  text-end icon-state switch-outline">
                  <CommonSwitchSpan
                    color={"primary"}
                    name="autoPublishOnline"
                    className="form-control"
                    defaultChecked
                  />
                </div>
                <Label className="m-l-10" check></Label>
              </div>
            </Col>
            <Col sm="4" className="mb-3">
              <Label check>
                Date + Hour to Publish Online{" "}
                <span className="txt-danger">*</span>
              </Label>
              <Field
                type="datetime-local"
                name="dateHours"
                placeholder="Date + Hour to Publish Online"
                className={`form-control ${
                  submitErrors &&
                  `${errors.dateHours ? "is-invalid" : "is-valid"}`
                }`}
              />
              <ErrorMessage
                name="dateHours"
                component="span"
                className="invalid-feedback"
              />
            </Col>
            <Col sm="4" className="mb-3">
              <Label check>Expiry Date + Hour (Optional)</Label>
              <Field
                type="datetime-local"
                name="dateHoursExpiry"
                placeholder="Expiry Date + Hour (Optional)"
                className="form-control"
              />
            </Col>
            <Col sm="4" className="mb-3">
              <Label check>Shuffle and Mix Questions</Label>
              <br />
              <div className="d-flex">
                <div className="flex-shrink-0  text-end icon-state switch-outline">
                  <CommonSwitchSpan
                    color={"primary"}
                    name="shuffleAndMixQuestions"
                    className="form-control"
                    defaultChecked
                  />
                </div>
                <Label className="m-l-10" check></Label>
              </div>
            </Col>
            <Col sm="4" className="mb-3">
              <Label check>Prerequisites and Requirements (optional)</Label>
              <Field
                as="textarea"
                name="prerequisitesAndRequirements"
                className="form-control"
                placeholder="Prerequisites and Requirements"
                maxLength="300"
              />
              <TextCounter length={values?.prerequisitesAndRequirements?.length} totalLength="300" />
            </Col>
          </>
        )}
        <Col sm="4" className="mb-3">
          <Label check>Status</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="status"
                className="form-control"
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
      </Row>
      {values?.formType == "2" && (
        <TestOrQuizSettingsForm submitErrors={submitErrors} errors={errors} setFieldValue={setFieldValue} />
      )}
      {values?.formType == "3" && (
        <GameSettingsForm submitErrors={submitErrors} errors={errors} setFieldValue={setFieldValue} />
      )}
      <Row>
        <Col sm="auto" className="mb-3">
          <Btn
            color="primary"
            type="submit"
            onClick={() => setSubmitError(true)}
          >
            Save
          </Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default AddSurveyAndQuizzesForm;
