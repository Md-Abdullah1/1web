import UserBanner from '../../../Component/App/User/UserBanner'
import { Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import CardHeaderCommon from '../../../CommonElements/CardHeaderCommon/CardHeaderCommon'
import { Btn } from '../../../AbstractElements'
import { ChangePassword, ConfirmPassword, CurrentPassword, Home, NewPassword, SaveChanges } from '../../../utils/Constant'
import { useEffect } from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const Password = () => {
    useEffect(()=>{
        
      });
  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`Password`} parent={Home} />
    <UserBanner/>
    <Container fluid>
        <Row>
            <Col xl="12" >
                <Form>
                    <Card>
                        <CardHeaderCommon title={ChangePassword} tagClass={"card-title mb-0"} />
                        <CardBody>
                            <Row>
                                <Col sm="6" md="4" >
                                    <FormGroup>
                                        <Label>{CurrentPassword}<span className="font-danger">*</span></Label>
                                        <Input type="text" placeholder={CurrentPassword} />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="4" >
                                    <FormGroup>
                                        <Label>{NewPassword}<span className="font-danger">*</span></Label>
                                        <Input type="text" placeholder={NewPassword} />
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="4" >
                                    <FormGroup>
                                        <Label>{ConfirmPassword}<span className="font-danger">*</span></Label>
                                        <Input type="text" placeholder={ConfirmPassword} />
                                    </FormGroup>
                                </Col>
                            </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Btn color="primary" type="submit">{SaveChanges}</Btn>
                        </CardFooter>
                    </Card>
                </Form>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Password