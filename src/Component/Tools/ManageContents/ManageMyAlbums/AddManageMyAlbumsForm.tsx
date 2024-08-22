import { Row, Col, Label } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import TagsInput from "../../../CommonInput/TagsInput";
import TextCounter from "../../../CommonInput/TextCounter";

const AddManageMyAlbumsForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values, setFieldValue } = props;

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            New Album Name <span className="txt-danger">*</span>
          </Label>
          <Field
            type="text"
            name="albumName"
            placeholder="New Album Name"
            maxLength='140'
            className={`form-control ${
              submitErrors && `${errors.albumName ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.albumName?.length} totalLength='140' />
          <ErrorMessage
            name="albumName"
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Description/Summary (Optional)</Label>
          <Field
            as="textarea"
            name="description"
            className="form-control"
            maxLength={'300'}
            placeholder="Description/Summary"
          />
          <TextCounter length={values?.description?.length} totalLength="300" />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Keywords
          </Label> 
          <TagsInput name="keywords" placeholder="Add keywords" setFieldValue={setFieldValue} />
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
          <span className="btn btn-light btn-air-light ">Undo Changes</span>
        </Col>
      </Row>
    </Form>
  );
};

export default AddManageMyAlbumsForm;
