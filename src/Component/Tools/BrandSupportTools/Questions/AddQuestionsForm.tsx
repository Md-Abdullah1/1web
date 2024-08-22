import { useState } from "react";
import { Row, Col, Label, FormGroup } from "reactstrap";
import { Btn, H3 } from "../../../../AbstractElements";
import CommonSwitchSpan from "../../../../Component/Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import SubCategory from "../../../../Component/Tools/ManageOnlineStore/SubCategory";
import CommonModal from "../../../../Component/Ui-Kits/Modal/Common/CommonModal";
import { ErrorMessage, Field, Form, FieldArray } from "formik";
import StudyMaterialLessonMain from "../StudyMaterialLesson/StudyMaterialLessonMain";
import QuizMaterialMain from "../QuizMaterial/QuizMaterialMain";
import TextCounter from "../../../CommonInput/TextCounter";
import AlternativeQuestions from "../../../CommonInput/AlternativeQuestions";
import AnswerInput from "../../../CommonInput/AnswerInput";
import CorrectAnswerField from "./CorrectAnswerField";

const AddQuestionsForm = (props: any) => {
  const [currectAnswerCount, setCurrectAnswerCount] = useState(["1"]);

  const addCurrectAnswerFieldCountHandler = (arrayHelpers: any) => {
    const value = currectAnswerCount.length + 1;
    setCurrectAnswerCount((oldArray) => [...oldArray, value.toString()]);
    arrayHelpers.push("");
  };

  const removeCurrectAnswerFieldHandler = (
    value: string,
    arrayHelpers: any,
    index: number
  ) => {
    const updatedFormCount = currectAnswerCount.filter(
      (item) => item !== value
    );
    setCurrectAnswerCount(updatedFormCount);
    arrayHelpers.remove(index);
  };

  // Quiz Material popup.
  const [openModal, setOpenModal] = useState(false);
  const openModalToggle = () => setOpenModal(!openModal);

  // Study Material & Lesson popup.
  const [openSMLModal, setOpenSMLModal] = useState(false);
  const openSMLModalToggle = () => setOpenSMLModal(!openSMLModal);

  const { errors, submitErrors, setSubmitError, values } = props;

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <SubCategory
            className={`form-control ${
              submitErrors &&
              `${errors.subcategory ? "is-invalid" : "is-valid"}`
            }`}
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Lesson (Optional)</Label>
          <FormGroup>
            <Field as="select" name="lesson" className="form-control mb-2">
              <option value={""}>Select a Lesson </option>
            </Field>
            <span className="btn btn-primary" onClick={openSMLModalToggle}>
              <i className="fa fa-plus-circle"></i> New Lesson
            </span>
          </FormGroup>
          <CommonModal
            isOpen={openSMLModal}
            toggle={openSMLModalToggle}
            heading="Login"
            size="xl"
          >
            <div className="modal-toggle-wrapper social-profile text-start dark-sign-up">
              <H3 className="modal-header justify-content-center border-0">
                Add A Lesson
              </H3>
              <StudyMaterialLessonMain />
            </div>
          </CommonModal>
        </Col>
        {props?.addQuizMaterial && (
          <Col sm="4" className="mb-3">
            <Label check>Quiz Material (Optional)</Label>
            <FormGroup>
              <Field as="select" name="lesson" className="form-control mb-2">
                <option value={""}>Select a Quiz Material </option>
              </Field>
              <span className="btn btn-primary mb-2" onClick={openModalToggle}>
                <i className="fa fa-plus-circle"></i> New Quiz Material
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
                  Add a Quiz Material
                </H3>
                <QuizMaterialMain addQuestions={false} />
              </div>
            </CommonModal>
          </Col>
        )}
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Question Text <span className="txt-danger">*</span>
          </Label>
          <Field
            as="textarea"
            name="questionText"
            placeholder="Question Text"
            maxLength="300"
            className={`form-control ${
              submitErrors &&
              `${errors.questionText ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter
            length={values?.questionText?.length}
            totalLength={"300"}
          />
          <ErrorMessage
            name="questionText"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Question Image (Optional)</Label>
          <FormGroup>
            <Field className="form-control" name="questionImage" type="file" />
          </FormGroup>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Question Audio (Optional)</Label>
          <FormGroup>
            <Field className="form-control" name="questionAudio" type="file" />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Duration in Minutes <span className="txt-danger">*</span>
          </Label>
          <Field
            type="text"
            name="durationInMinutes"
            placeholder="Duration in Minutes"
            className={`form-control ${
              submitErrors &&
              `${errors.durationInMinutes ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="durationInMinutes"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Point / Grade <span className="txt-danger">*</span>
          </Label>
          <Field
            type="text"
            name="pointGrade"
            placeholder="Point / Grade"
            className={`form-control ${
              submitErrors && `${errors.pointGrade ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="pointGrade"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Obligatory Question <span className="txt-danger">*</span>
          </Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="obligationQuestion"
                className={`form-control ${
                  submitErrors &&
                  `${errors.obligationQuestion ? "is-invalid" : "is-valid"}`
                }`}
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Answer Input <span className="txt-danger">*</span>
          </Label>
          <AnswerInput
            name="answerInput"
            className={`form-control ${
              submitErrors &&
              `${errors.answerInput ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="answerInput"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Show Calculator</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="showCalculator"
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Show Translator</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="showTranslator"
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Show Dictionary</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="showDictionary"
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Search the Web</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                color={"primary"}
                name="searchTheWeb"
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Alternative Questions (Optional)</Label>
          <AlternativeQuestions
            name="aleternativeQuestions"
            isMulti={true}
            placeholder="Please select alternative questions"
          />
        </Col>
      </Row>
      <Row>
        <FieldArray
          name="answers"
          render={(arrayHelpers) => {
            return (
              <>
                {currectAnswerCount.map((item, index) => (
                  <>
                    <CorrectAnswerField
                      key={index}
                      submitErrors={submitErrors}
                      errors={errors}
                      index={index}
                      item={item}
                      values={values}
                    />
                    {item !== "1" && (
                      <Col sm="1" className="mb-3 icon-top-margin">
                        <span
                          onClick={() =>
                            removeCurrectAnswerFieldHandler(
                              item,
                              arrayHelpers,
                              index
                            )
                          }
                          className="badge b-ln-height badge-danger"
                        >
                          <i className="fa fa-minus"></i>
                        </span>
                      </Col>
                    )}
                  </>
                ))}

                {currectAnswerCount.length < 5 && (
                  <Col sm="1" className="mb-3 icon-top-margin">
                    <span
                      onClick={() =>
                        addCurrectAnswerFieldCountHandler(arrayHelpers)
                      }
                      className="badge b-ln-height badge-dark"
                    >
                      <i className="fa fa-plus"></i>
                    </span>
                  </Col>
                )}
              </>
            );
          }}
        />
      </Row>
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

export default AddQuestionsForm;
