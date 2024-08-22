
import UserBanner from '../../../Component/App/User/UserBanner'
import { Card, CardBody, Col, Container,  FormGroup, Input, Label, Row } from 'reactstrap'
import {   AddNewAddress,   Home,   ShippingAddress } from '../../../utils/Constant'
import { Btn, H1, H3 } from '../../../AbstractElements'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const ShippingAndDeliveryAddresses = () => {
  const getUserData = () =>{}
  useEffect(()=>{
    
  });
  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`Shipping Addresses`} parent={Home} />
    <UserBanner/>
    <Container fluid>
      <Row>
        <Col>
          <Card>
            <Row className='px-3 py-3'>
              <Col xl="12" className='d-flex justify-content-between ps-2 pe-2'><H1>{ShippingAddress}</H1><Link to={`${process.env.PUBLIC_URL}/account-settings/shipping-addresses/add-new`} ><Btn color="primary">{AddNewAddress}</Btn></Link></Col>
            </Row>
            <CardBody>
              <Row className="shopping-wizard">
                <Col xs="12">
                  <Row className="shipping-form g-5">
                  <Col xl="8" sm="12" className="">
                    <div className='shipping-wizard'>
                    <Row className="g-3">
                      <Col xxl="4" sm="6" >
                        <div className="card-wrapper border rounded-3 h-100 light-card">
                          <div className="collect-address d-flex justify-content-between">
                            <div className="d-flex gap-2 align-items-center">
                              <FormGroup check className="radio radio-primary">
                                <Input id={``} type="radio" name="address" value={``} checked onChange={getUserData}/>
                                <Label className="form-check-label mb-0" for={`Home`}>{`Default`}</Label>
                              </FormGroup>
                            </div>
                            <div className="card-icon">
                              <i className="fa fa-pencil p-1" />
                              <i className="fa fa-trash-o p-1" />
                            </div>
                          </div>
                          <div className="shipping-address">
                            <H3>{`Filomena Green`}</H3>
                            <span>Address: {`2211 Fruitville Rd, Sarasota, Florida, US 34237`}</span>
                            <span>Contact: {`+91 87865 78654`}</span>
                          </div>
                        </div>
                      </Col>          
                    </Row>
                    </div>
                  </Col>
                  </Row>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ShippingAndDeliveryAddresses