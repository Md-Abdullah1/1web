import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import {  DefaultPublicResume, Education, HobbiesAndInterest, Href, JobCancelButton, JobDesiredHeading, JobSubmitButton, JobUIDesigner, JobUploadYourFiles, Languages, Objective, ResumeName, ResumeType, SaveThisJob, Skill, SkillNExperience, Subcategories, Training, UploadCoverLetterJob, UploadRecommendationsJob, WorkExperience } from  '../../../../utils/Constant'
import CommonSwitchSpan from '../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan'
import { ErrorMessage, Field } from 'formik';
import { Btn, H3, Image, P } from '../../../../AbstractElements';
import { dynamicImage } from '../../../../Service';
import { Link } from 'react-router-dom';

const GeneralInformation = (props: any) => {
  const { errors, submitErrors, setSubmitError } = props;

  return (

    <Form className="theme-form">
      <div className="d-flex pb-2">
        <Image className="img-40 b-r-0 img-fluid  m-r-20" src={dynamicImage(`job-search/1.jpg`)} alt="job-search"/>
        <div className="flex-grow-1">
          <H3 className="f-w-600">
            <Link to={Href}>{JobUIDesigner}</Link>
            <span className="pull-right">
              <Btn color="primary" onClick={() => setSubmitError(true)}>
                <span><i className="fa fa-check text-white" /></span> {SaveThisJob}
              </Btn>
            </span>
          </H3>
          {/* <P>Save this job 
            <Rating className="ms-1" fillColor={"#FFAE1A"} initialValue={Math.random()*5} size={15} />
          </P> */}
        </div>
      </div>
      <Row>
        <Col xl="4" md="4">          
            <Label check>{ResumeName}:<span className="font-danger">*</span></Label>
            <Field type="text" placeholder={ResumeName}  name="resumeName" className={`form-control ${submitErrors && `${errors.resumeName ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
            <ErrorMessage
              name="resumeName"
              component="span"
              className="invalid-feedback"
            />          
        </Col>
        <Col xl="4" md="4">
          <FormGroup>
            <Label check>{DefaultPublicResume}:<span className="font-danger">*</span></Label>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0  text-end icon-state switch-outline">
                    <CommonSwitchSpan color={`primary`} />
                </div>
                {/* <Label className="m-l-10" check>{`Two-Step Authentication`}</Label> */}
            </div>
          </FormGroup>
        </Col>
        <Col xl="4" md="4">
          <FormGroup>
            <Label check>{ResumeType}:<span className="font-danger">*</span></Label>
            <div className="d-flex align-items-center">
                <div className="flex-shrink-0  text-end icon-state switch-outline">
                    <CommonSwitchSpan color={`primary`} />
                </div>
                {/* <Label className="m-l-10" check>{`Two-Step Authentication`}</Label> */}
            </div>
          </FormGroup>
        </Col>
        <Col xl="4" md="4">
          
            <Label check>{JobDesiredHeading}:<span className="font-danger">*</span></Label>
            <Field type="text" placeholder={JobDesiredHeading}  name="jobTitle" className={`form-control ${submitErrors && `${errors.jobTitle ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
            <ErrorMessage
              name="jobTitle"
              component="span"
              className="invalid-feedback"
            />  
          
        </Col>
        <Col xl="4" md="4">          
            <Label check>{Objective}:</Label>
            <Field type="text" placeholder={Objective}  name="objective" className={`form-control ${submitErrors && `${errors.objective ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
            <ErrorMessage
              name="objective"
              component="span"
              className="invalid-feedback"
            />  
        </Col>
        <Col xl="4" md="4" className='m-1'>
            <Label>{Subcategories}<span className="font-danger">*</span></Label>
            <Field
              as="select"
              name="subCategory"
              className={`form-control ${
                submitErrors &&
                `${errors.subCategory ? "is-invalid" : "is-valid"}`
              }`}
            >
            <option>{'Select'} {Subcategories}</option>
            <option>{'Germany'}</option>
            <option>{'Canada'}</option>
            <option>{'Usa'}</option>
            <option>{'Aus'}</option>
            </Field>
            <ErrorMessage
              name="subCategory"
              component="span"
              className="invalid-feedback"
            />  
        </Col>
        <Col md="12" className='mt-3 mb-4'><H3 className='mb-0'>{SkillNExperience}</H3></Col>
        <Col xl="4" md="4" >
          <Label>{Languages}</Label>
            <Field
            as="select"
            name="languages"
            className={`form-control ${
              submitErrors &&
              `${errors.languages ? "is-invalid" : "is-valid"}`
            }`}
          >
            <option>{'Select'} {Languages}</option>
            <option>{'Germany'}</option>
            <option>{'Canada'}</option>
            <option>{'Usa'}</option>
            <option>{'Aus'}</option>
            </Field>
            <ErrorMessage
              name="languages"
              component="span"
              className="invalid-feedback"
            />  
          </Col>

          
          <Col xl="4">
              <Label check>{WorkExperience}:<span className="font-danger">*</span></Label>
              <Field type="text" placeholder={WorkExperience}  name="workExperience" className={`form-control ${submitErrors && `${errors.workExperience ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
              <ErrorMessage
                name="workExperience"
                component="span"
                className="invalid-feedback"
              />  
          </Col>
          <Col xl="4">
              <Label check>{Education}:</Label>
              <Field type="text" placeholder={Education}  name="education" className={`form-control ${submitErrors && `${errors.education ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
              <ErrorMessage
                name="education"
                component="span"
                className="invalid-feedback"
              />
          </Col>
          <Col xl="4">
              <Label check>{Training}:</Label>
              <Field type="text" placeholder={Training}  name="traning" className={`form-control ${submitErrors && `${errors.training ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
              <ErrorMessage
                name="traning"
                component="span"
                className="invalid-feedback"
              /> 
          </Col>
          <Col xl="4">
              <Label check>{Skill}:</Label>
              <Field type="text" placeholder={Skill}  name="skill" className={`form-control ${submitErrors && `${errors.skill ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
              <ErrorMessage
                name="skill"
                component="span"
                className="invalid-feedback"
              /> 
          </Col>
          <Col xl="4">
              <Label check>{HobbiesAndInterest}:</Label>
              <Field type="text" placeholder={HobbiesAndInterest}  name="hobbiesInterest" className={`form-control ${submitErrors && `${errors.hobbiesInterest ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
              <ErrorMessage
                name="hobbiesInterest"
                component="span"
                className="invalid-feedback"
              /> 
          </Col>
          <Col md="12" className='mt-3 mb-4'><H3 className='mb-0'>{JobUploadYourFiles}</H3></Col>
          <Col xl="4">
            <Label className="col-form-label pt-0" check>{UploadCoverLetterJob}:</Label>
            <Input type="file" />
            <ErrorMessage
                name="hobbiesInterest"
                component="span"
                className="invalid-feedback"
              /> 
          </Col>
          <Col xl="4">
            <Label className="col-form-label pt-0" check>{UploadRecommendationsJob}:</Label>
            <Input type="file" />
            <ErrorMessage
                name="hobbiesInterest"
                component="span"
                className="invalid-feedback"
              /> 
          </Col>
    </Row>

    <Row className='mt-4'>
      <Col>
        <Btn color="primary mx-1" onClick={() => setSubmitError(true)}>{JobSubmitButton}</Btn>
        <Btn color="light">{JobCancelButton}</Btn>
      </Col>
    </Row>
    
    </Form>
  )
}

export default GeneralInformation