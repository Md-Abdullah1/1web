import { useEffect, useState } from 'react';
import UserBanner from '../../../Component/App/User/UserBanner'
import { Card, CardBody, CardFooter, Col, Container, Form, FormGroup, Input, Label, Row, InputGroup } from 'reactstrap'
import CardHeaderCommon from '../../../CommonElements/CardHeaderCommon/CardHeaderCommon'
import { Btn } from '../../../AbstractElements'
import { BirhtdayInformation, BirthDate, BirthdateProof, Home } from '../../../utils/Constant'
import ReactDatePicker from 'react-datepicker'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';

const BirthDateInformation = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleChange = (date: Date) => setStartDate(date);
    useEffect(()=>{
        // var scroll_top  =  window.innerWidth > 415 ? 450 : 210;
        // window.scrollTo({ top: scroll_top, behavior: "smooth" });
      });
  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`Birth Date Information`} parent={Home} />
        <UserBanner/>
        <Container fluid>
        <Row>
            <Col xl="12" >
                <Form>
                    <Card>
                        <CardHeaderCommon title={BirhtdayInformation} tagClass={"card-title mb-0"} />
                        <CardBody>
                            <Row>
                                <Col sm="6" md="8" >
                                    <FormGroup>
                                    <Label>{BirthDate}</Label>
                                    <InputGroup className="flatpicker-calender">
                                        <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={handleChange} />
                                    </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col sm="6" md="8" >
                                    <FormGroup>
                                        <Label>{BirthdateProof}</Label>
                                        <Input bsSize='md' type="file" />
                                    </FormGroup>
                                </Col>
                                
                            </Row>
                        </CardBody>
                        <CardFooter className="text-center">
                            <Btn color="primary" type="submit">{`Save Changes`}</Btn>
                        </CardFooter>
                    </Card>
                </Form>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default BirthDateInformation