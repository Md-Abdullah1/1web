import { Row, Col, Label, FormGroup } from "reactstrap";
import { ErrorMessage, Field, Form } from "formik";
import { Btn } from "../../../../AbstractElements";
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan";
import SubCategory from "../../ManageOnlineStore/SubCategory";
import TextCounter from "../../../CommonInput/TextCounter";
import TagsInput from "../../../CommonInput/TagsInput";

const AddStudyMaterialLessonForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values, setFieldValue } = props;

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
          <Label check>
            Special Parameters <span className="txt-danger">*</span>
          </Label>
          <Field
            as="select"
            name="specialParameter"
            className={`form-control ${
              submitErrors &&
              `${errors.specialParameter ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>Select special parameter</option>
            <option value={"1"}>parameter</option>
          </Field>
          <ErrorMessage
            name="specialParameter"
            component="span"
            className="invalid-feedback"
          />
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
          <TextCounter length={values?.title?.length} totalLength={"140"} />
          <ErrorMessage
            name="title"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
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
              submitErrors &&
              `${errors.materialText ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.materialText?.length} totalLength='300' />
          <ErrorMessage
            name="materialText"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Auto Publish Online</Label>
          <br />
          <div className="d-flex">
            <div className="flex-shrink-0  text-end icon-state switch-outline">
              <CommonSwitchSpan
                name="autoPublishOnline"
                color={"primary"}
                defaultChecked
              />
            </div>
            <Label className="m-l-10" check></Label>
          </div>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Date + Hour to Publish Online <span className="txt-danger">*</span>
          </Label>
          <Field
            type="datetime"
            name="dateHours"
            placeholder="Date + Hour to Publish Online"
            className={`form-control ${
              submitErrors && `${errors.dateHours ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name="dateHours"
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Attachment (Optional)</Label>
          <FormGroup>
            <Field name="attachement" className="form-control" type="file" />
            <span className="txt-danger">
              Only pdf, mp3, jpg, jpeg, gif, png, webp allowed.
            </span>
          </FormGroup>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Homework (Optional)</Label>
          <Field
            as="textarea"
            name="homework"
            placeholder="Homework"
            className="form-control"
            maxLength='300'
          />
          <TextCounter length={values?.homework?.length} totalLength='300' />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Keywords (Optional)</Label> 
          <TagsInput name="keywords" placeholder="Enter keywords" setFieldValue={setFieldValue} />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Url</Label>
          <FormGroup>
            <Field
              type="text"
              name="url"
              placeholder="URL"
              className={`form-control ${
                submitErrors && `${errors.url ? "is-invalid" : "is-valid"}`
              }`}
            />
            <ErrorMessage
              name="url"
              component="span"
              className="invalid-feedback"
            />
          </FormGroup>
        </Col>
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

export default AddStudyMaterialLessonForm;
