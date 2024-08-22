
import UserBanner from '../../../Component/App/User/UserBanner';
import { Container, Col,  Row } from 'reactstrap'
import { Btn } from '../../../AbstractElements'
import {DeleteMyAccount,  Home} from '../../../utils/Constant'
import { useEffect,useState } from 'react';
import { Formik } from 'formik';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { personalInformationFormInitialValue, personalInformationFormSchema } from '../../../Data/App/AccountSettings/PersonalInformation';
import PersonalInformationForm from '../../../Component/App/AccountSettings/PersonalInformation/PersonalInformationForm';

export const data = {username:"", firstname:"", lastname:"", company:"", phoneNumber:"", email:"", recovery_email:"", website:"", paypal_account:"", languages:"", country:"", state:"", city:"", about:""}

const PersonalInformation = () => {
    const [submitErrors, setSubmitErrors] = useState<boolean>(false);
    const [formData, setFormData] = useState(data);
    
    useEffect(()=>{
        
    });    

    const handleSubmit =() =>{}

  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`Personal Information`} parent={Home} />
        <UserBanner/>
        <Container fluid>
        <Row>
            <Col xl="12" >
                <Formik
                initialValues={personalInformationFormInitialValue}
                onSubmit={handleSubmit}
                validationSchema={personalInformationFormSchema}
                >
                {({ errors }) => (
                    <PersonalInformationForm submitErrors={submitErrors} setSubmitErrors={setSubmitErrors} errors={errors} formData={formData} setFormData={setFormData}/>
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

export default PersonalInformation