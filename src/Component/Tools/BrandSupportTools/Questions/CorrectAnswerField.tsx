import { Col, Label } from "reactstrap";
import { Field } from "formik";
import TextCounter from "../../../CommonInput/TextCounter";

function CorrectAnswerField(props: any) {
  const { item, index, values } = props;
  const currentValue = values?.answers?.length && values?.answers[index];

  return (
    <Col sm={item !== "1" ? "3" : "4"} className="mb-3">
      <Label check>Correct answer with an explanation (Optional)</Label>
      <Field
        as="textarea"
        name={`answers.${index}.correctAnswer`}
        placeholder="Correct answer with an explanation"
        className="form-control"
        maxLength='300'
      />
      <TextCounter length={currentValue?.correctAnswer?.length} totalLength='300'/>
    </Col>
  );
}

export default CorrectAnswerField;
