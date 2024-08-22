import { useState } from 'react'
import { RenewSignupForm } from './RenewSignupForm'
import { Card, CardBody, Col, Collapse, Form, FormGroup, Input, InputGroup, Label, Row } from 'reactstrap'
import { Btn, H2, H4, H5 } from '../../AbstractElements'
import { AccountCountry, AdditionalServices, AgreeToTermsAndConditions, CurrentPlanSummery, NewBiilingDateText, NewBillingDate, PlanDetails,  PrivacyPolicy, RegistrationPlan, RegistrationPlanText, RegistrationType,  SelectAction, Submit, TermsAndConditions } from '../../utils/Constant'
import { ErrorMessage, Field, Formik } from 'formik'
import { RenewSignupValidationProp, renewSignupFormSchema, signupFormInitialValue } from '../../Data/RenewSignup/RenewSignupFormValidation'
import { Link } from 'react-router-dom'
import CardHeaderCollapse from '../../CommonElements/CardHeaderCommon/CardHeaderCollapse'
import ReactDatePicker from 'react-datepicker'
import DataTable from 'react-data-table-component'
import { iDownloadedColumns, iDownloadedData } from '../../Pages/App/AccountSettings/MyRegistrationPlan'

export const data ={
    plan:"Business",
    ndays:'500.00 USD $',
    tdays:'450.00 USD $/30 Days,',
    tdiscount:'(10% discount) If you pay 1350.00 USD $',
    etdays:'425.00 USD $/30 Days,',
    etdiscount:' (15% discount) If you pay 2550.00 USD $',
    anualdays:'400.00 USD $/30 Days,',
    anualdiscount:' (20% discount) If you pay 4800.00 USD $',
    followDiscount:'16%',
    manageStore:{
      active_branch:54,
      bulkBranchExcel:'check mark',
      publicContactInfo:'Red X'
    }
}


export const basicRadioDataList = [
    {
      id: "radioinline2",
      text: "Tasks",
    },
    {
      id: "radioinline3",
      text: " To-do",
    },
    {
      id: "radioinline4",
      text: "Forms",
    },
    {
      id: "radioinline5",
      text: "Login",
    },
  ];

const RenewSignupContainer = ({formValue , getUserData} : RenewSignupForm) => {    
    const [toggleDelete, setToggleDelete] = useState(false);
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const [isPlanSummaryOpen, setIsPlanSummaryOpen] = useState(true);
    const [selectedAction , setSelectedAction] = useState(1);
    const [startDate, setStartDate] = useState(new Date());
    const [isAdditionalServiceOpen, setIsAdditionalServiceOpen] = useState(true);
    const [isMyPlanOpen, setIsMyPlanOpen] = useState(true);
    const handleSignup = (values:RenewSignupValidationProp) =>{
        console.log(values);
        setSubmitError(false);
    }
    const maxDate = () => {
        const today = new Date();
        return new Date(today.setDate(today.getDate() + 405));
    };

    const handleRowSelected =() =>{
        setToggleDelete(false);
      }

    const ListofCountry: string[] = ["Singapore","India","Australia","United State","Emirates"];

    return (
        
        <Row className="d-flex justify-content-center px-3">
            <Col md="12" lg="12" sm="12">
            <Card key={`1`}>            
                <CardHeaderCollapse title={CurrentPlanSummery} isOpen={isPlanSummaryOpen} setIsOpen={setIsPlanSummaryOpen} />
                <Collapse isOpen={isPlanSummaryOpen}> 
                <CardBody>
                <Row>
                    <Col md="6" sm="4">
                    <Row>
                        <Col md="5">Account Created  : </Col> <Col md="5">1-July-2021</Col>
                        <Col md="5">Plan Name  : </Col> <Col md="5">Business</Col>
                        <Col md="5">Account Country  : </Col><Col md="5">India</Col>
                        <Col md="5">Pay Period  : </Col><Col md="5">1-July-2021</Col>
                        <Col md="5">Days Left  : </Col><Col md="5">21</Col>
                    </Row>
                    </Col>
                    <Col md="6" sm="4">
                    <Row>
                    <Col md="6">Plan Type  : </Col> <Col md="5">Personal</Col>
                    <Col md="6">Branch Countries  : </Col> <Col md="5">India</Col>
                    <Col md="6">Expire Date  : </Col> <Col md="5">1-July-2021</Col>
                    <Col md="6">Status : </Col> <Col md="5">Personal</Col>
                    
                    </Row>
                    </Col>
                </Row>
                </CardBody>
                </Collapse>
            </Card>
            </Col>
            <Col md="12" lg="12" sm="12">
            <div className="theme-form px-3">
                <H2 className="pb-4">{SelectAction}</H2>
                
                <Formik initialValues={signupFormInitialValue} onSubmit={handleSignup} validationSchema={renewSignupFormSchema} > 
                {({errors}) =>(
                    <Form >
                        <Row>
                            <Col md="12" className='pb-2'>
                            <div className="card-wrapper border rounded-3 checkbox-checked pb-2">
                                
                                <div className="form-check-size">
                                <div className="form-check form-check-inline radio radio-primary">
                                    <Input id="radioinline1" type="radio" name="radio5" defaultChecked onChange={()=>setSelectedAction(1)}/>
                                    <Label className="mb-0" for='radioinline1' check>
                                    {`Extend the Existing Plan`}
                                    </Label>
                                </div>
                                <div className="form-check form-check-inline radio radio-primary">
                                    <Input id="radioinline2" type="radio" name="radio5"  onChange={()=>setSelectedAction(2)}/>
                                    <Label className="mb-0" for='radioinline2' check>
                                    {`Change Plan`}
                                    </Label>
                                </div>
                                <div className="form-check form-check-inline radio radio-primary">
                                    <Input id="radioinline3" type="radio" name="radio5"  onChange={()=>setSelectedAction(3)}/>
                                    <Label className="mb-0" for='radioinline3' check>
                                    {`Unify Billing Date`}
                                    </Label>
                                </div>
                                
                                </div>
                            </div>
                            </Col>
                            {selectedAction === 1 ? (
                            <>
                            <Col lg="12" className='mx-1'>
                                <Row >
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary  mt-2">
                                            <Input id="radioinline4" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline4' check>
                                            {`30 Days`}
                                            </Label>                                                    
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $500`}</H4>
                                    </Col>
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary  mt-2">
                                            <Input id="radioinline5" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline5' check>
                                            {`90 Days`}
                                            </Label>
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $450/30 Days`}</H4>
                                        <H5>{`If you pay $1350`}</H5>
                                    </Col>
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary mt-2">
                                            <Input id="radioinline6" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline6' check>
                                            {`180 Days`}
                                            </Label>
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $425/30 Days`}</H4>
                                        <H5>{`If you pay $2250`}</H5>
                                    </Col>
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary mt-2">
                                            <Input id="radioinline7" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline7' check>
                                            {`Anually`}
                                            </Label>
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $400/30 Days`}</H4>
                                        <H5>{`If you pay $4800`}</H5>
                                    </Col>
                                </Row>
                            </Col>
                            
                            <Col xs="12 pt-4">
                                <Btn color="primary" onClick={()=>setSubmitError(true)}>{Submit}</Btn>
                            </Col>
                            </>
                            ) : ("")}

                            {selectedAction === 2 ? (
                            <>
                            <Col xs="12" lg="6">
                                <FormGroup className="position-relative">
                                <Label>{AccountCountry}<span className="font-danger">*</span></Label>
                                <Field
                                    as="select"
                                    name="country"
                                    className={`form-control ${submitErrors && `${errors.country ? "is-invalid" : "is-valid"}` }`}
                                    >
                                    <option>{'Select'} {AccountCountry}</option>
                                    <option>{'Germany'}</option>
                                    <option>{'Canada'}</option>
                                    <option>{'Usa'}</option>
                                    <option>{'Aus'}</option>
                                    {ListofCountry.map((data, index) => (<option key={index} value={data}>{data}</option>))}
                                    </Field>
                                    <ErrorMessage
                                        name="country"
                                        component="span"
                                        className="invalid-feedback"
                                        />
                                </FormGroup>
                            </Col>
                            <Col xs="12" lg="6">
                                <FormGroup className="position-relative">
                                <Label>{RegistrationType}<span className="font-danger">*</span></Label>
                                <Field
                                    as="select"
                                    name="subscription_type"
                                    className={`form-control ${submitErrors && `${errors.subscription_type ? "is-invalid" : "is-valid"}` }`}
                                    >
                                    <option>{'Select'} {RegistrationType}</option>                            
                                    {ListofCountry.map((data, index) => (<option key={index} value={data}>{data}</option>))}
                                    </Field>
                                    <ErrorMessage
                                        name="subscription_type"
                                        component="span"
                                        className="invalid-feedback"
                                        />
                                </FormGroup>
                            </Col>
                            <Col xs="12">
                                <Link to={`${process.env.PUBLIC_URL}/all-registration-plans`} >{RegistrationPlanText}</Link>
                                <FormGroup className="position-relative">
                                <Label>{RegistrationPlan}<span className="font-danger">*</span></Label>                          
                                <Field
                                    as="select"
                                    name="subscription_plan"
                                    className={`form-control ${submitErrors && `${errors.subscription_plan ? "is-invalid" : "is-valid"}` }`}
                                    >
                                    <option>{'Select'} {RegistrationPlan}</option>                            
                                    {ListofCountry.map((data, index) => (<option key={index} value={data}>{data}</option>))}
                                    </Field>
                                    <ErrorMessage
                                        name="subscription_plan"
                                        component="span"
                                        className="invalid-feedback"
                                        />
                                </FormGroup>
                            </Col>

                            <Col xs="12" className='mx-2'>
                                <Row >
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary  mt-2">
                                            <Input id="radioinline4" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline4' check>
                                            {`30 Days`}
                                            </Label>                                                    
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $500`}</H4>
                                    </Col>
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary  mt-2">
                                            <Input id="radioinline5" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline5' check>
                                            {`90 Days`}
                                            </Label>
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $450/30 Days`}</H4>
                                        <H5>{`If you pay $1350`}</H5>
                                    </Col>
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary mt-2">
                                            <Input id="radioinline6" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline6' check>
                                            {`180 Days`}
                                            </Label>
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $425/30 Days`}</H4>
                                        <H5>{`If you pay $2250`}</H5>
                                    </Col>
                                    <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                                        <div className="form-check form-check-inline radio radio-primary mt-2">
                                            <Input id="radioinline7" type="radio" name="radio6" defaultChecked />
                                            <Label className="mb-0" for='radioinline7' check>
                                            {`Anually`}
                                            </Label>
                                        </div>
                                        <H4 className='pt-4 text-center  mb-4'>{`USD $400/30 Days`}</H4>
                                        <H5>{`If you pay $4800`}</H5>
                                    </Col>
                                </Row>
                            </Col>

                            
                            <Col xs="12">
                                <Card key={`3`}>
                                    <CardHeaderCollapse title={PlanDetails} isOpen={isMyPlanOpen} setIsOpen={setIsMyPlanOpen}/>
                                    <Collapse isOpen={isMyPlanOpen}> 
                                    <CardBody >
                                    <Row className='ps-1'>
                                        <Col  md="12" sm="12" className='pt-1 justify-content-center'>
                                        <Row className='border ps-1 border-bottom-0'>                     
                                            <Col md="6" className='border-bottom p-2 fw-bold col-6'>Plan</Col>
                                            <Col md="6" className='border-bottom p-2 fw-bold col-6'>{data.plan}</Col>
                                            <Col md="6" className='p-2 col-6'>30 Days</Col>
                                            <Col md="6" className='p-2 col-6 plan-text-height' >{data.ndays}</Col>
                                            <Col md="6" className='col-6'>90 Days</Col>
                                            <Col md="6" className='col-6 plan-text-height'>{data.tdays}<br/>{data.tdiscount}</Col>
                                            <Col md="6" className='col-6'>180 Days</Col>
                                            <Col md="6" className='col-6 plan-text-height'>{data.etdays}<br/>{data.etdiscount}</Col>
                                            <Col md="6" className='col-6'>Annually</Col>
                                            <Col md="6" className='col-6 plan-text-height'>{data.anualdays}<br/>{data.anualdiscount}</Col>                        
                                        </Row>
                                        <Row className='border ps-1 border-top-0 border-bottom-0'>
                                            <Col md="12" className='fw-bold border-top border-bottom'>Follower Discount</Col>
                                        </Row>
                                        <Row className='border ps-1 border-top-0 border-bottom-0'>
                                            <Col md="6" className='col-8'>Instant Discount for any purchase from selected verified vendors you follow</Col>
                                            <Col md="6" className='col-4'>{data.followDiscount}</Col>
                                        </Row>
                                        <Row className='border ps-1 border-top-0 border-bottom-0'>
                                            <Col md="12" className='fw-bold border-top border-bottom'>Manage Store</Col>
                                        </Row>
                                        <Row className='border ps-1 border-top-0 border-bottom-0'>
                                            <Col md="6" className='col-8'>FREE active branches (monthly)</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.active_branch}</Col>
                                            <Col md="6" className='col-8'>Bulk Import branches with an excel file</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.bulkBranchExcel}</Col>
                                            <Col md="6" className='col-8'>Public Contact Info</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                            <Col md="6" className='col-8'>FREE Insertion and Listing of Products or Services (Monthly)</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                            <Col md="6" className='col-8'>(ZERO Commission Sales) Number of sales without commission  (monthly)</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                            <Col md="6" className='col-8'>Maximum Total Sale Amount without commission  (monthly)</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                            <Col md="6" className='col-8'>Bulk Import products or services with an excel file</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                            <Col md="6" className='col-8'>FREE active addons (monthly)</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                            <Col md="6" className='col-8'>Bulk Import add-on with an excel file</Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                            <Col md="6" className='col-8'>FREE Coupons Monthly Number of </Col>
                                            <Col md="6" className='col-4'>{data.manageStore.publicContactInfo}</Col>
                                        </Row>
                                        <Row className='border ps-1 border-top-0 border-bottom-0'>
                                            <Col md="12" className='fw-bold border-top border-bottom'>Brand Support Tools</Col>
                                        </Row>
                                        <Row className='border ps-1 border-top-0 border-bottom-0'>
                                            <Col md="6" className='col-8'>Number of FREE Activities you can add to  Attendance System  (monthly)</Col>
                                            <Col md="6" className='col-4'>{54}</Col>
                                            <Col md="6" className='col-8'>Maximum number of FREE Supervisors per Activity</Col>
                                            <Col md="6" className='col-4'>{654}</Col>
                                            <Col md="6" className='col-8'>Number of FREE Questions in your Surveys, Quizzes and Tests  (monthly)</Col>
                                            <Col md="6" className='col-4'>{`-`}</Col>
                                            <Col md="6" className='col-8'>Import Bulk Questions Number of FREE Photo Contests (monthly)</Col>
                                            <Col md="6" className='col-4'>{54}</Col>
                                            <Col md="6" className='col-8'>Number of customers’ wishes you can navigate for FREE</Col>
                                            <Col md="6" className='col-4'>{546}</Col>
                                            <Col md="6" className='col-8'>Number of FREE Public Posts  (monthly)</Col>
                                            <Col md="6" className='col-4'>{654}</Col>
                                            <Col md="6" className='col-8'>Number of FREE Keyword and Statistics Searches (monthly)</Col>
                                            <Col md="6" className='col-4'>{54}</Col>
                                        </Row>
                                        <Row className='border ps-1 border-top-0 border-bottom-0'>
                                            <Col md="12" className='fw-bold border-top border-bottom'>Recruiting and Human Resources</Col>
                                        </Row>
                                        <Row className='border ps-1 border-top-0 '>
                                            <Col md="6" className='col-8'>Number of Your Active Resumes (monthly)</Col>
                                            <Col md="6" className='col-4'>{465}</Col>
                                            <Col md="6" className='col-8'>Number of Resumes you can Navigate for FREE (monthly)</Col>
                                            <Col md="6" className='col-4'>{654}</Col>
                                        </Row>
                                        </Col>
                                    </Row>
                                    </CardBody>
                                    </Collapse>
                                </Card>

                            </Col>
                            <Col xs="12">
                                <FormGroup check>
                                <Input id="invalid-check-wizard" type="checkbox" />
                                <Label for="invalid-check-wizard" check className={`mb-0 d-block ${submitErrors && ` ${errors.terms_condition ? "text-danger" : "text-success"}`}`}>{AgreeToTermsAndConditions}
                                    <Link to='' className="px-1">{TermsAndConditions},</Link>
                                    <Link  to='' className="px-1">{PrivacyPolicy}.</Link>
                                </Label>
                                </FormGroup>
                            </Col>
                            <Col xs="12 pt-4">
                                <Btn color="primary" onClick={()=>setSubmitError(true)}>{Submit}</Btn>
                            </Col>
                            </>
                            ) : ("")}

                            {selectedAction === 3 ? (
                            <>
                            <Col xxl="12" className="box-col-12">
                            <Card key={`2`}>
                                <CardHeaderCollapse title={AdditionalServices} isOpen={isAdditionalServiceOpen} setIsOpen={setIsAdditionalServiceOpen}/>
                                <Collapse isOpen={isAdditionalServiceOpen}>
                                <CardBody>
                                <DataTable className='custom-scrollbar' columns={iDownloadedColumns} data={iDownloadedData} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                                </CardBody>
                                </Collapse>
                            </Card>
                            </Col>
                            <Label>{NewBillingDate}</Label>
                            <small>{NewBiilingDateText}</small>
                            <Col xxl="9" className="box-col-12">
                                <InputGroup className="flatpicker-calender">
                                    <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={(date: Date) => setStartDate(date)} minDate={new Date()} maxDate={maxDate()} placeholderText="Select a date in February 2020" />
                                </InputGroup>
                            </Col>
                            
                            <Col xs="12 pt-4">
                                <Btn color="primary" onClick={()=>setSubmitError(true)}>{Submit}</Btn>
                            </Col>
                            </>
                            ) : ("")}
                        </Row>
                    </Form>
                )}
                </Formik>
                </div>                
            </Col>
        </Row>
    )
}

export default RenewSignupContainer