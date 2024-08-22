import { Row, Col, Label } from "reactstrap";
import { Btn } from "../../../../AbstractElements";
import { ErrorMessage, Field, Form } from "formik";
import Country from "../../../CommonInput/Country";
import State from "../../../CommonInput/State";
import TextCounter from "../../../CommonInput/TextCounter";

const AddSpecialParametersForm = (props: any) => {
  const { errors, submitErrors, setSubmitError, values } = props;

  return (
    <Form className="form-wizard">
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Book Title <span className="txt-danger">*</span>
          </Label>
          <Field
            type="text"
            name="title"
            placeholder="Title"
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
        <Col sm="4" className="mb-3">
          <Label check>Country</Label> 
          <Country name="country" isMulti={false} placeholder="Select country..."/>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>State</Label> 
          <State name="state" isMulti={false} placeholder="Select state..."/>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>Course</Label>
          <Field type="text" name="course" maxLen gth='140'placeholder="Course" className='form-control' />
          <TextCounter length={values?.course?.length} totalLength='140' />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Book</Label>
          <Field type="text" name="book" maxLength='140' placeholder="Book" className='form-control'/>
          <TextCounter length={values?.book?.length} totalLength='140' />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>Exam</Label>
          <Field type="text" name="exam" maxLength='140' placeholder="Exam" className='form-control'/>
          <TextCounter length={values?.exam?.length} totalLength='140' />
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

export default AddSpecialParametersForm;
