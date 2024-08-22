import { ErrorMessage, Field, Formik } from 'formik'
import {
    ManageExternalLinkFormValidationProp,
    manageExternalLinkFormInitialValue,
    manageExternalLinkFormValidationSchema,
  } from "../../../../Data/Tools/BrandSupportTools/FormControlsValidation";
import { Col, Form, Label, Row } from 'reactstrap';
import {useState} from 'react';
import TextCounter from '../../../CommonInput/TextCounter';
import TagsInput from '../../../CommonInput/TagsInput';
import { Btn } from '../../../../AbstractElements';

const ExternalLinkEdit = () => {
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const handleSubmit =() =>{

    }
    return (
        <div className='px-4 py-2'>
            <Formik
            initialValues={manageExternalLinkFormInitialValue}
            onSubmit={handleSubmit}
            validationSchema={manageExternalLinkFormValidationSchema}
            >
            {({ errors, values, setFieldValue }) => (
                <Form className="form-wizard">
                    <Row className="mb-3">
                        <Col sm="6">
                            <Label check>
                                Title of your links <span className="txt-danger">*</span>
                            </Label>
                            <Field
                                name="title"
                                type="text"
                                placeholder="Enter title of your links"
                                className={`form-control ${
                                submitErrors && `${errors.title ? "is-invalid" : "is-valid"}`
                                }`}
                            />
                            <ErrorMessage
                                name="title"
                                component="span"
                                className="invalid-feedback"
                                />
                        </Col>
                        <Col sm="5">
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
                    </Row>
                    <Row className="mb-3">
                        <Col sm="6">
                            <Label check>Keywords (optional)</Label>  
                            <TagsInput name="keywords" placeholder="Add keywords" setFieldValue={setFieldValue} />
                        </Col>
                        <Col sm="5">
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
                    <Row className='justify-content-center'>
                        <Col sm="auto" className="mb-3">
                        <Btn color="primary" type="submit" onClick={() => setSubmitError(true)}>Update Links</Btn>
                        </Col>
                    </Row>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default ExternalLinkEdit