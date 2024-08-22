import { Row, Col, Label } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import TextCounter from "../../../CommonInput/TextCounter";
import TagsInput from "../../../CommonInput/TagsInput";

const AddManageExternalLinkForm = (props: any) => { 

  const { errors, submitErrors, setSubmitError, values, setFieldValue } = props;

  return (
    <Form className="form-wizard">
      <Row className="mb-3">
        <Col sm="4">
          <Label check>
            Title of your links <span className="txt-danger">*</span>
          </Label>
          <Field
            name="title"
            type="text"
            placeholder="Enter title of your links"
            maxLength='140'
            className={`form-control ${
              submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.title?.length} totalLength='140' />
          <ErrorMessage
              name="title"
              component="span"
              className="invalid-feedback"
            />
        </Col>
        <Col sm="4">
          <Label check>
            Opinion/Description <span className="txt-danger">*</span>
          </Label>
          <Field
            as="textarea"
            name="description"
            placeholder="Enter Opinion/Description"  
            maxLength={'300'}
            className={`form-control ${
              submitErrors && `${errors.description ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={values?.description?.length} totalLength={'300'} />
          <ErrorMessage
              name="description"
              component="span"
              className="invalid-feedback"
            />
        </Col>
        <Col sm="4">
          <Label check>Keywords (optional)</Label>  
          <TagsInput name="keywords" placeholder="Add keywords" setFieldValue={setFieldValue} />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col sm="4">
          <Label check>
            External Links <span className="txt-danger">*</span>
          </Label>
          <Field
            name="externallink"
            type="text"
            placeholder="Enter your external link"
            className={`form-control ${
              submitErrors && `${errors.externallink ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
              name="externallink"
              component="span"
              className="invalid-feedback"
            />
        </Col>
      </Row>
      <Row>
        <Col sm="auto" className="mb-3">
          <Btn color="primary" type="submit" onClick={() => setSubmitError(true)}>Add Links</Btn>
        </Col>
      </Row>
    </Form>
  );
};

export default AddManageExternalLinkForm;
