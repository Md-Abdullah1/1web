import { useEffect, useState,ChangeEvent } from "react";
import { FormGroup, Input, Label, Col, Row, Form, Card, Collapse, CardBody } from 'reactstrap'
import { Email, UserName, Username,  Password, SignUpToAccount,Login, ConnectNewRegisterAccount, ConfirmPassword ,RegistrationPlanText, AccountCountry, RegistrationPlan, RegistrationType ,AlreadhaveAccount,  AgreeToTermsAndConditions, TermsAndConditions, PrivacyPolicy, PlanDetails, BirthDate, GuardianName, GuardianEmail} from '../../utils/Constant';
import { H2, Btn, H4, H5 } from '../../AbstractElements'
import {SignupForm} from './SignupForm';
import { Link } from 'react-router-dom'
import { FaEyeSlash , FaEye  } from "react-icons/fa";
import { ErrorMessage, Field, Formik } from "formik";
import { SignupValidationProp, signupFormInitialValue, signupFormSchema } from "../../Data/Signup/SignupFormValidation";
import CardHeaderCollapse from "../../CommonElements/CardHeaderCommon/CardHeaderCollapse";
import Country from "../CommonInput/Country";
import RegistrationTypes from "../CommonInput/RegistrationTypes";
import { useGetPlansQuery, usePlansMutation } from "../../ReduxToolkit/RegistrationReducer/RegistrationApiSlice";

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


const SignupAccount = ({formValue , getUserData} : SignupForm) => {
  const [isPlanApiCall, setPlanApicall] = useState(false);
  const [planId , setPlanId] = useState(0);
  const [Plans , setPlans] = useState();
  const [planStaticData, setPlanStaticData] = useState();
  const [planDynamicData, setPlanDynamicData] = useState();
  const [submitErrors, setSubmitError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isMyPlanOpen, setIsMyPlanOpen] = useState(false);
  const [isUnderAge, setIsUnderAge] = useState(false);
  const { password, confirm_password,  } = formValue;
  const [registrationTypes , setRegistrationTypes] = useState([]);
  const [registrationPlans , setRegistrationPlans] = useState([]);
  // const Plans = useGetPlansQuery(0);
  const [plans, {}] = usePlansMutation();
  
  const handleSignup = (values:SignupValidationProp) =>{
    console.log(values);
    setSubmitError(false);
  }
  
  const changeRegistrationType = (type:string) =>{
    setIsUnderAge(type === "Under Age" ? true : false);
  }

  useEffect(() =>{
    //fetch registration types
    fetchRegistrationTypes();
    //fetch registration plan
    fetchRegistrationPlans();
    if(!isPlanApiCall){
      setPlanApicall(true);
      updatePlans()
    }
  })

  const fetchRegistrationTypes = async () =>{
    try{
      // const response = [];
      // if(response){
      //   setRegistrationTypes(response.data);
      // }
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }

  const fetchRegistrationPlans = async () => {
    try{
      // const response = [];
      // setRegistrationPlans(response.data);
    }catch(error){
      console.error('Error fetching data:', error);
    }
  }

  const changePlan = (event :ChangeEvent<HTMLInputElement>) =>{
    console.log("plan id==>"+event.target.value)
    setPlanId(event.target.value)
    updatePlans();
  }

  const updatePlans = (plan_id:any) =>{
    plans(0).then(resp =>{
      console.log(resp);
      setPlans(resp.data?.data)
      if(resp.data?.data?.dynamic?.length > 0){
        if(plan_id && plan_id.length>0){
          let current_plan = resp.data.data.dynamic.filter((p_item)=>{
            return p_item.plan_id === plan_id;
          })
          setPlanDynamicData(current_plan[0])
        }else{
          setPlanDynamicData(resp.data.data.dynamic[0]);
        }
      }
      if(resp.data?.data?.static){
        setPlanStaticData(resp.data.data.static);
      }
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    // <div className="content">
      <div className="login-card login-dark">
        <div className="wizard-title mb-4 text-center">
          
          {/* <H5 className="text-muted mb-4">{EmailPassWord}</H5> */}
        </div>
        <div className=" mx-auto " >
          <Row className="d-flex justify-content-center">
            <Col md="7" lg="7" sm="12">
              <div className="theme-form">
              <H2 className="pb-4">{SignUpToAccount}</H2>
                   
                <Formik initialValues={signupFormInitialValue} onSubmit={(values) =>handleSignup(values)} validationSchema={signupFormSchema} >       
                {({errors}) =>(
                    <Form >
                      <Row>
                      <Col xs="12" lg="6">
                        {/* <FormGroup className="position-relative"> */}
                          <Label>{Username}<span className="font-danger">*</span></Label>
                          <Field type="text" name="username" className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`} placeholder={UserName} autoFocus={true}/>
                          <ErrorMessage
                                name="username"
                                component="span"
                                className="invalid-feedback"
                                />
                          {/* <Input value={userName} name="userName" onChange={getUserData} id="name" type="text" placeholder={`${UserName}`} /> */}
                        {/* </FormGroup> */}
                      </Col>
                      <Col xs="12" lg="6"  className="py-1">
                          <Label >{Email}<span className="font-danger">*</span></Label>
                          <Field type="email" name="email" className={`form-control ${submitErrors && `${errors.email ? "is-invalid" : "is-valid"}`}`} placeholder={Email} />
                          <ErrorMessage
                                name="email"
                                component="span"
                                className="invalid-feedback"
                                />
                      </Col>
                      <Col xs="12" lg="12" className="py-1">
                        {/* <FormGroup className="position-relative"> */}
                          <Label>{Password}<span className="font-danger">*</span></Label>
                          <Field type={showPassword ? "text" : "password"} value={password} name="password" onChange={getUserData}  placeholder={`${Password}`} className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`}/>
                          <div className="show-hide" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaEye className="me-4"/> :<FaEyeSlash className="me-4"/>}
                          </div>
                          <ErrorMessage
                                name="password"
                                component="span"
                                className="invalid-feedback"
                                />
                        {/* </FormGroup> */}
                      </Col>
                      <Col xs="12"  className="py-1">
                        <FormGroup className="position-relative">
                          <Label>{ConfirmPassword}<span className="font-danger">*</span></Label>
                          <Field type={showPassword ? "text" : "password"} value={confirm_password} name="confirm_password" onChange={getUserData} placeholder={` ${ConfirmPassword}`} className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`}/>
                          <ErrorMessage
                                name="confirm_password"
                                component="span"
                                className="invalid-feedback"
                                />
                        </FormGroup>
                      </Col>
                      <Col xs="12" lg="6">
                          <Label>{AccountCountry}<span className="font-danger">*</span></Label>                         
                          <Country name="country" placeholder="Select Country" className={`${submitErrors && `${errors.country ? "is-invalid" : "is-valid"}`}`}/>
                          <ErrorMessage
                            name="country"
                            component="span"
                            className="invalid-feedback"
                            />
                      </Col>
                      <Col xs="12" lg="6">
                        <FormGroup className="position-relative">
                          <Label>{RegistrationType}<span className="font-danger">*</span></Label>
                          <RegistrationTypes name="subscription_type" placeholder="Select Registration Type" isMulti={false} />
                          <ErrorMessage
                              name="subscription_type"
                              component="span"
                              className="invalid-feedback"
                              />
                        </FormGroup>
                      </Col>
                      
                      {isUnderAge ? (
                        <>
                        <Col xs="6">
                          <FormGroup className="position-relative">
                            <Label>{BirthDate}<span className="font-danger">*</span></Label>
                            <Field type='date'  name="date_of_birth" onChange={getUserData} placeholder={` ${BirthDate}`} className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`}/>
                            <ErrorMessage
                                name="date_of_birth"
                                component="span"
                                className="invalid-feedback"
                                />
                          </FormGroup>
                        </Col>
                        <Col xs="6">
                          <FormGroup className="position-relative">
                            <Label>{GuardianName}</Label>
                            <Field type='text' name="date_of_birth" onChange={getUserData} placeholder={` ${GuardianName}`} className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`}/>
                          </FormGroup>
                        </Col>
                        <Col xs="12">
                          <FormGroup className="position-relative">
                            <Label>{GuardianEmail}<span className="font-danger">*</span></Label>
                            <Field type='email' name="date_of_birth" onChange={getUserData} placeholder={` ${GuardianEmail}`} className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`}/>
                          </FormGroup>
                        </Col>
                        </>
                      ) :("")}
                      <Col xs="12">
                        <Link to={`${process.env.PUBLIC_URL}/all-registration-plans`} >{RegistrationPlanText}</Link>
                        <FormGroup className="position-relative">
                          <Label>{RegistrationPlan}<span className="font-danger">*</span></Label>                          
                          <Field
                              as="select"
                              name="subscription_plan"
                              className={`form-control ${submitErrors && `${errors.subscription_plan ? "is-invalid" : "is-valid"}` }`}
                              onChange={(e)=>changePlan(e)}
                              value={planId}
                            >
                            <option>{'Select'} {RegistrationPlan}</option>                            
                            {Plans?.dynamic?.map((d_item, index) => (<option key={index} value={d_item.plan_id}>{d_item.plan_name}</option>))}
                            </Field>
                            <ErrorMessage
                                name="subscription_plan"
                                component="span"
                                className="invalid-feedback"
                                />
                        </FormGroup>
                      </Col>
                      {Plans?.isSuccess ? (
                        Object.keys(Plans?.data?.data?.static?.pricings).map((s_item, index) => (
                          <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                              <div className="form-check form-check-inline radio radio-primary  mt-2">
                                  <Input id={`radioinline${index}`} type="radio" name={`radio_${s_item}`}  />
                                  <Label className="mb-0" for={`radioinline${index}`} check>
                                  {Plans?.data?.data?.static?.pricings[s_item]}
                                  </Label>                                                    
                              </div>
                              <H4 className='pt-4 text-center mb-4'>{`USD $500`}</H4>
                          </Col>
                        ))
                      ):("")}
                      <Col lg="12" xs="12">
                        <Row >                          
                          {/* <Col md="2" sm="5" className='border rounded text-center mx-1 my-1 col-5 pb-2'>
                              <div className="form-check form-check-inline radio radio-primary  mt-2">
                                  <Input id="radioinline4" type="radio" name="radio6" defaultChecked />
                                  <Label className="mb-0" for='radioinline4' check>                                  
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
                          </Col> */}
                        </Row>
                      </Col>
                      <Col xs="12">
                        <Card key={`3`}>
                            <CardHeaderCollapse title={PlanDetails} isOpen={isMyPlanOpen} setIsOpen={setIsMyPlanOpen}/>
                            <Collapse isOpen={isMyPlanOpen}> 
                            <CardBody >
                            <Row className='ps-1'>
                                <Col  md="12" sm="12" className='pt-1 justify-content-center'>
                                <Row className='border border-bottom-0'>                     
                                    <Col md="6" className='border-bottom p-2 fw-bold col-6'>{planStaticData?.plan_name}</Col>
                                    <Col md="6" className='border-bottom p-2 fw-bold col-6'>{planDynamicData?.plan_name}</Col>
                                    {planStaticData && planStaticData.pricings ? (
                                      Object.keys(planStaticData.pricings).map((item, index)=>(
                                        <>
                                        <Col md="6" className='p-2 col-6'>{planStaticData.pricings[item]}</Col>
                                        <Col md="6" className='p-2 col-6'>{planDynamicData.pricings[item]}</Col>
                                        </>
                                      ))
                                    ):("")}
                                                           
                                </Row>
                                {planStaticData && planStaticData.details? (
                                  planStaticData.details.map((item, index)=>(
                                    <>
                                    <Row className='border border-top-0 border-bottom-0'>
                                        <Col md="12" className={`fw-bold border-top border-bottom `}>{item.heading}</Col>
                                    </Row>
                                    <Row className={`border border-top-0  ${index == planStaticData.details.length-1 ? 'border-bottom' : 'border-bottom-0'}`} >
                                    {item.sub_headings ? (
                                      Object.keys(item.sub_headings).map((s_item, s_index)=>(
                                        <>
                                        <Col md="6" className='col-8'>{item.sub_headings[s_item]}</Col>
                                        <Col md="6" className='col-4'>{planDynamicData?.details[index]?.sub_headings[s_item]}</Col>
                                        </>
                                      ))
                                    ):("")}                                   

                                    </Row>
                                    </>
                                  ))
                                ):("")}
                                
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
                        <Btn color="primary" onClick={()=>setSubmitError(true)}>{ConnectNewRegisterAccount}</Btn>
                      </Col>
                      </Row> 
                </Form>
                )}
                </Formik>
                <Col xs="12 pt-4">
                  {AlreadhaveAccount}<Link to={`${process.env.PUBLIC_URL}/login`}> {Login}</Link>
                </Col>
                           
              </div>
            </Col>
          </Row>
        </div>
      </div>
    // </div>
  )
}

export default SignupAccount