import { Card, CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Row } from "reactstrap"
import CardHeaderCommon from '../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'
import { AboutMe, AccountCountry, City, Company, Emailaddress, FirstName, LastName, State, UpdateProfile, Username } from '../../../../utils/Constant'
import CommonSwitchSpan from "../../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan"
import { Btn } from "../../../../AbstractElements"
import { ErrorMessage, Field } from "formik"
import { ChangeEvent } from 'react';


const PersonalInformationForm = (props: any) => {
  const { errors, submitErrors, setSubmitError , formData , setFormData} = props;

  const handleInput = (event :ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({...setFormData , [name]: value });
  }

  return (
    <>
    <Form>
          <Card>
              <CardHeaderCommon title={`Edit Personal Information`} tagClass={"card-title mb-0"} />
              <CardBody>
                  <Row>
                      <Col sm="6" md="4" >
                              <Label>{Username}<span className="font-danger">*</span></Label>
                              <Field type="text" placeholder="Username" value={formData.username} className={`form-control ${submitErrors && `${errors.username ? "is-invalid" : "is-valid"}`}`} autoFocus={true} onChange={handleInput}/>
                              <ErrorMessage
                                name="username"
                                component="span"
                                className="invalid-feedback"
                              />  
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{FirstName}<span className="font-danger">*</span></Label>
                              <Field type="text" placeholder={FirstName} value={formData.firstname} className={`form-control ${submitErrors && `${errors.firstname ? "is-invalid" : "is-valid"}`}`}/>
                              <ErrorMessage
                                name="firstname"
                                component="span"
                                className="invalid-feedback"
                              />
                          </FormGroup>
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{LastName}<span className="font-danger">*</span></Label>
                              <Field type="text" placeholder="Last Name" value={formData.lastname} className={`form-control ${submitErrors && `${errors.lastname ? "is-invalid" : "is-valid"}`}`}/>
                              <ErrorMessage
                                name="lastname"
                                component="span"
                                className="invalid-feedback"
                              />
                          </FormGroup>
                      </Col>
                      <Col md="4">
                          <FormGroup>
                              <Label>{Company}</Label>
                              <Field type="text" placeholder="Company" value={formData.company} className={`form-control`}/>
                          </FormGroup>
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{`Phone Number`}</Label>
                              <Field type="text" placeholder="Phone Number" value={formData.phoneNumber} className={`form-control`} />
                          </FormGroup>
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{`Primary ${Emailaddress}`}<span className="font-danger">*</span></Label>
                              <Field type="email" placeholder="Email" value={formData.email} className={`form-control ${submitErrors && `${errors.lastname ? "is-invalid" : "is-valid"}`}`}/>
                              <ErrorMessage
                                name="username"
                                component="span"
                                className="invalid-feedback"
                              />
                          </FormGroup>
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{`Recovery Email`}</Label>
                              <Field type="email" placeholder="Recovery Email" value={formData.recovery_email} className={`form-control`}/>
                          </FormGroup>
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{`Official Website`}</Label>
                              <Field type="text" placeholder="Official Website" value={formData.website} className={`form-control`}/>
                          </FormGroup>
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{`Paypal Account`}</Label>
                              <Field type="text" placeholder="Paypal Account" value={formData.paypal_account} className={`form-control`} />
                          </FormGroup>
                      </Col>
                      
                      <Col md="4">
                          <FormGroup>
                              <Label>{`Languages`}</Label>
                              <Input type='select' className="btn-square form-select">
                              <option>{'Select Language'}</option>
                              <option>{'Germany'}</option>
                              <option>{'Canada'}</option>
                              <option>{'Usa'}</option>
                              <option>{'Aus'}</option>
                              </Input>
                          </FormGroup>
                      </Col>
                      <Col md="4">
                          <FormGroup>
                              <Label>{AccountCountry}<span className="font-danger">*</span></Label>
                              {/* <Input type='select' className="btn-square form-select">
                              <option>{'Select'}</option>
                              <option>{'Germany'}</option>
                              <option>{'Canada'}</option>
                              <option>{'Usa'}</option>
                              <option>{'Aus'}</option>
                              </Input> */}
                              <Field
                                as="select"
                                name={AccountCountry}
                                className={`form-control btn-square form-select ${submitErrors && `${errors.country ? "is-invalid" : "is-valid"}` }`}>
                              <option>{'Select'} {AccountCountry}</option>
                              <option>{'Germany'}</option>
                              <option>{'Canada'}</option>
                              <option>{'Usa'}</option>
                              <option>{'Aus'}</option>
                              </Field>
                              <ErrorMessage
                                name="country"
                                component="span"
                                className="invalid-feedback"
                              />  
                          </FormGroup>
                      </Col>
                      <Col md="4">
                          <FormGroup>
                              <Label>{State}</Label>
                              <Input type='select' className="btn-square form-select">
                              <option>{'Select'}</option>
                              <option>{'Germany'}</option>
                              <option>{'Canada'}</option>
                              <option>{'Usa'}</option>
                              <option>{'Aus'}</option>
                              </Input>
                          </FormGroup>
                      </Col>
                      <Col sm="6" md="4" >
                          <FormGroup>
                              <Label >{City}</Label>
                              <Field type="text" placeholder="City" className={`form-control`}/>
                          </FormGroup>
                      </Col>
                      
                      
                      <Col md="12">
                          <Label>{AboutMe}</Label>
                          <textarea className="form-control" rows={3} placeholder="Enter About your description" />
                      </Col>
                      <Col md="12" className='pt-4'>
                      <div className="d-flex align-items-center">
                          <div className="flex-shrink-0  text-end icon-state switch-outline">
                              <CommonSwitchSpan color={`primary`} defaultChecked/>
                          </div>
                          <Label className="m-l-10" check>{`Two-Step Authentication`}</Label>
                      </div>
                      </Col>
                  </Row>
              </CardBody>
              <CardFooter className="text-left">
                  <Btn color="primary" type="button" onClick={() => setSubmitError(true)}>{UpdateProfile}</Btn>
              </CardFooter>
          </Card>
      </Form>
    </>
  )
}

export default PersonalInformationForm