import UserBanner from '../../../Component/App/User/UserBanner'
import { Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import {  AccountCountry, ApartmentBuilding, AreaStreetVillage, City, DefaultAddress, DeleteMyAccount,  FullName,  Home,  IntercomCode,  LandMark,  PhoneNumber,  PostalCode,  Save, State } from '../../../utils/Constant'
import { Btn } from '../../../AbstractElements'
import CommonSwitchSpan from '../../../Component/Forms/FormsWidgets/Switch/Common/CommonSwitchSpan'
import { useEffect } from 'react'
import { Formik } from 'formik'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const ShippingAddressAddNew = () => {
    const handleSubmit =() =>{}
  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`Shipping Addresses`} parent={Home} />
        <UserBanner/>
        <Container fluid>
        <Row>      
                <Col xl="12" >
                <Formik initialValues={{ username: "", password: "" }} onSubmit={handleSubmit}>
                    {({errors}) =>(
                    <Form>
                        <Card>
                        
                            <CardBody>
                                <Row>                                
                                    <Col sm="6" md="4" >
                                        <FormGroup>
                                            <Label >{FullName}<span className="font-danger">*</span></Label>
                                            <Input type="text" placeholder={FullName} />
                                        </FormGroup>
                                    </Col>
                                    
                                    <Col md="4">
                                        <FormGroup>
                                            <Label>{AccountCountry}<span className="font-danger">*</span></Label>
                                            <Input type='select' className="btn-square form-select">
                                            <option>{'Select'}</option>
                                            <option>{'Germany'}</option>
                                            <option>{'Canada'}</option>
                                            <option>{'Usa'}</option>
                                            <option>{'Aus'}</option>
                                            </Input>
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
                                            <Label >{PostalCode}</Label>
                                            <Input type="text" placeholder={PostalCode} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6" md="4" >
                                        <FormGroup>
                                            <Label >{ApartmentBuilding}<span className="font-danger">*</span></Label>
                                            <Input type="text" placeholder={ApartmentBuilding} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6" md="4" >
                                        <FormGroup>
                                            <Label >{AreaStreetVillage}</Label>
                                            <Input type="text" placeholder={AreaStreetVillage} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6" md="4" >
                                        <FormGroup>
                                            <Label >{LandMark}</Label>
                                            <Input type="text" placeholder={LandMark} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6" md="4" >
                                        <FormGroup>
                                            <Label >{PhoneNumber}</Label>
                                            <Input type="text" placeholder={PhoneNumber} />
                                        </FormGroup>
                                    </Col>
                                    <Col sm="6" md="4" >
                                        <FormGroup>
                                            <Label >{IntercomCode}</Label>
                                            <Input type="text" placeholder={IntercomCode} />
                                        </FormGroup>
                                    </Col>
                                
                                
                                    
                                    
                                    <Col md="12" className='pt-4'>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0  text-end icon-state switch-outline">
                                            <CommonSwitchSpan color={`success`} />
                                        </div>
                                        <Label className="m-l-10" check>{DefaultAddress}</Label>
                                    </div>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter className="text-left">
                                <Btn color="primary" type="submit">{Save}</Btn>
                            </CardFooter>
                        </Card>
                    </Form>
                    )}
                    </Formik>
                    <hr />
                    <Col>
                        <Btn color="primary" type="button">{DeleteMyAccount}</Btn>
                    </Col>
                </Col>
                
            </Row>
        </Container>
    </div>
  )
}

export default ShippingAddressAddNew