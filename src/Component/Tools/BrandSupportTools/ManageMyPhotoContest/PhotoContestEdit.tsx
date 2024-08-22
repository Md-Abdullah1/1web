import { ErrorMessage, Field, FieldArray, Formik } from 'formik'
import {
    PhotoContestsFormValidationProp,
    photoContestsFormInitialValue,
    photoContestsFormValidationSchema,
    prizesValue,
  } from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
import { Col, Container, Form, FormGroup, Label, Row } from 'reactstrap';
import { Btn } from '../../../../AbstractElements';
import {useState} from 'react';
import Country from '../../../CommonInput/Country';
import PriceContainer from './PriceContainer';

const PhotoContestEdit = () => {
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const [priceFormCount, setPriceFormCount] = useState(["1"]);
    const handleSubmit = () =>{}

    const addFormHandler = (arrayHelpers: any) => {
        const value = priceFormCount.length + 1;
        setPriceFormCount((oldArray) => [...oldArray, value.toString()]);
        arrayHelpers.push(prizesValue);
    };

    const removeFormHandler = (
        value: string,
        arrayHelpers: any,
        index: number
    ) => {
        const updatedFormCount = priceFormCount.filter((item) => item !== value);
        setPriceFormCount(updatedFormCount);
        arrayHelpers.remove(index);
    };


    return (
        <div className='px-4 py-2'>
            <Formik
            initialValues={photoContestsFormInitialValue}
            onSubmit={handleSubmit}
            validationSchema={photoContestsFormValidationSchema}
            >
              {({ errors }) => (
                <Form className="form-wizard">
                    <Row style={{ textAlign: "right" }}>
                        <Col sm="12" className="mb-3">
                            <Btn
                            color="primary"
                            className="me-3"
                            type="submit"
                            onClick={() => setSubmitError(true)}
                            >
                            Save
                            </Btn>
                            <span className="btn btn-light btn-air-light">Undo Changes</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="mb-3">
                        <Label check>
                            Photo Contest Title <span className="txt-danger">*</span>
                        </Label>
                        <Field
                            name="photoContestTitle"
                            type="text"
                            placeholder="Photo Contest Title"
                            className={`form-control ${
                            submitErrors &&
                            `${errors.photoContestTitle ? "is-invalid" : "is-valid"}`
                            }`}
                        />
                        <ErrorMessage
                            name="photoContestTitle"
                            component="span"
                            className="invalid-feedback"
                        />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Description <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="description"
                                as="textarea"
                                maxLength="140"
                                placeholder="Description"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.description ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="description"
                                component="span"
                                className="invalid-feedback"
                            />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Image <span className="txt-danger">*</span>
                            </Label>
                            <FormGroup>
                                <Field
                                name="image"
                                type="file"
                                className={`form-control ${
                                    submitErrors && `${errors.image ? "is-invalid" : "is-valid"}`
                                }`}
                                />
                                <ErrorMessage
                                name="image"
                                component="span"
                                className="invalid-feedback"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="mb-3">
                            <Label check>Keywords</Label>
                            <Field
                                name="keywords"
                                type="text"
                                placeholder="Keywords"
                                className="form-control"
                            />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Submission Start Date <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="submissionStartDate"
                                type="date"
                                placeholder="Start Date"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.submissionStartDate ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="submissionStartDate"
                                component="span"
                                className="invalid-feedback"
                            />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Submission End Date <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="submissionEndDate"
                                type="date"
                                placeholder="Start Date"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.submissionEndDate ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="submissionEndDate"
                                component="span"
                                className="invalid-feedback"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Photo Contest End Date <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="photoContestEndDate"
                                type="date"
                                placeholder="Start Date"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.photoContestEndDate ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="photoContestEndDate"
                                component="span"
                                className="invalid-feedback"
                            />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Minimum Number of Files <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="minNumberOfFiles"
                                type="text"
                                placeholder="Enter Minimum Files"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.minNumberOfFiles ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="minNumberOfFiles"
                                component="span"
                                className="invalid-feedback"
                            />
                            <small className="d-block">* Must be a number between 5 to 10</small>
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Maximum Number of Files <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="maxNumberOfFiles"
                                type="text"
                                placeholder="Enter Maximum Files"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.maxNumberOfFiles ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="maxNumberOfFiles"
                                component="span"
                                className="invalid-feedback"
                            />
                            <small className="d-block">* Must be a number between 5 to 10</small>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="mb-3">
                        <Label check>
                            Media Type <span className="txt-danger">*</span>
                        </Label>
                        <Field
                            as="select"
                            name="mediaType"
                            className={`form-control ${
                            submitErrors && `${errors.mediaType ? "is-invalid" : "is-valid"}`
                            }`}
                        >
                            <option value={""}>Select photos</option>
                            <option value={"Photos"}>Photos</option>
                        </Field>
                        <ErrorMessage
                            name="mediaType"
                            component="span"
                            className="invalid-feedback"
                        />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>Country</Label>
                            <Country name='country' isMulti={true} placeholder="Select country"/>
                            </Col>
                            <Col sm="4" className="mb-3">
                            <Label check>
                                Minimum Shares per Content (to be qualified for the photo contest)
                                <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="minSharesPerContent"
                                type="text"
                                placeholder="Enter Minimum Shares"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.minSharesPerContent ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="minSharesPerContent"
                                component="span"
                                className="invalid-feedback"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="mb-3">
                        <Label check>
                            Minimum Likes per Content (to be qualified for the photo contest){" "}
                            <span className="txt-danger">*</span>
                        </Label>
                        <Field
                            name="minLikesPerContent"
                            type="text"
                            placeholder="Enter Minimum Likes"
                            className={`form-control ${
                            submitErrors &&
                            `${errors.minLikesPerContent ? "is-invalid" : "is-valid"}`
                            }`}
                        />
                        <ErrorMessage
                            name="minLikesPerContent"
                            component="span"
                            className="invalid-feedback"
                        />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                Minimum Votes per Content (to be qualified for the photo contest)
                                <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="minVotesPerContent"
                                type="text"
                                placeholder="Enter Minimum Votes"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.minVotesPerContent ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="minVotesPerContent"
                                component="span"
                                className="invalid-feedback"
                            />
                        </Col>
                        <Col sm="4" className="mb-3">
                            <Label check>
                                A competitor must be a follower in my Media Center
                                <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                as="select"
                                name="mediaCenter"
                                className={`form-control ${
                                submitErrors &&
                                `${errors.mediaCenter ? "is-invalid" : "is-valid"}`
                                }`}
                            >
                                <option value={""}>Select</option>
                                <option value={"Any User"}>Any User</option>
                                <option value={"Only Followers"}>Only Followers</option>
                            </Field>
                            <ErrorMessage
                                name="mediaCenter"
                                component="span"
                                className="invalid-feedback"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="4" className="mb-3">
                        <Label check>
                            A competitor must be a previous customer on my/our online store?
                            <span className="txt-danger">*</span>
                        </Label>
                        <Field
                            as="select"
                            name="onlineStore"
                            className={`form-control ${
                            submitErrors &&
                            `${errors.onlineStore ? "is-invalid" : "is-valid"}`
                            }`}
                        >
                            <option value={""}>select</option>
                            <option value={"Any User"}>Any User</option>
                            <option value={"30_days"}>In the past 30 days</option>
                            <option value={"90_days"}>In the past 90 days</option>
                        </Field>
                        <ErrorMessage
                            name="onlineStore"
                            component="span"
                            className="invalid-feedback"
                        />
                        </Col>
                    </Row>
                    <FieldArray
                        name="prizes"
                        render={(arrayHelpers) => {
                        return (
                            <>
                            {priceFormCount.map((item, index) => (
                                <Container
                                className="p-5 mb-4"
                                id={`prize-container-${item}`}
                                key={index}
                                style={{ border: "1px solid #ccc" }}
                                >
                                <Row>
                                    <Col md={10} className="mb-3">
                                    <h4>Prize : {item}</h4>
                                    </Col>
                                    {priceFormCount.length.toString() === item.toString() && (
                                    <Col md={2} className="mb-3">
                                        <span
                                        className="btn btn-outline-danger"
                                        onClick={() =>
                                            removeFormHandler(item, arrayHelpers, index)
                                        }
                                        >
                                        <i className="icofont icofont-ui-delete"></i>
                                        </span>
                                    </Col>
                                    )}
                                </Row>
                                <PriceContainer
                                    errors={errors}
                                    submitErrors={submitErrors}
                                    index={index}
                                />
                                </Container>
                            ))}
                            <span
                                onClick={() => addFormHandler(arrayHelpers)}
                                className="btn btn-outline-dark mb-3"
                            >
                                Add
                            </span>
                            </>
                        );
                        }}
                    />
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
                        <Col sm="auto" className="mb-3">
                        <span className="btn btn-primary">Save and Add a Schedule</span>
                        </Col>
                    </Row>
                </Form>
              )} 
            </Formik>
        </div>
    )
}

export default PhotoContestEdit