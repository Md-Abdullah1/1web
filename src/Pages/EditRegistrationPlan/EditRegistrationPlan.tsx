import React, { ChangeEvent, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import RenewSignupContainer from '../../Component/RenewSignup/RenewSignupContainer'
import Breadcrumbs from '../../CommonElements/Breadcrumbs/Breadcrumbs';
import UserBanner from '../../Component/App/User/UserBanner';
import { AccountSettings, MyRegistrationPlans } from '../../utils/Constant';

const EditRegistrationPlan = () => {
    const [formValue, setFormValue] = useState({});
    const getUserData = (event: ChangeEvent<HTMLInputElement>) =>{
        let name = event.target.name;
        let value = event.target.value;
        setFormValue({ ...formValue, [name]: value });
    }
    return (
        <div className='page-body'>
            <Breadcrumbs mainTitle={MyRegistrationPlans} parent={AccountSettings} />
            <UserBanner/>
            <Container fluid>
            <Row>
                <Col xs="12" className="p-0">
                <RenewSignupContainer formValue={formValue} getUserData={getUserData}/>
                
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default EditRegistrationPlan