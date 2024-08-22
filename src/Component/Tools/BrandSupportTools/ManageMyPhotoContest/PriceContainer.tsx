import { Row, Col, Label, FormGroup } from "reactstrap";
import { ErrorMessage, Field } from "formik";
import TextCounter from "../../../CommonInput/TextCounter";

const PriceContainer = (props: any) => {
  
  const { errors, submitErrors, index, values } = props;
  const { prizes } = errors;
  const prizeError = prizes?.length && prizes[index];
  const currentValue = values?.prizes?.length && values?.prizes[index]; 
  return (
    <>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Rank <span className="txt-danger">*</span>
          </Label>
          <Field
            name={`prizes.${index}.rank`}
            type="text"
            placeholder="Rank"
            className={`form-control ${
              submitErrors && `${prizeError?.rank ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name={`prizes.${index}.rank`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Prize Name <span className="txt-danger">*</span>
          </Label>
          <Field
            name={`prizes.${index}.prizeName`}
            type="text"
            placeholder="Prize Name"
            maxLength='140'
            className={`form-control ${
              submitErrors &&
              `${prizeError?.prizeName ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={currentValue?.prizeName?.length} totalLength={'140'}/>
          <ErrorMessage
            name={`prizes.${index}.prizeName`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Prize Image <span className="txt-danger">*</span>
          </Label>
          <FormGroup>
            <Field
              name={`prizes.${index}.prizeImage`}
              type="file" 
              className={`form-control ${
                submitErrors &&
                `${prizeError?.prizeImage ? "is-invalid" : "is-valid"}`
              }`}
            /> 
            <ErrorMessage
              name={`prizes.${index}.prizeImage`}
              component="span"
              className="invalid-feedback"
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            Prize Description <span className="txt-danger">*</span>
          </Label>
          <Field
            name={`prizes.${index}.prizeDescription`}
            as="textarea"
            maxLength="140"
            placeholder="Price Description"
            className={`form-control ${
              submitErrors &&
              `${prizeError?.prizeDescription ? "is-invalid" : "is-valid"}`
            }`}
          />
          <TextCounter length={currentValue?.prizeDescription?.length} totalLength={'140'}/>
          <ErrorMessage
            name={`prizes.${index}.prizeDescription`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Prize Value in USD $ <span className="txt-danger">*</span>
          </Label>
          <Field
            name={`prizes.${index}.prizeValueInUsd`}
            type="text"
            placeholder="Prize Value"
            className={`form-control ${
              submitErrors &&
              `${prizeError?.prizeValueInUsd ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name={`prizes.${index}.prizeValueInUsd`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            Number of Prizes <span className="txt-danger">*</span>
          </Label>
          <Field
            name={`prizes.${index}.numberOfPrize`}
            type="text"
            placeholder="Number of prizes"
            className={`form-control ${
              submitErrors &&
              `${prizeError?.numberOfPrize ? "is-invalid" : "is-valid"}`
            }`}
          />
          <ErrorMessage
            name={`prizes.${index}.numberOfPrize`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" className="mb-3">
          <Label check>
            The winners are selected based on{" "}
            <span className="txt-danger">*</span>
          </Label>
          <FormGroup check>
            <Field
              id="numberOfShares"
              name={`prizes.${index}.numberOfShares`}
              type="checkbox"
              className="form-check-input"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${
                  prizeError?.numberOfShares ? "text-danger" : "text-success"
                }`
              }`}
              for="numberOfShares"
              check
            >
              Number of shares
            </Label>
          </FormGroup>
          <FormGroup check>
            <Field
              id="numberOfLikes"
              name={`prizes.${index}.numberOfLikes`}
              type="checkbox"
              className="form-check-input"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${prizeError?.numberOfLikes ? "text-danger" : "text-success"}`
              }`}
              for="numberOfLikes"
              check
            >
              Number of likes
            </Label>
          </FormGroup>
          <FormGroup check>
            <Field
              id="numberOfVotes"
              name={`prizes.${index}.numberOfVotes`}
              type="checkbox"
              className="form-check-input"
            />
            <Label
              className={`mb-0 ${
                submitErrors &&
                ` ${prizeError?.numberOfVotes ? "text-danger" : "text-success"}`
              }`}
              for="numberOfVotes"
              check
            >
              Number of votes
            </Label>
          </FormGroup>
        </Col>
        <Col sm="4" className="mb-3">
          <Label check>
            If multiple users reach the exact numbers{" "}
            <span className="txt-danger">*</span>
          </Label>
          <Field
            name={`prizes.${index}.excatNumber`}
            as="select"
            className={`form-control ${
              submitErrors &&
              `${prizeError?.excatNumber ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option value={""}>select</option>
            <option value={"equal_among_winners"}>
              The same prize is divided among winners
            </option>
            <option value={"separate_prizes_for_each_winner"}>
              A separate equal prize for each winner (undivided)
            </option>
          </Field>
          <ErrorMessage
            name={`prizes.${index}.excatNumber`}
            component="span"
            className="invalid-feedback"
          />
        </Col>
      </Row>
    </>
  );
};

export default PriceContainer;
