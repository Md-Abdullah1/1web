import { ChangeEvent, useState } from "react";
import {Container, Row, Col, Form, FormGroup, Input} from "reactstrap";
import {Send, RecoverPassword, SignIn, EnterEmail, PlzEnterEmail} from "../../utils/Constant";
import { Btn, H4, P } from "../../AbstractElements";
import { Link } from "react-router-dom";
import { Logo} from '../Images';
import {forgetPasswordFormSchema} from './FormSchema';
import { ErrorMessage, Field, Formik } from "formik";

const ForgetPassword = () => {
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const [formValue, setFormValue] = useState({email:""});
    const getUserData = (event: ChangeEvent<HTMLInputElement>) =>{
        let name = event.target.name;
        let value = event.target.value;
        setFormValue({ ...formValue, [name]: value });
    }
    const handleSendEmail = () =>{
        if(formValue.email !==""){

        }else{
            // toast.error(PlzEnterEmail);
        }
    }

  return (
    <div className='page-body'>
       <div className="page-wrapper">
        <Container fluid className="p-0">
            <Row>
            <Col xs="12">
                <div className="login-card login-dark">
                <div>                    
                    <Logo width={200} className="w-25"/>                    
                    <div className="login-main">
                    <Formik initialValues={{ email: ""}} onSubmit={handleSendEmail} validationSchema={forgetPasswordFormSchema}>
                    {({errors}) =>(
                        <Form className="theme-form"  >
                            <H4>{RecoverPassword}</H4>                 
                            
                            <FormGroup className="pt-4">                        
                                <Field type="email" name="email" value={formValue.email} placeholder={EnterEmail} onChange={getUserData} className={`form-control ${submitErrors && `${errors.email ? "is-invalid" : "is-valid"}`}`} autoFocus={true}/>
                                <ErrorMessage
                                name="email"
                                component="span"
                                className="invalid-feedback"
                                />
                            </FormGroup>
                            <FormGroup className="mb-0">                        
                                <Btn color="primary" block className="w-100" onClick={()=>setSubmitError(true)}>{Send}</Btn>
                            </FormGroup>
                            <P className="mt-4 mb-0 text-center">{"Already have an password?"}
                            <Link className="ms-2" to={`/login`}>{SignIn}</Link>
                            </P>
                        </Form>
                    )}
                    </Formik>
                    </div>
                </div>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    </div>
  )
}

export default ForgetPassword;